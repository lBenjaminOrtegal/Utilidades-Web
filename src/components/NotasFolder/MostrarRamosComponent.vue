<script setup>
    import { useNotasStore } from '../../stores/notas';

    const notasStore = useNotasStore();

    function seleccionarRamo(ramo) {
        notasStore.seleccionarRamo(ramo);
    }

</script>

<template>
    <div class="ramos">
        <div class="buttons">
            <div v-for="ramo in notasStore.ramos" :key="ramo.nombre" class="ramoButton">
                <p @click="seleccionarRamo(ramo)"
                    :class="['buttonAlternar', { 'buttonAlternarClicked': ramo.nombre === notasStore.ramoActual.nombre }]">
                    {{ ramo.nombre }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .ramos {
        gap: 16px;
        align-items: center;
        justify-content: center;
    }

    .buttons {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        gap: 12px;
    }

    .ramoButton {
        padding: 8px;
    }

    .buttonAlternar {
        padding: 12px 16px;
        display: flex;
        width: 180px;
        height: 30px;
        text-align: center;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        border: 1px solid #DED1C0; 
        background-color: #DED1C0;
        color: #34312D; 
        cursor: pointer; 
        user-select: none;
        transition: all 0.2s ease-in-out; 
    }

    .buttonAlternar:hover, .buttonAlternarClicked {
        background-color: #34312D; 
        color: white;
        border: 1px solid #34312D;
    }
</style>