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

    <div class="d-flex flex-column min-vh-100 bg-light">
        
        <HeaderComponent></HeaderComponent>
        
        <main class="flex-grow-1 container-fluid py-4">
        
            <section class="d-flex flex-wrap justify-content-center gap-4 mb-4">
                <CantidadEvaluacionesComponent></CantidadEvaluacionesComponent>
                <PromedioComponent></PromedioComponent>
                <CantidadRamosComponent></CantidadRamosComponent>
            </section>
            
            <MostrarRamosComponent class="mb-4"></MostrarRamosComponent>
            
            <NotasComponent></NotasComponent>
            
        </main>
        
        <FooterComponent></FooterComponent>
    </div>
</template>