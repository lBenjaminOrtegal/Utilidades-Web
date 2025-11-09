<script setup>
import { reactive } from 'vue';
import { useTareasStore } from '../../stores/tareas';

const tareasStore = useTareasStore();

const tarea = reactive({
    nombre: "",
    tag: "",
    terminada: false,
    fecha: "",
})

function addTarea() {
    if (!tarea.nombre) {
        console.error("El nombre de la tarea no puede estar vacío.");
        return;
    }

    tareasStore.agregarTarea({ ...tarea });
    console.log("Nueva tarea agregada:", tarea.nombre, "Fecha:", tarea.fecha);

    tarea.nombre = "";
    tarea.tag = "";
    tarea.terminada = false;
    tarea.fecha = "";
}

</script>

<template>
    <div class="card p-4 shadow-lg mx-auto" style="max-width: 350px;">

        <p class="h4 fw-bold text-center mb-4 border-bottom pb-2">Agregar Tarea</p>

        <form @submit.prevent="addTarea" class="d-grid gap-3">

            <div class="mb-3">
                <label for="tag" class="form-label fw-bold">Tag</label>
                <input placeholder="Recordatorio" v-model="tarea.tag" type="text" id="tag" class="form-control">
            </div>

            <div class="mb-3">
                <label for="name" class="form-label fw-bold">Nombre</label>
                <input placeholder="Regar el cesped" v-model="tarea.nombre" type="text" id="name" class="form-control"
                    required>
            </div>

            <div class="mb-3">
                <label for="date" class="form-label fw-bold">Fecha de Vencimiento (Opcional)</label>
                <input v-model="tarea.fecha" type="date" id="date" class="form-control">
            </div>
            <button type="submit" class="btn btn-success btn-lg fw-bold w-100 mt-2">
                Agregar
            </button>
        </form>
    </div>

</template>

<style scoped>
.btn-success {
    background-color: #226F54 !important;
    border-color: #226F54 !important;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-success:hover {
    background-color: #34312D !important;
    border-color: #34312D !important;
    color: white;
    transform: scale(1.01);
}

.form-label {
    text-align: left;
    width: 100%;
}
</style>