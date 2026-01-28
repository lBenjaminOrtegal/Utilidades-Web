<script setup>
import { useNotasStore } from '../../stores/notas';

const notasStore = useNotasStore();

function eliminarEvaluacion(evaluacionAEliminar) {
    notasStore.eliminarEvaluacion(evaluacionAEliminar);
}

function calcularNotaPendiente(evaluacionPendiente) {
    notasStore.calcularNotaPendiente(evaluacionPendiente);
}

const formatearYValidarNota = (event, evaluacion) => {
    let val = event.target.value.replace(/\D/g, "");
    if (val.length > 3) val = val.slice(0, 3);
    let resultado = "";

    if (val.length === 2) {
        resultado = val[0] + "," + val[1];
    } else if (val.length === 3) {
        resultado = val[0] + "," + val[1] + val[2];
    } else {
        resultado = val;
    }

    let numCheck = parseFloat(resultado.replace(",", "."));

    if (numCheck > 7) {
        resultado = "7,0";
        numCheck = 7.0;
    }
    if (numCheck < 1) {
        resultado = "1,0";
        numCheck = 1.0;
    }
    
    event.target.value = resultado;
    evaluacion.nota = isNaN(numCheck) ? null : numCheck;
};

</script>

<template>
    <div class="d-flex flex-wrap justify-content-center gap-3 py-4">

        <div v-for="(evaluacion, index) in notasStore.ramoActual.evaluaciones" :key="index"
            class="card shadow-sm custom-card">

            <div class="card-body p-3">

                <button @click="eliminarEvaluacion(evaluacion)"
                    class="btn-close delete-btn position-absolute top-0 end-0 m-2"
                    aria-label="Eliminar evaluación"></button>

                <div class="row g-3 inputs-container pt-3">
                    <div class="col-12">
                        <label :for="'nombreEvaluacion-' + index" class="form-label fw-semibold">Nombre</label>
                        <input type="text" v-model="evaluacion.nombreNota" :id="'nombreEvaluacion-' + index"
                            placeholder="Nombre de la Evaluación" class="form-control focus-custom" />
                    </div>

                    <div class="col-12 row gx-2 gy-3 align-items-end">
                        <div :class="[notasStore.ramoActual.promedioSimple ? 'col-6' : 'col-sm-3']">
                            <label :for="'notaEvaluacion-' + index" class="form-label fw-semibold">Nota</label>
                            <input type="text" inputmode="numeric" onclick="this.select();" :value="evaluacion.nota"
                                @input="formatearYValidarNota($event, evaluacion)" :id="'notaEvaluacion-' + index"
                                placeholder="7.0" maxlength="4"
                                class="form-control text-center nota-input focus-custom" />
                        </div>

                        <div v-if="!notasStore.ramoActual.promedioSimple" class="col-sm-5">
                            <label :for="'ponderacion-' + index" class="form-label fw-semibold">Ponderación (%)</label>
                            <input class="form-control text-center focus-custom" type="number" onclick="this.select();"
                                min="1" max="100" step="0.01" v-model.number="evaluacion.ponderacion"
                                :id="'ponderacion-' + index" />
                        </div>

                        <div :class="[notasStore.ramoActual.promedioSimple ? 'col-6' : 'col-sm-4']">
                            <label class="form-label fw-semibold text-white d-none d-sm-block invisible"></label>
                            <button @click="calcularNotaPendiente(evaluacion)"
                                class="btn btn-block btn-custom-secondary fw-bold w-100">
                                Pendiente
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-card {
    width: 100%;
    max-width: 420px;
    --bs-card-border-width: 1px;
    --bs-card-border-color: #e2e2e2;
    --bs-card-border-radius: 12px;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.delete-btn {
    opacity: 0.6;
    transition: opacity 0.2s;
}

.delete-btn:hover {
    opacity: 1;
}

.form-control.focus-custom:focus {
    border-color: #e2e2e2;
    box-shadow: 0 0 0 0.25rem rgba(67, 112, 87, 0.2);
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

.nota-input,
.form-control[type="number"] {
    text-align: center;
}

.btn-custom-secondary {
    --bs-btn-border-color: #e2e2e2;
    --bs-btn-bg: #34312D;
    --bs-btn-color: white;
    --bs-btn-hover-bg: white;
    --bs-btn-hover-color: #34312D;
    --bs-btn-hover-border-color: #e2e2e2;
    line-height: 1.5;
    height: 100%;
    transition: all 0.3s ease-in-out;
}
</style>