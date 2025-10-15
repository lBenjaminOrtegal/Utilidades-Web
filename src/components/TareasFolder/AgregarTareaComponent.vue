<script setup>
    import { reactive } from 'vue';
    import { useTareasStore } from '../../stores/tareas';

    const tareasStore = useTareasStore();

    const tarea = reactive({
        nombre: "",
        tag: "",
        terminada: false,
        fecha: "",
    })

    function addTarea() {
        tareasStore.agregarTarea({ ...tarea });
        console.log(typeof tarea.fecha);
        console.log(tarea.fecha);

        tarea.nombre = "";
        tarea.tag = "";
        tarea.terminada = false;
        tarea.fecha = "";
    }

</script>

<template>

    <div class="agregarTarea">
        <p class="bold20px">Agregar Tarea</p>

        <label>Tag</label>
        <input placeholder="Recordatorio" v-model="tarea.tag" type="text" id="tag"></input>

        <label>Nombre</label>
        <input placeholder="Regar el cesped" v-model="tarea.nombre" type="text" id="name"></input>

        <input v-model="tarea.fecha" type="date" id="date"></input>
        <p @click="addTarea" class="addButton">Agregar</p>
    </div>

</template>

<style scoped>

    .bold20px {
        font-size: 20px;
        font-weight: bold;
        color: #34312D;
        text-align: center;
    }

    .agregarTarea {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 350px;
        justify-content: center;
        padding: 24px;
        gap: 20px;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    .agregarTarea label {
        font-size: 16px;
        color: #34312D;
        font-weight: bold;
        text-align: left;
    }

    .agregarTarea input {
        font-size: 16px;
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        outline: none;
        transition: border-color 0.3s;
        box-sizing: border-box;
    }

    .agregarTarea input:focus {
        border-color: #226F54;
        box-shadow: 0 0 0 2px rgba(34, 111, 84, 0.2);
    }

    .agregarTarea input[type="date"] {
        min-height: 40px;
    }

    .addButton {
        padding: 12px 20px;
        background-color: #226F54; /* rojo oscuro #A50104 */
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        text-align: center;
        font-size: 16px;
    }

    .addButton:hover {
        background-color: #34312D; 
        color: white; 
        border-color: #34312D;
    }
</style>