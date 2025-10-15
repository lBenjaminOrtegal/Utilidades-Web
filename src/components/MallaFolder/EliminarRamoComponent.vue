<script setup>
    import { ref } from 'vue';
    import { useMallaStore } from '../../stores/malla';

    const mallaStore = useMallaStore();

    const codigo = ref("");

    function handleSubmit() {
        if (!codigo.value) {
            alert("Rellena el espacio");
            return;
        }
        const ramoExiste = mallaStore.ramos.find(ramo => ramo.codigo === codigo.value);

        if (ramoExiste) {
            mallaStore.deleteRamo(codigo.value);
        }
        else {
            alert(`No se encuentra el ramo con código '${codigoRamo}' en la malla.`);
        }
        codigo.value = "";
    }
</script>

<template>
    <div class="deleteRamo">
        <div class="Text">
            <h2>Eliminar Ramo</h2>
            <p class="Regular14px">Elimina un ramo de tu malla actual, respeta los formatos.</p>
        </div>
        <form @submit.prevent="handleSubmit" class="form">
            <label for="codigo">Codigo</label>
            <input placeholder="Ej.: 10101" v-model="codigo" type="text" id="codigo"></input>
            <button class="addRamoButton">Eliminar</button>
        </form>
    </div>
</template>

<style scoped>
    .deleteRamo {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        background-color: #DA2C38;
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