<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <HeaderComponent></HeaderComponent>

    <main class="flex-grow-1">

      <div class="d-flex flex-column align-items-center gap-4 my-5 mx-auto p-3" style="max-width: 900px;">

        <div class="d-flex flex-column align-items-center text-center gap-2">

          <p class="text-muted fs-6 mb-0">Plataforma con utilidades para estudiantes</p>

          <h1 class="fw-bold display-4 text-dark mb-0">Simula tu malla y calcula tus notas</h1>

          <p class="fs-5 mb-0">Administra tu carrera y tus pendientes, todo en el mismo lugar</p>
        </div>

        <div class="d-flex justify-content-center gap-3 w-75 flex-column flex-md-row">

          <RouterLink class="btn btn-dark btn-lg fw-bold btn-personalizado" to="/malla">Ver Malla</RouterLink>
          <RouterLink class="btn btn-dark btn-lg fw-bold btn-personalizado" to="/notas">Calcular Notas</RouterLink>
          <RouterLink class="btn btn-dark btn-lg fw-bold btn-personalizado" to="/tareas">Agregar Tarea</RouterLink>
        </div>
      </div>
    </main>

    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
.btn-personalizado {
  background-color: #34312D;
  color: white;
  border: 1px solid #e2e2e2;
  width: 100%;
  max-width: 200px;
  transition: all 0.2s ease-in-out;
}

.btn-personalizado:hover {
  background-color: white;
  color: #34312D;
  border-color: #e2e2e2;
}

@media (max-width: 767.98px) {
  .btn-personalizado {
    max-width: none;
  }
}
</style>