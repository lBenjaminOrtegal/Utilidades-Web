<script setup>
    import { useTareasStore } from '../../stores/tareas';
    import checkmark from '@/assets/checkmark.svg';
    import trash from '@/assets/trash.svg'; 

    const tareasStore = useTareasStore();

    function deleteTarea(tarea) {
        tareasStore.eliminarTarea(tarea);
    }

    function alternateTarea(tarea) {
        tareasStore.alternarTarea(tarea);
    }

</script>

<template>
    <div class="tareas">
        <div v-if="tareasStore.tareas.length > 0" v-for="tarea in tareasStore.tareas" :key="tarea" :class="['tarea', {tareaTerminada: tarea.terminada}, {tareaPendiente: !tarea.terminada}]">
            <div class="tareaContent">
                <input class="inputTag" v-model="tarea.tag" type="text" id="tag">
                <input v-model="tarea.nombre" type="text" id="nombre">
                <input v-if="tarea.fecha !== ''" class="inputFecha" v-model="tarea.fecha" type="date" id="fecha">
            </div>
            <div class="iconBar">
                <button @click="alternateTarea(tarea)" class="checkButton"><img :src="checkmark" alt="Completar"></button>
                <button @click="deleteTarea(tarea)" class="trashButton"><img :src="trash" alt="Eliminar"></button>
            </div>
        </div>
        <p v-else class="bold20px">Aun no agregas tareas por aqui!</p>
    </div>
</template>

<style scoped>
    .tareaContent {
        display: flex;
        justify-content: space-between;
    }

    .bold20px {
        font-size: 20px;
        color: #34312D;
        font-weight: bold;
    }

    .tareas {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        padding: 24px;
        gap: 12px;
        border-radius: 8px;
        box-sizing: border-box;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

    .iconBar {
        display: flex;
    }

    .tarea {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #34312D;
        width: 100%;
        max-width: 800px;
        border-radius: 8px;
        transition: background-color 0.2s ease, transform 0.2s ease;
        overflow: hidden;
        border: #34312D 1px solid;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        box-sizing: border-box;
    }

    .tarea:hover {
        transform: translateY(-2px);
    }

    .trashButton,
    .checkButton {
        border: none;
        background-color: transparent;
        padding: 0px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.25s ease;
        flex-shrink: 0;
        width: 50%;
        height: 50px;
    }

    .checkButton {
        background-color: #35A7FF;
    }

    .trashButton {
        background-color: #FF5964;
    }

    .checkButton img,
    .trashButton img {
        width: 24px;
        height: 24px;
    }

    .trashButton:hover,
    .checkButton:hover {
        background-color: white;
    }

    .tarea input {
        flex-grow: 1;
        background-color: transparent;
        padding: 12px 8px;
        font-size: 16px;
        color: white;
        border: none;
        outline: none;
        transition: border-bottom 0.2s ease;
    }

    .inputTag {
        font-weight: bold;
        width: 200px;
        flex-shrink: 0;
    }

    .tareaTerminada {
        background-color: #f4f4f4;
        opacity: 0.8;
    }

    .tareaTerminada input {
        text-decoration: line-through;
        color: #777 !important;
    }

    @media (max-width: 768px) {
        .tareas {
            padding: 16px 8px;
        }

        .tarea {
            flex-wrap: wrap;
            padding: 0;
        }

        .tareaContent {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 8px 0;
        }

        .tarea input {
            padding: 10px 16px;
            width: 100%;
            box-sizing: border-box;
        }

        .inputTag {
            width: 100%;
        }

        .checkIcon,
        .trashIcon {
            width: 50%;
            height: 30%;
            border-radius: 0;
            padding: 0;
            border: none;
            margin: 0;
        }

        .iconBar {
            display: flex;
            width: 100%;
            margin-top: 8px;
            border-radius: 0 0 8px 8px;
            overflow: hidden;
        }

        .trashIcon {
            border-radius: 0 0 8px 0;
        }

        .checkIcon {
            border-radius: 0 0 0 8px;
        }
    }
</style>
