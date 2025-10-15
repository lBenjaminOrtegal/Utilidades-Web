<script setup>
    import AgregarRamoComponent from '../components/MallaFolder/AgregarRamoComponent.vue';
    import EliminarRamoComponent from '../components/MallaFolder/EliminarRamoComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import MallaComponent from '../components/MallaFolder/MallaComponent.vue';
    import DefinirVariablesComponente from '../components/DefinirVariablesComponente.vue';
    import { useMallaStore } from '../stores/malla';

    const mallaStore = useMallaStore();
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <MallaComponent></MallaComponent>
    <div class="config">
        <h1 class="title">Configura tu malla</h1>
        <div class="forms">
            <AgregarRamoComponent></AgregarRamoComponent>
            <div class="eliminarYNombre">
                <EliminarRamoComponent></EliminarRamoComponent>
                <div class="Nombres">
                    <DefinirVariablesComponente>
                        <h2>Universidad</h2>
                        <p class="Regular14px">Especifica el nombre de tu universidad.</p>
                        <template #Label>
                            <label for="universidad">Cual es tu universidad?</label>
                            <input v-model="mallaStore.universidad" type="text" id="universidad"></input>
                        </template>
                    </DefinirVariablesComponente>
                    <DefinirVariablesComponente>
                        <h2>Carrera</h2>
                        <p class="Regular14px">Especifica el nombre de la carrera que estudias.</p>
                        <template #Label>
                            <label for="carrera">Que estudias?</label>
                            <input v-model="mallaStore.nombreCarrera" type="text" id="carrera"></input>
                        </template>
                    </DefinirVariablesComponente>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>

<style scoped>

    .eliminarYNombre {
        display: flex;
        flex-direction: column;
    }

    .Nombres {
        display: flex;
    }

    .config {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:flex-start;
    }
    .title {
        color: #34312D;
    }
    .forms {
        display: flex;
        justify-content: center;
        margin: 16px 32px;
        gap: 32px;
    }
</style>