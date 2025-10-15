<script setup>
    import { computed, ref} from 'vue';
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

    const ramoActual = ref(notasStore.ramos[0]);

    function seleccionarRamo(ramo) {
        ramoActual.value = ramo;
    }

    const promedioRamo = computed(() => {
        const ramo = ramoActual.value;

        if (!ramo.evaluaciones || ramo.evaluaciones.length === 0) {
            return "N/A";
        }

        if (ramo.promedioSimple) {
            let suma = 0;
            for (const evaluacion of ramo.evaluaciones) {
                suma += evaluacion.nota;
            }
            suma /= ramo.evaluaciones.length;
            return Number(suma.toFixed(2));
            
        } 
        else {
            let suma = 0;

            for (const evaluacion of ramo.evaluaciones) {
                suma += (evaluacion.nota * evaluacion.ponderacion)
            }

            suma /= 100;

            return Number(suma.toFixed(2));
        }
    });

    function alternarPromedioSimple() {
        ramoActual.value.promedioSimple = !ramoActual.value.promedioSimple;
    }

    function agregarEvaluacion() {
        ramoActual.value.evaluaciones.push({
            nombreNota: "PEP X",
            nota: 1.0,
            ponderacion: 0,
        })
    }

    function eliminarEvaluacion(evaluacionAEliminar) {
        const evaluaciones = ramoActual.value.evaluaciones;

        if (!evaluacionAEliminar || evaluaciones.length === 0) {
            evaluaciones.pop();
            return;
        }

        const index = evaluaciones.findIndex(e => e === evaluacionAEliminar);

        if (index !== -1) {
            evaluaciones.splice(index, 1);
        }
    }

    const calcularPonderacion = computed(() => {
        const evaluaciones = ramoActual.value.evaluaciones;

        if (!evaluaciones || evaluaciones.length === 0) {
            return 0;
        }

        const suma = evaluaciones.reduce((total, evaluacion) => {
            const ponderacion = Number(evaluacion.ponderacion) || 0;
            return total + ponderacion;
        }, 0);

        return suma;
    })

    function agregarRamo() {
        notasStore.ramos.push({
            nombre: `Ramo ${notasStore.ramos.length + 1}`,
            promedioSimple: true,
            evaluaciones: [
                {
                    nombreNota: "PEP 1",
                    nota: 1,
                    ponderacion: 30,
                },
                {
                    nombreNota: "PEP 2",
                    nota: 1,
                    ponderacion: 30,
                },
                {
                    nombreNota: "PEP 3",
                    nota: 1,
                    ponderacion: 40,
                },
            ],
        })
        ramoActual.value = notasStore.ramos[notasStore.ramos.length - 1];
    }

    function eliminarRamo() {
        if (notasStore.ramos.length == 1) {
            return;
        }

        const index = notasStore.ramos.findIndex(e => e === ramoActual.value);
        if (index !== -1) {
            notasStore.ramos.splice(index, 1);
            if (notasStore.ramos.length > 0) {
                ramoActual.value = notasStore.ramos[notasStore.ramos.length - 1];
            } else {
                ramoActual.value = {
                    nombre: "Nuevo Ramo",
                    evaluaciones: [],
                };
            }
        } else {
            console.log("Advertencia: El ramo actual no se encontró en el store.");
        }
    }

    function calcularNotaPendiente(evaluacionPendiente) {
        const evaluaciones = ramoActual.value.evaluaciones;
        const ponderacionEvaluacionPendiente = evaluacionPendiente.ponderacion / 100;
        let suma = 0;

        if (ramoActual.value.promedioSimple) {
            for (const evaluacion of evaluaciones) {
                if (evaluacion !== evaluacionPendiente) {
                    suma += evaluacion.nota
                }
            }
            const notaNecesaria = (3.95 * evaluaciones.length) - suma;
            evaluacionPendiente.nota =  Number(notaNecesaria.toPrecision(2));
        }

        else {
            for (const evaluacion of evaluaciones) {
                if (evaluacion !== evaluacionPendiente) {
                    const ponderacionActual = evaluacion.ponderacion / 100;
                    suma += evaluacion.nota * ponderacionActual;
                }
            }
            const notaNecesaria = (3.95 - suma) / ponderacionEvaluacionPendiente;
            evaluacionPendiente.nota = Number(notaNecesaria.toPrecision(2));
        }
    }

</script>

<template>
    <div class="config">
        <div class="cantidadEvaluaciones">
            <p class="bold20px">Evaluaciones</p>
            <div class="seleccionarCantidad">
                <div @click="eliminarEvaluacion()" class="menosButton">
                    <p class="cantidadEvaluacionesButton">-</p>
                </div>
                <div class="cantidadButton">
                    <p class="cantidadEvaluacionesButton">{{ ramoActual.evaluaciones.length }}</p>
                </div>
                <div @click="agregarEvaluacion" class="masButton">
                    <p class="cantidadEvaluacionesButton">+</p>
                </div>
            </div>
            <div @click="alternarPromedioSimple" :class="['buttonAlternarPromedio', { 'buttonAlternarClicked': ramoActual.promedioSimple }]">
                <p>{{ ramoActual.promedioSimple ? 'Promedio Simple' : 'Promedio Ponderado' }}</p>
            </div>
        </div>
        <div class="informacionRamo">
            <div class="cuadroPromedio">
                <p class="bold20px">Promedio</p>
                <p class="bold40px" :class="['bold40px', {'bold40pxPromedioRojo': promedioRamo < 3.95}, {'bold40pxPromedioVerde': promedioRamo >= 3.95}]">{{ promedioRamo }}</p>
                <input class="nombreRamoInput" v-model="ramoActual.nombre" type="text" id="nombreRamo"/>
                <div v-if="calcularPonderacion !== 100 && ramoActual.promedioSimple == false" class="alertaError">Ponderacion no es 100 ({{ calcularPonderacion }})</div>
            </div>
        </div>
        <div class="configurarRamos">
            <p class="bold20px">Editar Ramos</p>
            <div @click="agregarRamo" class="addRamoButton">Agregar Ramo</div>
            <div @click="eliminarRamo" class="deleteRamoButton">Eliminar Ramo</div>
        </div>
        <div class="ramos">
            <div class="buttons">
                <div v-for="ramo in notasStore.ramos" :key="ramo.nombre" class="ramoButton">
                    <p 
                        @click="seleccionarRamo(ramo)" 
                        :class="['buttonAlternar', { 'buttonAlternarClicked': ramo.nombre === ramoActual.nombre }]">
                        {{ ramo.nombre }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="informacionNotas">
        <div class="evaluaciones">
            <div v-for="(evaluacion, index) in ramoActual.evaluaciones" :key="index" class="evaluacion">
                <div class="inputs">
                    <input type="text" v-model="evaluacion.nombreNota" placeholder="Nombre" id="nombreEvaluacion-{{ index }}"/>
                
                    <label :for="'notaEvaluacion-' + index">Nota</label>
                    <input type="number" onclick="this.select();" min="1" max="7" step="0.1" v-model.number="evaluacion.nota" :id="'notaEvaluacion-' + index"/>
                    <div :class="['alternar', {'alternarPonderacion': !ramoActual.promedioSimple}, {'alternarPonderacionOculto': ramoActual.promedioSimple}]">
                        <label :for="'ponderacion-' + index" >Ponderación (%)</label>
                        <input class="ponderacionInput" type="number" onclick="this.select();" min="1" max="100" step="0.01" v-model.number="evaluacion.ponderacion" :id="'ponderacion-' + index"/>
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

    .alternarPonderacion, .alternarPonderacionOculto {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .alternarPonderacionOculto {
        opacity: 0.1;
        gap: 16px;
    }

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

    .deleteRamoButton {
        background-color: #DA2C38; 
    }

    .alertaError {
        color: #DA2C38;
        font-weight: bold;
        transition: all 0.2s ease-in-out;
        user-select: none;
    }

    .alertaError:hover {
        font-weight: bold;
        scale: 1.2;
    }

    .alternarPonderacion {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }

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
    
    .inputs input, .nombreRamoInput { 
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

    .nombreRamoInput {
        font-size: 20px;
        padding: 4px;
        width: 195px;
        border-radius: 8px;
        border: 1px solid #34312D;
        text-align: center;
    }

    .inputs input:focus, .nombreRamoInput:focus {
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

    .eliminarEvaluacionButton:hover, .deleteRamoButton:hover {
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

    .informacionRamo {
        gap: 16px;
        display: flex;
        flex-direction: column;
    }

    .cuadroPromedio, .cuadroRamo {
        display: flex;
        flex-direction: column;
        width: 240px;
        height: 130px;
        align-items: center;
        gap: 16px;
        padding: 16px;
    }

    .cuadroRamo label {
        font-weight: bold;
        color: #34312D;
    }

    .cuadroRamo input {
        width: 163px; 
        height: 45px;
        border: 1px solid #7E7F83;
        border-radius: 4px;
        font-size: 16px; 
        padding: 0 16px; 
        box-sizing: border-box; 
        color: #34312D;
    }

    .cuadroRamo input:focus {
        border-color: #437057; 
        outline: none; 
        box-shadow: 0 0 0 2px rgba(67, 112, 87, 0.2);
    }

    .bold32px {
        font-size: 32px;
        font-weight: bold;
        color: #34312D;
    }

    .bold40px {
        font-size: 40px;
        font-weight: bold;
        color: #34312D;
    }

    .bold40pxPromedioRojo {
        color: #DA2C38;
    }

    .bold40pxPromedioVerde {
        color: #226F54;
    }

    .config {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 16px;
        gap: 16px;
        flex-wrap: wrap;
    }

    .ramos {
        gap: 16px;
        align-items: center;
        justify-content: center;
    }

    .buttons {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        gap: 12px;
    }

    .ramoButton {
        padding: 8px;
    }

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

    .seleccionarCantidad {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
    }

    .bold20px {
        font-size: 20px;
        font-weight: bold;
        color: #34312D;
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

    .buttonAlternar, .buttonAlternarPendiente, .buttonAlternarPromedio {
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

    .buttonAlternar:hover, .buttonAlternarClicked, .buttonAlternarPendiente:hover, .menosButton:hover, .masButton:hover, .addRamoButton:hover {
        background-color: #34312D; 
        color: white;
        border: 1px solid #34312D;
    }
</style>