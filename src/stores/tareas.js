import { defineStore } from "pinia";
import { ref } from "vue";

export const useTareasStore = defineStore("tareas", () => {
    const tareas = ref([
        {
            nombre: "Agregar mi primera tarea.",
            tag: "Recordatorio",
            terminada: false,
            fecha: "",
        },
    ]);

    function eliminarTarea(tarea) {
        tareas.value = tareas.value.filter(t => t !== tarea);
    }

    function agregarTarea(tarea) {
        tareas.value.push(tarea);
    }

    function alternarTarea(tarea) {
        tarea.terminada = !tarea.terminada;
    }

    return {
        tareas,
        eliminarTarea,
        agregarTarea,
        alternarTarea,
    }
});