<script setup>
import { useNotasStore } from '../../stores/notas';

const notasStore = useNotasStore();

function seleccionarRamo(ramo) {
    notasStore.seleccionarRamo(ramo);
}
</script>

<template>
    <div class="d-flex justify-content-center flex-wrap gap-2 py-3 mx-auto" style="max-width: 800px;">

        <div v-for="ramo in notasStore.ramos" :key="ramo.nombre">

            <button @click="seleccionarRamo(ramo)" type="button" :class="['btn', 'fw-bold', 'py-2', 'px-3', 'ramo-button',
                { 'btn-dark': ramo.nombre === notasStore.ramoActual.nombre },
                { 'btn-outline-dark': ramo.nombre !== notasStore.ramoActual.nombre }]">

                {{ ramo.nombre }}
            </button>
        </div>

    </div>
</template>

<style scoped>
.btn-outline-dark {
<<<<<<< HEAD
    background-color: white;
    color: #34312D;
    border-color: #e2e2e2;
=======
    background-color: #0d6efd;
    color: white;
    border-color: #0d6efd;
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c
    transition: all 0.2s ease-in-out;
}

.btn-outline-dark:hover,
.btn-dark {
    background-color: #34312D !important;
    color: white !important;
<<<<<<< HEAD
    border-color: #e2e2e2 !important;
=======
    border-color: #34312D !important;
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c
}
</style>