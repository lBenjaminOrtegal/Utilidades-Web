<script setup>
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

</script>

<template>
    <div class="informacionRamo">
        <div class="cuadroPromedio">
            <p class="bold20px">Promedio</p>
            <p class="bold40px"
                :class="['bold40px', { 'bold40pxPromedioRojo': notasStore.promedioRamo < 3.95 }, { 'bold40pxPromedioVerde': notasStore.promedioRamo >= 3.95 }]">
                {{ notasStore.promedioRamo }}</p>
            <input class="nombreRamoInput" v-model="notasStore.ramoActual.nombre" type="text" id="nombreRamo" />
            <div v-if="notasStore.calcularPonderacion !== 100 && notasStore.ramoActual.promedioSimple == false" class="alertaError">
                Ponderacion no es 100 ({{ notasStore.calcularPonderacion }})</div>
        </div>
    </div>
</template>

<style scoped>
    .informacionRamo {
        gap: 16px;
        display: flex;
        flex-direction: column;
    }

    .cuadroPromedio {
        display: flex;
        flex-direction: column;
        width: 240px;
        height: 130px;
        align-items: center;
        gap: 16px;
        padding: 16px;
    }

    .bold20px {
        font-size: 20px;
        font-weight: bold;
        color: #34312D;
    }

    .bold40px {
        font-size: 40px;
        font-weight: bold;
        color: #34312D;
    }

    .bold40pxPromedioRojo {
        color: #DA2C38;
    }

    .bold40pxPromedioVerde {
        color: #226F54;
    }

    input, .nombreRamoInput { 
        width: 200px; 
        height: 45px;
        border: 1px solid #34312D;
        border-radius: 4px;
        font-size: 18px;
        text-align: center;
        padding: 0 16px; 
        box-sizing: border-box; 
        color: #34312D;
    }

    .nombreRamoInput {
        font-size: 20px;
        padding: 4px;
        width: 195px;
        border-radius: 8px;
        border: 1px solid #34312D;
        text-align: center;
    }

    .alertaError {
        color: #DA2C38;
        font-weight: bold;
        transition: all 0.2s ease-in-out;
        user-select: none;
    }

    .alertaError:hover {
        font-weight: bold;
        scale: 1.2;
    }

</style>