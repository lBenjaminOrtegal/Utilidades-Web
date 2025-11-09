<script setup>
import { useNotasStore } from '../../stores/notas';

const notasStore = useNotasStore();

const UMBRAL_APROBACION = 4;

</script>

<template>
    <div class="card p-3 shadow-lg mx-auto text-center ramo-info-card">

        <p class="h5 fw-bold text-dark mb-2 border-bottom pb-2">Promedio</p>

        <p :class="['display-4', 'fw-bold', 'mb-3',
            { 'text-danger-custom': notasStore.promedioRamo < UMBRAL_APROBACION },
            { 'text-success-custom': notasStore.promedioRamo >= UMBRAL_APROBACION }]">
            {{ notasStore.promedioRamo }}
        </p>

        <input class="form-control form-control-lg text-center fw-semibold mb-3 nombre-ramo-input"
            v-model="notasStore.ramoActual.nombre" type="text" placeholder="Nombre del Ramo"
            aria-label="Nombre del Ramo" />

        <div v-if="notasStore.calcularPonderacion !== 100 && notasStore.ramoActual.promedioSimple === false"
            class="alert alert-danger p-2 mb-0 alerta-ponderacion" role="alert">
            La ponderación no es 100% (Actual: {{ notasStore.calcularPonderacion }}%)
        </div>

    </div>
</template>

<style scoped>
.ramo-info-card {
    width: 100%;
    max-width: 280px;
    border-radius: 12px;
}

.text-danger-custom {
    color: #DA2C38 !important;
}

.text-success-custom {
    color: #226F54 !important;
}

.nombre-ramo-input {
    border: 1px solid #34312D;
    color: #34312D;
}

.nombre-ramo-input:focus {
    border-color: #437057;
    box-shadow: 0 0 0 0.25rem rgba(67, 112, 87, 0.2);
}

.alerta-ponderacion {
    font-size: 0.9rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    cursor: default;
}

.alerta-ponderacion:hover {
    transform: scale(1.02);
    box-shadow: 0 0 5px rgba(218, 44, 56, 0.5);
}
</style>