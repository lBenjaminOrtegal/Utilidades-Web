<script setup>
import { reactive } from 'vue';
import { useMallaStore } from '../../stores/malla';

const mallaStore = useMallaStore();

const ramo = reactive({
    codigo: "",
    nombre: "",
    nivel: 0,
    prerreq: "",
    estado: ""
})

function handleSubmit() {
    if (!ramo.codigo || !ramo.nombre || !ramo.nivel) {
        console.error("Rellena todos los espacios");
        return;
    }

    if (!ramo.prerreq) {
        ramo.estado = "desbloqueado";
    }
    else {
        ramo.estado = "bloqueado";
    }

    mallaStore.addRamo({ ...ramo });

    ramo.codigo = "";
    ramo.nombre = "";
    ramo.nivel = 0;
    ramo.prerreq = "";
    ramo.estado = "";
}
</script>

<template>

    <div class="mx-auto p-4 border rounded-3 shadow-lg my-4" style="max-width: 600px;">

        <div class="text-center mb-4">
            <h2 class="fw-bold text-dark mb-0">Agregar Ramo</h2>
            <p class="text-muted small mt-1">Agrega un ramo a tu malla actual, respeta los formatos.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="d-grid gap-3">

            <div class="mb-3">
                <label for="codigo" class="form-label fw-bold">Codigo</label>
                <input placeholder="Ej.: 10127" v-model="ramo.codigo" type="text" id="codigo" class="form-control">
            </div>

            <div class="mb-3">
                <label for="nombre" class="form-label fw-bold">Nombre</label>
                <input placeholder="Ej.: Electricidad y Magnetismo" v-model="ramo.nombre" type="text" id="nombre"
                    class="form-control">
            </div>

            <div class="mb-3">
                <label for="nivel" class="form-label fw-bold">Nivel</label>
                <input v-model="ramo.nivel" type="number" id="nivel" class="form-control" min="1">
            </div>

            <div class="mb-4">
                <label for="prerrequisitos" class="form-label fw-bold">Prerrequisitos</label>
                <input placeholder="Ej.: 10107, 10109" v-model="ramo.prerreq" type="text" id="prerrequisitos"
                    class="form-control">
            </div>

            <button type="submit" class="btn btn-success btn-lg fw-bold w-100">
                Agregar
            </button>
        </form>
    </div>
</template>

<style scoped>
.btn-success {
    background-color: #226F54 !important;
    border-color: #226F54 !important;
}

.btn-success:hover {
    background-color: #34312D !important;
    border-color: #34312D !important;
}
</style>