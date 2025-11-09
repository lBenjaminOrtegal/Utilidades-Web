<script setup>
import { ref } from 'vue';
import { useMallaStore } from '../../stores/malla';

const mallaStore = useMallaStore();

const codigo = ref("");

function handleSubmit() {
    if (!codigo.value) {
        console.error("Rellena el espacio");
        return;
    }

    const codigoRamo = codigo.value;

    const ramoExiste = mallaStore.ramos.find(ramo => ramo.codigo === codigoRamo);

    if (ramoExiste) {
        mallaStore.deleteRamo(codigoRamo);
    }
    else {
        console.error(`No se encuentra el ramo con código '${codigoRamo}' en la malla.`);
    }
    codigo.value = "";
}
</script>

<template>

    <div class="mx-auto p-4 border rounded-3 shadow-lg my-4" style="max-width: 600px;">

        <div class="text-center mb-4">
            <h2 class="fw-bold text-danger mb-0">Eliminar Ramo</h2>
            <p class="text-muted small mt-1">Elimina un ramo de tu malla actual, respeta los formatos.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="d-grid gap-3">

            <div class="mb-3">
                <label for="codigo" class="form-label fw-bold">Codigo</label>
                <input placeholder="Ej.: 10101" v-model="codigo" type="text" id="codigo" class="form-control">
            </div>

            <button type="submit" class="btn btn-danger btn-lg fw-bold w-100 mt-2">
                Eliminar
            </button>
        </form>
    </div>
</template>

<style scoped>
.btn-danger {
    background-color: #DA2C38 !important;
    border-color: #DA2C38 !important;
}

.btn-danger:hover {
    background-color: #34312D !important;
    border-color: #34312D !important;
}
</style>