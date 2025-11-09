<script setup>
import { useTareasStore } from '../../stores/tareas';

const tareasStore = useTareasStore();

function deleteTarea(tarea) {
    tareasStore.eliminarTarea(tarea);
}

function alternateTarea(tarea) {
    tareasStore.alternarTarea(tarea);
}
</script>

<template>
    <div class="card shadow-lg mx-auto" style="max-width: 800px;">

        <div class="card-header bg-primary text-white text-center">
            <h5 class="mb-0 fw-bold">Lista de Tareas Pendientes</h5>
        </div>

        <div v-if="tareasStore.tareas.length > 0" class="list-group list-group-flush">

            <div v-for="tarea in tareasStore.tareas" :key="tarea.nombre" :class="['list-group-item', 'd-flex', 'align-items-center', 'py-3', 'task-item',
                { 'list-group-item-success': tarea.terminada },
                { 'list-group-item-light': !tarea.terminada }]">

                <div class="d-flex flex-column flex-md-row flex-grow-1 me-3">

                    <div class="d-flex flex-column flex-grow-1 me-md-3">
                        <small
                            :class="['fw-bold', 'mb-1', { 'text-success': tarea.terminada }, { 'text-primary': !tarea.terminada }]">
                            {{ tarea.tag || 'General' }}
                        </small>

                        <input class="form-control border-0 p-0 bg-transparent fw-semibold"
                            :class="{ 'text-decoration-line-through text-muted': tarea.terminada }" v-model="tarea.nombre"
                            type="text" placeholder="Nombre de la tarea">
                    </div>

                    <div v-if="tarea.fecha !== ''" class="mt-2 mt-md-0 text-md-end text-muted small flex-shrink-0">
                        Vence: <span class="fw-bold">{{ tarea.fecha }}</span>
                    </div>
                </div>

                <div class="btn-group btn-group-sm flex-shrink-0 ms-2" role="group">

                    <button @click="alternateTarea(tarea)"
                        :class="['btn', 'btn-outline-success', 'border-0', { 'active': tarea.terminada }]"
                        :title="tarea.terminada ? 'Marcar como Pendiente' : 'Completar'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </button>

                    <button @click="deleteTarea(tarea)" class="btn btn-outline-danger border-0" title="Eliminar Tarea">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div v-else class="card-body text-center text-muted">
            <p class="mb-0">¡No hay tareas pendientes! Disfruta de tu tiempo libre!</p>
        </div>
    </div>
</template>

<style scoped>
.task-item input {
    box-shadow: none !important;
    cursor: text;
}

.task-item:hover {
    cursor: default;
    background-color: var(--bs-light);
}

.list-group-item-success {
    border-left: 5px solid var(--bs-success);
}

.list-group-item-light {
    border-left: 5px solid var(--bs-secondary);
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>