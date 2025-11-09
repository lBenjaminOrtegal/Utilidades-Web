<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import AgregarTareaComponent from '../components/TareasFolder/AgregarTareaComponent.vue';
import TareasComponent from '../components/TareasFolder/TareasComponent.vue';
</script>

<template>
    <div class="d-flex flex-column min-vh-100">

        <HeaderComponent></HeaderComponent>

        <main class="container py-5 flex-grow-1">

            <div class="row justify-content-center g-4">

                <div class="col-12 col-lg-4">
                    <AgregarTareaComponent></AgregarTareaComponent>
                </div>

                <div class="col-12 col-lg-8">
                    <TareasComponent></TareasComponent>
                </div>
            </div>
        </main>

        <FooterComponent></FooterComponent>
    </div>
</template>