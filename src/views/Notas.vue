<script setup>
    import FooterComponent from '../components/FooterComponent.vue';
    import HeaderComponent from '../components/HeaderComponent.vue';

    import NotasComponent from '../components/NotasFolder/NotasComponent.vue';
    import CantidadEvaluacionesComponent from '../components/NotasFolder/CantidadEvaluacionesComponent.vue';
    import CantidadRamosComponent from '../components/NotasFolder/CantidadRamosComponent.vue';
    import MostrarRamosComponent from '../components/NotasFolder/MostrarRamosComponent.vue';
    import PromedioComponent from '../components/NotasFolder/PromedioComponent.vue';
</script>

<template>
    <div class="container">
        <HeaderComponent></HeaderComponent>
        <div class="config">
            <CantidadEvaluacionesComponent></CantidadEvaluacionesComponent>
            <PromedioComponent></PromedioComponent>
            <CantidadRamosComponent></CantidadRamosComponent>
            <MostrarRamosComponent></MostrarRamosComponent>
        </div>
        <NotasComponent></NotasComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }

    .config {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 16px;
        gap: 16px;
        flex-wrap: wrap;
    }
</style>