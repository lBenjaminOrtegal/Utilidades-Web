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
        justify-content:baseline;
        min-height: 89.5vh;
    }

    .tareasContainer {
        display: flex;
        align-items:start;
        padding: 32px 0px;
        justify-content: space-around;
    }

</style>