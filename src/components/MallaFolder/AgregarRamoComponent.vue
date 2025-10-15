<script setup>
    import { reactive } from 'vue';
    import { useMallaStore } from '../../stores/malla';

    const mallaStore = useMallaStore();

    const ramo = reactive({
        codigo: "",
        nombre: "",
        nivel: 0,
        prerreq: "",
        estado: ""
    })

    function handleSubmit() {
        if (!ramo.codigo || !ramo.nombre || !ramo.nivel) {
            alert("Rellena todos los espacios");
            return;
        }

        if (!ramo.prerreq) {
            ramo.estado = "desbloqueado";
        }
        else {
            ramo.estado = "bloqueado";
        }

        mallaStore.addRamo({ ...ramo });

        ramo.codigo = "";
        ramo.nombre = "";
        ramo.nivel = 0;
        ramo.prerreq = "";
        ramo.estado = "";
    }
</script>

<template>
    <div class="addRamo">
        <div class="Text">
            <h2>Agregar Ramo</h2>
            <p class="Regular14px">Agrega un ramo a tu malla actual, respeta los formatos.</p>
        </div>
        <form @submit.prevent="handleSubmit" class="form">
            <label for="codigo">Codigo</label>
            <input placeholder="Ej.: 10127" v-model="ramo.codigo" type="text" id="codigo"></input>

            <label for="nombre">Nombre</label>
            <input placeholder="Ej.: Electricidad y Magnetismo" v-model="ramo.nombre" type="text" id="nombre"></input>

            <label for="nivel">Nivel</label>
            <input v-model="ramo.nivel" type="number" id="nivel"></input>

            <label for="prerreq">Prerrequisitos</label>
            <input placeholder="Ej.: 10107, 10109" v-model="ramo.prerreq" type="text" id="prerrequisitos"></input>
            <button class="addRamoButton">Agregar</button>
        </form>
    </div>
</template>

<style scoped>
    .addRamo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px; 
        border-radius: 16px;
        padding: 32px;
        width: 90%; 
        max-width: 600px; 
    }

    .Text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .Text h2 { 
        font-size: 30px;
        margin: 0; 
        color: #34312D; 
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
        width: 100%; 
    }

    .form label {
        font-weight: bold;
        color: #34312D;
    }

    .form input { 
        width: 100%; 
        height: 45px;
        border: 1px solid #7E7F83;
        border-radius: 4px;
        font-size: 16px; 
        padding: 0 16px; 
        box-sizing: border-box; 
        color: #34312D;
    }

    .form input:focus {
        border-color: #437057; 
        outline: none; 
        box-shadow: 0 0 0 2px rgba(67, 112, 87, 0.2);
    }
    
    .addRamoButton {
        width: 100%; 
        height: 50px;
        display: flex; 
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        border: 1px solid #DED1C0;
        background-color: #226F54;
        color: white; 
        cursor: pointer; 
        transition: all 0.2s ease-in-out; 
    }

    .addRamoButton:hover {
        background-color: #34312D; 
        color: white; 
        border-color: #34312D;
    }
</style>