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
    <div class="p-3 notes-control-card">

        <h5 class="fw-bold mb-3 text-center text-dark border-bottom pb-2">Configuración de Notas</h5>

        <div class="d-grid gap-2 mb-4">

            <p class="mb-0 fw-semibold text-dark fs-5 text-center">Evaluaciones</p>

            <div class="d-flex justify-content-center">
                <div class="btn-group border rounded-pill overflow-hidden" role="group">

                    <button @click="eliminarEvaluacion()" type="button" class="btn btn-sm action-btn btn-danger-custom">
                        <span class="fs-5 fw-bold">-</span>
                    </button>

                    <div class="bg-light px-3 d-flex align-items-center justify-content-center">
                        <span class="fs-5 fw-bold text-dark">{{ notasStore.ramoActual.evaluaciones.length }}</span>
                    </div>

                    <button @click="agregarEvaluacion" type="button" class="btn btn-sm action-btn btn-success-custom">
                        <span class="fs-5 fw-bold">+</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="d-grid">
            <button @click="alternarPromedioSimple" :class="['btn', 'fw-bold', 'py-2', 'toggle-btn',
                { 'btn-light': !notasStore.ramoActual.promedioSimple },
                { 'btn-dark': notasStore.ramoActual.promedioSimple }]">

                <span v-if="notasStore.ramoActual.promedioSimple">Promedio Simple</span>
                <span v-else>Promedio Ponderado</span>
            </button>
        </div>

    </div>
</template>

<style scoped>
.notes-control-card {
    max-width: 350px;
    border-radius: 12px;
}

.action-btn {
    width: 45px;
    padding: 4px 0;
    line-height: 1;
    border: none;
}

.btn-danger-custom {
    background-color: #DA2C38;
    color: white;
}

.btn-danger-custom:hover {
    background-color: #A9212C;
    color: white;
}

.btn-success-custom {
    background-color: #226F54;
    color: white;
}

.btn-success-custom:hover {
    background-color: #174E3C;
    color: white;
}

.toggle-btn {
    transition: background-color 0.2s, color 0.2s;
    border: 1px solid #e2e2e2;
}
</style>