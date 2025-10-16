<script setup>
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

    function agregarRamo() {
        notasStore.agregarRamo();
    }

    function eliminarRamo() {
        notasStore.eliminarRamo();
    }
</script>

<template>
    <div class="configurarRamos">
        <p class="bold20px">Editar Ramos</p>
        <div @click="agregarRamo" class="addRamoButton">Agregar Ramo</div>
        <div @click="eliminarRamo" class="deleteRamoButton">Eliminar Ramo</div>
    </div>
</template>

<style scoped>
    .configurarRamos {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        max-height: fit-content;
        gap: 16px;
        padding: 16px;
        border-radius: 16px;
    }

    .addRamoButton, .deleteRamoButton {
        padding: 12px 16px;
        display: flex;
        width: 140px;
        height: 30px;
        text-align: center;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        border: 1px solid #DED1C0;
        color: white; 
        cursor: pointer; 
        user-select: none;
        transition: all 0.2s ease-in-out;
    }

    .addRamoButton {
        background-color: #226F54;
    }

    .addRamoButton:hover, .deleteRamoButton:hover {
        background-color: #34312D; 
        color: white;
        border: 1px solid #34312D;
    }

    .deleteRamoButton {
        background-color: #DA2C38; 
    }

    .bold20px {
        font-size: 20px;
        font-weight: bold;
        color: #34312D;
    }
</style>