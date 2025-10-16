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
                            <label for="universidad"></label>
                            <input v-model="mallaStore.universidad" type="text" id="universidad"></input>
                        </template>
                    </DefinirVariablesComponente>
                    <DefinirVariablesComponente>
                        <h2>Carrera</h2>
                        <p class="Regular14px">Especifica el nombre de la carrera que estudias.</p>
                        <template #Label>
                            <label for="carrera"></label>
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
        gap: 20px;
    }

    .config {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px 0;
    }

    .title {
        color: #34312D;
        margin-bottom: 20px;
    }

    .forms {
        display: flex;
        justify-content: center;
        margin: 16px 32px;
        gap: 32px;
        width: 90%;
        max-width: 1200px;
    }

    .Nombres > :deep(.DefinirVariablesComponente) {
        flex: 1;
    }

    @media (max-width: 900px) {
        .forms {
            flex-direction: column;
            align-items: center;
            margin: 16px 10px;
            gap: 20px;
        }

        .Nombres {
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }

        .title {
            font-size: 1.8em;
            text-align: center;
        }
    }
</style>