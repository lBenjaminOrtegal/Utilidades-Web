import { defineStore } from "pinia";
import { ref } from "vue";

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

    return {
        ramos,
    }
}, {
    persist: true,
});