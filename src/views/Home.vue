<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
  <div class="pageContainer">
    <HeaderComponent></HeaderComponent>

    <main class="mainContent">
      <div class="Hero">
        <div class="heroText">
          <p class="Regular14px">Plataforma con utilidades para estudiantes</p>
          <h1 class="Bold40px">Simula tu malla y calcula tus notas</h1>
          <p class="Regular16px">Administra tu carrera y tus pendientes, todo en el mismo lugar</p>
        </div>
        <div class="heroButtons">
          <RouterLink class="heroLink" to="/malla">Ver Malla</RouterLink>
          <RouterLink class="heroLink" to="/notas">Calcular Notas</RouterLink>
          <RouterLink class="heroLink" to="/tareas">Agregar Tarea</RouterLink>
        </div>
      </div>
    </main>

    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mainContent {
  flex-grow: 1;
}

.Hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 64px auto;
  max-width: 900px;
  padding: 0 16px;
}

.heroText {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.Regular14px {
  font-size: 14px;
  color: #7E7F83;
}

.Bold40px {
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
  color: #34312D;
}

.Regular16px {
  font-size: 16px;
  color: #34312D;
}

.heroButtons {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.heroLink {
  width: 180px;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  background-color: #DED1C0;
  color: #34312D;
  border: 1px solid #DED1C0;
  transition: all 0.2s ease-in-out;
}

.heroLink:hover {
  background-color: #34312D;
  color: white;
  border-color: #34312D;
  cursor: pointer;
}

.heroLink.secondary {
  background-color: transparent;
  color: #34312D;
  border: 1px solid #7E7F83;
}

.heroLink.secondary:hover {
  background-color: #7E7F83;
  color: white;
  border-color: #7E7F83;
}
</style>