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
    <div class="container">
        <div class="text">
            <h1 class="title">{{ mallaStore.universidad }}</h1>
            <h2>{{ mallaStore.nombreCarrera }}</h2>
        </div>
        <div class="malla">
            <div v-for="semestre in mallaStore.calcularSemestres()" :key="semestre" class="Semestre">
                <h3>Semestre {{ semestre }}</h3>
                <div v-for="ramo in mallaStore.ramos.filter(r => r.nivel == semestre)" :key="ramo.codigo" 
                    @mouseover="mostrarRamosPrerrequisito(ramo.prerreq)" 
                    @mouseleave="ocultarRamosPrerrequisito" 
                    @click="alternarEstadoRamo(ramo)" 
                    :class="['ramo', 
                    {ramoDesbloqueado: ramo.estado === 'desbloqueado' }, 
                    {ramoBloqueado: ramo.estado === 'bloqueado'}, 
                    {ramoTomado: ramo.estado === 'tomado'}, 
                    {'ramoPrerrequisito': debeResaltarse(ramo.codigo)}]">
                    <p>{{ ramo.codigo }}</p>
                    <h2>{{ ramo.nombre }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: 100%; 
    }
    .title {
        color: #34312D;
    }
    .text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 16px 0px 32px 0px;
    }

    .text h2 {
        font-size: 22px;
        font-weight: 300;
        margin: 0;
    }

    .malla {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: flex-start; 
        margin: 0px 16px 32px 16px;
        overflow-x: auto;
        padding-bottom: 16px;
    }

    .Semestre {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 250px;
        padding: 0 8px;
    }
    .ramo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 8px 0px;
        color: white;
        width: 220px;
        height: 80px;
        border-radius: 8px;
        border: 1px solid white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        user-select: none;
    }

    .ramo h2 {
        font-size: 14px;
        margin: 0;
        padding: 0 4px;
        font-weight: bold;
        line-height: 1.2;
    }

    .ramo p {
        font-size: 10px;
        margin: 0;
        opacity: 0.8;
    }
    .ramo.ramoDesbloqueado {
        background-color: #226F54;
    }
    
    .ramo.ramoBloqueado {
        background-color: #7E7F83;
    }

    .ramo.ramoTomado {
        background-color: #DED1C0;
        color: #34312D;
        border: 1px solid #34312D;
    }

    .ramo.ramoPrerrequisito {
        background-color: white; 
        color: #34312D;
        border: 1px solid #34312D;
        transform: scale(1.05);
    }

    .ramo:hover {
        background-color: white; 
        color: #34312D;
        border-color: #437057;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }
</style>