<script setup>
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

    function alternarPromedioSimple() {
        notasStore.alternarPromedioSimple();
    }

    function agregarEvaluacion() {
        notasStore.agregarEvaluacion();
    }

    function eliminarEvaluacion() {
        notasStore.eliminarEvaluacion();
    }

</script>

<template>
    <div class="cantidadEvaluaciones">
        <p class="bold20px">Evaluaciones</p>
        <div class="seleccionarCantidad">
            <div @click="eliminarEvaluacion()" class="menosButton">
                <p>-</p>
            </div>
            <div class="cantidadButton">
                <p>{{ notasStore.ramoActual.evaluaciones.length }}</p>
            </div>
            <div @click="agregarEvaluacion" class="masButton">
                <p>+</p>
            </div>
        </div>
        <div @click="alternarPromedioSimple"
            :class="['buttonAlternarPromedio', { 'buttonAlternarClicked': notasStore.ramoActual.promedioSimple }]">
            <p>{{ notasStore.ramoActual.promedioSimple ? 'Promedio Simple' : 'Promedio Ponderado' }}</p>
        </div>
    </div>
</template>

<style scoped>

    .cantidadEvaluaciones {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 330px;
        max-height: fit-content;
        border-radius: 16px;
        gap: 16px;
        padding: 32px;
    }

    .bold20px {
        font-size: 20px;
        font-weight: bold;
        color: #34312D;
    }

    .seleccionarCantidad {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
    }

    .menosButton, .cantidadButton, .masButton {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        width: 60px;
        height: 40px;
        transition: all 0.2s ease-in-out;
        border: 1px solid #DED1C0; 
    }  

    .menosButton {
        background-color: #DA2C38;
        color: white;
        border-radius: 8px 0px 0px 8px;
        cursor: pointer;
        user-select: none;
    }

    .cantidadButton{
        background-color: #DED1C0;
        color: #34312d;
    }

    .masButton {
        background-color: #226F54;
        color: white;
        border-radius: 0px 8px 8px 0px;
        cursor: pointer;
        user-select: none;
    }

    .buttonAlternarPromedio {
        padding: 12px 16px;
        display: flex;
        width: 180px;
        height: 30px;
        text-align: center;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        border: 1px solid #DED1C0; 
        background-color: #DED1C0;
        color: #34312D; 
        cursor: pointer; 
        user-select: none;
        transition: all 0.2s ease-in-out; 
    }

    .buttonAlternarClicked, .menosButton:hover, .masButton:hover {
        background-color: #34312D; 
        color: white;
        border: 1px solid #34312D;
    }

</style>