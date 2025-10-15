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
            <img @click="alternateTarea(tarea)" class="checkIcon" :src="checkmark"></img>
            <input class="inputTag" v-model="tarea.tag" type="text" id="tag"></input>
            <input class="inputNombre" v-model="tarea.nombre" type="text" id="nombre"></input>
            <input v-if="tarea.fecha !== ''" class="inputFecha" v-model="tarea.fecha" type="date" id="fecha"></input>
            <img @click="deleteTarea(tarea)" class="trashIcon" :src="trash"></img>
        </div>
        <p v-else class="bold20px">Aun no agregas tareas por aqui!</p>
    </div>

</template>

<style scoped>
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

    .tarea {
        display: flex;
        align-items: center;
        background-color: #34312D;
        padding: 8px;
        width: 100%;
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

    .trashIcon,
    .checkIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.25s ease;
        border: #34312D 1px solid;
        flex-shrink: 0;
    }

    .checkIcon {
        background-color: #35A7FF;
    }

    .trashIcon {
        background-color: #FF5964;
        margin-left: auto;
    }

    .trashIcon:hover,
    .checkIcon:hover {
        background-color: white;
        color: #34312D;
        transform: scale(1.1);
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
        width: 100px;
        flex-shrink: 0;
    }

    .inputFecha {
        height: 20px;
    }

    .tareaTerminada {
        background-color: #f4f4f4;
        opacity: 0.8;
    }

    .tareaTerminada input {
        text-decoration: line-through;
        color: #777 !important;
    }

    .tareaPendiente,
    .tareaPendiente input {
        text-decoration: none;
    }

    @media (max-width: 768px) {
        .tarea {
            flex-direction: column;
            align-items: stretch;
        }

        .checkIcon,
        .trashIcon {
            width: 100%;
            border-radius: 0;
            margin-left: 0;
        }

        .trashIcon {
            border-radius: 8px;
        }

        .checkIcon {
            border-radius: 8px;
        }
    }
</style>
