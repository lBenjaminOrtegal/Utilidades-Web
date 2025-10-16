<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import AgregarTareaComponent from '../components/TareasFolder/AgregarTareaComponent.vue';
import TareasComponent from '../components/TareasFolder/TareasComponent.vue';


</script>

<template>
    <div class="container">
        <HeaderComponent></HeaderComponent>
        <div class="tareasContainer">
            <AgregarTareaComponent></AgregarTareaComponent>
            <TareasComponent></TareasComponent>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 100vh;
        width: 100%;
    }

    .tareasContainer {
        display: flex;
        flex-grow: 1;
        align-items: flex-start;
        padding: 32px 20px;
        gap: 24px;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (max-width: 800px) {
        .tareasContainer {
            flex-direction: column;
            align-items: center;
            padding: 20px 10px;
            gap: 30px;
        }
    }

</style>