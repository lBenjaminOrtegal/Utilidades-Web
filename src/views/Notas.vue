<script setup>
    import FooterComponent from '../components/FooterComponent.vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import NotasComponent from '../components/NotasFolder/NotasComponent.vue';
</script>

<template>
    <div class="container">
        <HeaderComponent></HeaderComponent>
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
</style>