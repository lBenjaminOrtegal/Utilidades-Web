<script setup>
import { ref } from 'vue';
import { useMallaStore } from '../../stores/malla';

const mallaStore = useMallaStore();

const prerrequisitosResaltados = ref([]);

function mostrarRamosPrerrequisito(prerrequisitos) {
    prerrequisitosResaltados.value = prerrequisitos;
}

function ocultarRamosPrerrequisito() {
    prerrequisitosResaltados.value = [];
}

function debeResaltarse(codigo) {
    return prerrequisitosResaltados.value.includes(codigo);
}

function alternarEstadoRamo(ramo) {
    if (ramo.estado == "bloqueado") {
        ramo.estado = "desbloqueado";
    }
    else if (ramo.estado == "desbloqueado") {
        ramo.estado = "tomado";
    }
    else {
        ramo.estado = "bloqueado";
    }
    desbloquearRamos();
}

function desbloquearRamos() {
    mallaStore.ramos.forEach(ramo => {
        if (ramo.estado !== "tomado") {
            const todosPrerrequisitosTomados = ramo.prerreq.every(codigoPrerrequisito => {
                const ramoPrerrequisito = mallaStore.ramos.find(r => r.codigo === codigoPrerrequisito);
                return ramoPrerrequisito && ramoPrerrequisito.estado === "tomado";
            });
            if (todosPrerrequisitosTomados) {
                ramo.estado = "desbloqueado";
            } else {
                ramo.estado = "bloqueado";
            }
        }
    });
}

</script>

<template>
    <div class="container-fluid text-center p-3">

        <div class="mb-4">
            <h1 class="display-5 fw-bold text-dark mb-1">{{ mallaStore.universidad }}</h1>
            <h2 class="h5 fw-light text-secondary">{{ mallaStore.nombreCarrera }}</h2>
        </div>

        <div class="d-flex flex-nowrap overflow-auto py-2">

            <div v-for="semestre in mallaStore.calcularSemestres()" :key="semestre"
                class="d-flex flex-column align-items-center Semestre me-3">

                <h3 class="h4 fw-bold mb-3">Semestre {{ semestre }}</h3>

                <div v-for="ramo in mallaStore.ramos.filter(r => r.nivel == semestre)" :key="ramo.codigo"
                    @mouseover="mostrarRamosPrerrequisito(ramo.prerreq)" @mouseleave="ocultarRamosPrerrequisito"
                    @click="alternarEstadoRamo(ramo)" :class="['ramo', 'shadow-sm',
                        { ramoDesbloqueado: ramo.estado === 'desbloqueado' },
                        { ramoBloqueado: ramo.estado === 'bloqueado' },
                        { ramoTomado: ramo.estado === 'tomado' },
                        { 'ramoPrerrequisito': debeResaltarse(ramo.codigo) }]">

                    <p class="mb-0">{{ ramo.codigo }}</p>
                    <h2 class="mb-0">{{ ramo.nombre }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.d-flex.flex-nowrap {
    padding-bottom: 1rem;
}

.Semestre {
    min-width: 250px;
}

.ramo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 8px 0px;
    width: 220px;
    height: 80px;
    border-radius: 8px;
    border: 1px solid #5B5B5B;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    user-select: none;
    color: #34312D;
}

.ramo h2 {
    font-size: 14px;
    padding: 0 4px;
    font-weight: bold;
    line-height: 1.2;
}

.ramo p {
    font-size: 10px;
    opacity: 0.8;
}

.ramo.ramoDesbloqueado {
    background-color: #41A67E;
    border-color: #398d6b;
}

.ramo.ramoBloqueado {
    background-color: #DDDDDD;
    border-color: #afafaf;
}

.ramo.ramoTomado {
    background-color: #90D1CA;
    border-color: #7fb8b2
}

.ramo.ramoPrerrequisito {
    background-color: white;
    color: #34312D;
    border-color: #34312D;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(255, 179, 0, 0.4);
}

.ramo:hover {
    background-color: inherit;
    border-color: #34312D;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
}
</style>