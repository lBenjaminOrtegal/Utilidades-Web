import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useNotasStore = defineStore("notas", () => {
    const ramos = ref([
        {
            nombre: "Ramo 1",
            promedioSimple: true,
            evaluaciones: [
                {
                    nombre: "PEP 1",
                    nota: 1.0,
                    ponderacion: 0,
                },
                {
                    nombre: "PEP 2",
                    nota: 1.0,
                    ponderacion: 0,
                },
                {
                    nombre: "PEP 3",
                    nota: 1.0,
                    ponderacion: 0,
                },
            ],
        }
    ]);

    const promedioRamo = computed(() => {
        const ramo = ramoActual.value;

        if (!ramo.evaluaciones || ramo.evaluaciones.length === 0) {
            return "N/A";
        }

        if (ramo.promedioSimple) {
            let suma = 0;
            for (const evaluacion of ramo.evaluaciones) {
                suma += evaluacion.nota;
            }
            suma /= ramo.evaluaciones.length;
            return Number(suma.toFixed(2));
            
        } 
        else {
            let suma = 0;

            for (const evaluacion of ramo.evaluaciones) {
                suma += (evaluacion.nota * evaluacion.ponderacion)
            }

            suma /= 100;

            return Number(suma.toFixed(2));
        }
    });

    const ramoActual = ref(ramos.value[0]);

    function seleccionarRamo(ramo) {
        ramoActual.value = ramo;
    }

    function alternarPromedioSimple() {
        ramoActual.value.promedioSimple = !ramoActual.value.promedioSimple;
    }

    function agregarEvaluacion() {
        ramoActual.value.evaluaciones.push({
            nombreNota: "PEP X",
            nota: 1.0,
            ponderacion: 0,
        });
    }

    function eliminarEvaluacion(evaluacionAEliminar) {
        const evaluaciones = ramoActual.value.evaluaciones;

        if (!evaluacionAEliminar || evaluaciones.length === 0) {
            evaluaciones.pop();
            return;
        }

        const index = evaluaciones.findIndex(e => e === evaluacionAEliminar);

        if (index !== -1) {
            evaluaciones.splice(index, 1);
        }
    }

    const calcularPonderacion = computed(() => {
        const evaluaciones = ramoActual.value.evaluaciones;

        if (!evaluaciones || evaluaciones.length === 0) {
            return 0;
        }

        const suma = evaluaciones.reduce((total, evaluacion) => {
            const ponderacion = Number(evaluacion.ponderacion) || 0;
            return total + ponderacion;
        }, 0);

        return suma;
    })

    function agregarRamo() {
        ramos.value.push({
            nombre: `Ramo ${ramos.value.length + 1}`,
            promedioSimple: true,
            evaluaciones: [
                {
                    nombreNota: "PEP 1",
                    nota: 1,
                    ponderacion: 30,
                },
                {
                    nombreNota: "PEP 2",
                    nota: 1,
                    ponderacion: 30,
                },
                {
                    nombreNota: "PEP 3",
                    nota: 1,
                    ponderacion: 40,
                },
            ],
        })
        ramoActual.value = ramos.value[ramos.value.length - 1];
    }

    function eliminarRamo() {
        if (ramos.value.length == 1) {
            return;
        }

        const index = ramos.value.findIndex(e => e === ramoActual.value);
        if (index !== -1) {
            ramos.value.splice(index, 1);
            if (ramos.value.length > 0) {
                ramoActual.value = ramos.value[ramos.value.length - 1];
            } else {
                ramoActual.value = {
                    nombre: "Nuevo Ramo",
                    evaluaciones: [],
                };
            }
        } else {
            console.log("Advertencia: El ramo actual no se encontró en el store.");
        }
    }

    function calcularNotaPendiente(evaluacionPendiente) {
        const evaluaciones = ramoActual.value.evaluaciones;
        const ponderacionEvaluacionPendiente = evaluacionPendiente.ponderacion / 100;
        let suma = 0;

        if (ramoActual.value.promedioSimple) {
            for (const evaluacion of evaluaciones) {
                if (evaluacion !== evaluacionPendiente) {
                    suma += evaluacion.nota
                }
            }
            const notaNecesaria = (3.95 * evaluaciones.length) - suma;
            evaluacionPendiente.nota =  Number(notaNecesaria.toPrecision(2));
        }

        else {
            for (const evaluacion of evaluaciones) {
                if (evaluacion !== evaluacionPendiente) {
                    const ponderacionActual = evaluacion.ponderacion / 100;
                    suma += evaluacion.nota * ponderacionActual;
                }
            }
            const notaNecesaria = (3.95 - suma) / ponderacionEvaluacionPendiente;
            evaluacionPendiente.nota = Number(notaNecesaria.toPrecision(2));
        }
    }

    return {
        ramos,
        promedioRamo,
        ramoActual,
        seleccionarRamo,
        alternarPromedioSimple,
        agregarEvaluacion,
        eliminarEvaluacion,
        calcularPonderacion,
        agregarRamo,
        eliminarRamo,
        calcularNotaPendiente,
    }
}, {
    persist: true,
});