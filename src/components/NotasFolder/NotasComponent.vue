<script setup>
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

    function eliminarEvaluacion(evaluacionAEliminar) {
        notasStore.eliminarEvaluacion(evaluacionAEliminar);
    }

    function calcularNotaPendiente(evaluacionPendiente) {
        notasStore.calcularNotaPendiente(evaluacionPendiente);
    }

</script>

<template>
    <div class="informacionNotas">
        <div class="evaluaciones">
            <div v-for="(evaluacion, index) in notasStore.ramoActual.evaluaciones" :key="index" class="evaluacion">
                <div class="inputs">
                    <input type="text" v-model="evaluacion.nombreNota" placeholder="Nombre"
                        id="nombreEvaluacion-{{ index }}" />

                    <label :for="'notaEvaluacion-' + index">Nota</label>
                    <input type="number" onclick="this.select();" min="1" max="7" step="0.1"
                        v-model.number="evaluacion.nota" :id="'notaEvaluacion-' + index" />
                    <div
                        :class="['alternar', { 'alternarPonderacion': !notasStore.ramoActual.promedioSimple }, { 'alternarPonderacionOculto': notasStore.ramoActual.promedioSimple }]">
                        <label :for="'ponderacion-' + index">Ponderación (%)</label>
                        <input class="ponderacionInput" type="number" onclick="this.select();" min="1" max="100"
                            step="0.01" v-model.number="evaluacion.ponderacion" :id="'ponderacion-' + index" />
                    </div>
                </div>
                <div class="evaluacionesButtons">
                    <p @click="calcularNotaPendiente(evaluacion)" class="buttonAlternarPendiente">Pendiente</p>
                    <p @click="eliminarEvaluacion(evaluacion)" class="eliminarEvaluacionButton">X</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .informacionNotas {
        display: flex;
        gap: 32px;
        padding: 32px 32px;
        align-items: center;
        justify-content: center;
    }

    .evaluaciones {
        display: flex;
        flex-wrap: wrap;
        width: fit-content;
        height: fit-content;
        gap: 16px;
        justify-content: center;
    }

    .evaluacion {
        padding: 16px;
        display: flex;

        width: fit-content;
        height: fit-content;

        border: 2px solid #34312D;
        border-radius: 16px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    .alternarPonderacion {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }

    .alternarPonderacionOculto {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0.1;
        gap: 16px;
    }


    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 16px;
        width: 100%; 
    }

    .inputs label {
        font-weight: bold;
        color: #34312D;
        font-size: 18px; 
    }

    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
        appearance: texfield;
    }

    .inputs input[type="number"] {
        text-align: center;
    }
    
    .inputs input { 
        width: 200px; 
        height: 45px;
        border: 1px solid #34312D;
        border-radius: 4px;
        font-size: 18px;
        text-align: center;
        padding: 0 16px; 
        box-sizing: border-box; 
        color: #34312D;
    }

    .inputs input:focus {
        border-color: #437057; 
        outline: none; 
        box-shadow: 0 0 0 2px rgba(67, 112, 87, 0.2);
    }
    
    .evaluacionesButtons {
        gap: 16px;
        display: flex;
        align-items: center;
        user-select: none;
    }

    .eliminarEvaluacionButton:hover {
        background-color: #A50104; 
        color: white; 
    }

    .eliminarEvaluacionButton {
        padding: 12px 16px;
        background-color: #DA2C38;
        width: fit-content;
        height: fit-content;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .buttonAlternarPendiente {
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

    .buttonAlternarPendiente {
        width: fit-content;
        height: fit-content;
    }

    .buttonAlternarPendiente:hover {
        background-color: #34312D; 
        color: white;
        border: 1px solid #34312D;
    }
</style>