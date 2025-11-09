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

    <div class="py-4 text-center">
        <h1 class="display-6 fw-bold text-dark mb-4">Configura tu malla</h1>

        <div class="container my-4">
            <div class="row g-4 justify-content-center">

                <div class="col-12 col-lg-4">
                    <AgregarRamoComponent></AgregarRamoComponent>
                </div>

                <div class="col-12 col-lg-8">

                    <div class="mb-4">
                        <EliminarRamoComponent></EliminarRamoComponent>
                    </div>

                    <div class="row g-3">

                        <div class="col-12 col-md-6">
                            <DefinirVariablesComponente>
                                <h2 class="h5 fw-bold text-dark">Universidad</h2>
                                <p class="small text-muted">Especifica el nombre de tu universidad.</p>
                                <template #Label>
                                    <label for="universidad" class="visually-hidden">Universidad</label>
                                    <input v-model="mallaStore.universidad" type="text" id="universidad"
                                        class="form-control" placeholder="Nombre de la Universidad">
                                </template>
                            </DefinirVariablesComponente>
                        </div>

                        <div class="col-12 col-md-6">
                            <DefinirVariablesComponente>
                                <h2 class="h5 fw-bold text-dark">Carrera</h2>
                                <p class="small text-muted">Especifica el nombre de la carrera que estudias.</p>
                                <template #Label>
                                    <label for="carrera" class="visually-hidden">Carrera</label>
                                    <input v-model="mallaStore.nombreCarrera" type="text" id="carrera"
                                        class="form-control" placeholder="Nombre de la Carrera">
                                </template>
                            </DefinirVariablesComponente>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>