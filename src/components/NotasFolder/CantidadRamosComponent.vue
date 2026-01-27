<script setup>
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

    function agregarRamo() {
        notasStore.agregarRamo();
    }

    function eliminarRamo() {
        notasStore.eliminarRamo();
    }
</script>

<template>
<<<<<<< HEAD
    <div class="p-3 text-center" style="max-width: 250px;">
        
        <h5 class="fw-bold mb-3 text-dark border-bottom pb-2">Editar Ramos</h5>
        
        <div class="d-grid gap-3">
=======
    <div class="card p-3 shadow-sm mx-auto text-center" style="max-width: 250px;">
        
        <h5 class="fw-bold mb-3 text-dark border-bottom pb-2">Editar Ramos</h5>
        
        <div class="d-grid gap-2">
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c
            
            <button @click="agregarRamo" 
                    type="button" 
                    class="btn btn-success-custom fw-bold py-2">
                Agregar Ramo
            </button>
            
            <button @click="eliminarRamo" 
                    type="button" 
                    class="btn btn-danger-custom fw-bold py-2">
                Eliminar Ramo
            </button>
        </div>
    </div>
</template>

<style scoped>
    .btn-success-custom {
        background-color: #226F54;
        color: white;
        border: 1px solid #226F54;
        transition: all 0.2s ease-in-out;
    }

    .btn-danger-custom {
        background-color: #DA2C38;
        color: white;
        border: 1px solid #DA2C38;
        transition: all 0.2s ease-in-out;
    }

    .btn-success-custom:hover, 
    .btn-danger-custom:hover {
        background-color: #34312D;
        color: white;
<<<<<<< HEAD
        border-color: #e2e2e2;
=======
        border-color: #34312D;
        transform: translateY(-1px);
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>