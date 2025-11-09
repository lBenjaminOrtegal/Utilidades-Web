<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom px-5">
        
        <a class="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center" href="#">
            <img src="../../public/iconoUtilidadesWeb.png" alt="Logo" width="50">
            Utils.Web
        </a>

        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav gap-3">
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/">Inicio</RouterLink>
                </li>
                
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/malla">Malla</RouterLink>
                </li>
                
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/notas">Notas</RouterLink>
                </li>
                
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/tareas">Tareas</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .nav-link:hover {
        color: #0d6efd !important;
    }
</style>