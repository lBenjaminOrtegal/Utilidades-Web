import { defineStore } from "pinia";
import { ref } from "vue";

export const useMallaStore = defineStore("malla", () => {
    const ramos = ref([
        { codigo: "10101", nombre: "Cálculo I", nivel: 1, prerreq: [], estado: "desbloqueado" },
        { codigo: "10102", nombre: "Álgebra I", nivel: 1, prerreq: [], estado: "desbloqueado" },
        { codigo: "10103", nombre: "Física I", nivel: 1, prerreq: [], estado: "desbloqueado" },
        { codigo: "10104", nombre: "Taller de Desarrollo Personal e Integral", nivel: 1, prerreq: [], estado: "desbloqueado" },
        { codigo: "10125", nombre: "Introducción a la Ingeniería", nivel: 1, prerreq: [], estado: "desbloqueado" },
        { codigo: "10126", nombre: "Métodos de Estudio", nivel: 1, prerreq: [], estado: "desbloqueado" },

        { codigo: "10107", nombre: "Cálculo II", nivel: 2, prerreq: ["10101"], estado: "bloqueado" },
        { codigo: "10108", nombre: "Álgebra II", nivel: 2, prerreq: ["10102"], estado: "bloqueado" },
        { codigo: "10109", nombre: "Física II", nivel: 2, prerreq: ["10103"], estado: "bloqueado" },
        { codigo: "10110", nombre: "Fundamentos de Programación", nivel: 2, prerreq: ["10101"], estado: "bloqueado" },
        { codigo: "10111", nombre: "Química General", nivel: 2, prerreq: [], estado: "desbloqueado" },
        { codigo: "13287", nombre: "Introducción a la Ingeniería Informática", nivel: 2, prerreq: ["10125"], estado: "bloqueado" },

        { codigo: "10115", nombre: "Análisis Estadístico", nivel: 3, prerreq: ["10107"], estado: "bloqueado" },
        { codigo: "10123", nombre: "Ecuaciones Diferenciales y Métodos Numéricos", nivel: 3, prerreq: ["10107", "10110"], estado: "bloqueado" },
        { codigo: "10127", nombre: "Electricidad y Magnetismo", nivel: 3, prerreq: ["10107", "10109"], estado: "bloqueado" },
        { codigo: "10128", nombre: "Comunicación Efectiva", nivel: 3, prerreq: ["10104"], estado: "bloqueado" },
        { codigo: "10130", nombre: "Inglés I", nivel: 3, prerreq: ["10126"], estado: "bloqueado" },
        { codigo: "13201", nombre: "Métodos de Programación", nivel: 3, prerreq: ["10110", "13287"], estado: "bloqueado" },

        { codigo: "10116", nombre: "Fundamentos de Economía", nivel: 4, prerreq: ["10101"], estado: "bloqueado" },
        { codigo: "10131", nombre: "Inglés II", nivel: 4, prerreq: ["10130"], estado: "bloqueado" },
        { codigo: "13204", nombre: "Paradigmas de Programación", nivel: 4, prerreq: ["13201"], estado: "bloqueado" },
        { codigo: "13205", nombre: "Análisis de Algoritmos", nivel: 4, prerreq: ["13201"], estado: "bloqueado" },
        { codigo: "13252", nombre: "Ingeniería de Sistemas", nivel: 4, prerreq: ["10125", "10111", "10115"], estado: "bloqueado" },
        { codigo: "13273", nombre: "Estructura de Computadores", nivel: 4, prerreq: ["10108", "10127"], estado: "bloqueado" },

        { codigo: "10132", nombre: "Inglés III", nivel: 5, prerreq: ["10131"], estado: "bloqueado" },
        { codigo: "13209", nombre: "Fundamentos de Ingeniería de Software", nivel: 5, prerreq: ["13204"], estado: "bloqueado" },
        { codigo: "13260", nombre: "Informática y Sociedad", nivel: 5, prerreq: ["10128"], estado: "bloqueado" },
        { codigo: "13261", nombre: "Sistemas de Información", nivel: 5, prerreq: ["13252"], estado: "bloqueado" },
        { codigo: "13274", nombre: "Diseño de Base de Datos", nivel: 5, prerreq: ["13204"], estado: "bloqueado" },
        { codigo: "13275", nombre: "Organización de Computadores", nivel: 5, prerreq: ["13273"], estado: "bloqueado" },
        { codigo: "13288", nombre: "Evaluación de Proyectos Informáticos", nivel: 5, prerreq: ["10123", "10116"], estado: "bloqueado" },

        { codigo: "10133", nombre: "Inglés IV", nivel: 6, prerreq: ["10132"], estado: "bloqueado" },
        { codigo: "13212", nombre: "Sistemas Operativos", nivel: 6, prerreq: ["13205", "13275"], estado: "bloqueado" },
        { codigo: "13215", nombre: "Taller de Bases de Datos", nivel: 6, prerreq: ["13274", "13209"], estado: "bloqueado" },
        { codigo: "13265", nombre: "Técnicas de Ingeniería de Software", nivel: 6, prerreq: ["13209"], estado: "bloqueado" },
        { codigo: "13266", nombre: "Redes Computacionales", nivel: 6, prerreq: ["13275"], estado: "bloqueado" },
        { codigo: "13289", nombre: "Administración de Proyectos Informáticos", nivel: 6, prerreq: ["13288"], estado: "bloqueado" },

        { codigo: "13267", nombre: "Proyecto de Ingeniería de Software", nivel: 7, prerreq: ["13265", "13215", "13289"], estado: "bloqueado" },
        { codigo: "13268", nombre: "Tópicos de Especialidad I", nivel: 7, prerreq: ["13265", "13266"], estado: "bloqueado" },
        { codigo: "13269", nombre: "Tópicos de Especialidad II", nivel: 7, prerreq: ["13265", "13266"], estado: "bloqueado" },
        { codigo: "13270", nombre: "Tópicos de Especialidad III", nivel: 7, prerreq: ["13265", "13266", "13289"], estado: "bloqueado" },
        { codigo: "13276", nombre: "Seminario de Computación", nivel: 7, prerreq: ["13260", "13261", "13212", "13215"], estado: "bloqueado" },

        { codigo: "13277", nombre: "Trabajo de Titulación", nivel: 8, prerreq: ["13276"], estado: "bloqueado" }
    ]);

    const universidad = ref("Universidad de Santiago de Chile");

    const nombreCarrera = ref("Ingeniería de Ejecución en Computación e Informática");

    function calcularSemestres() {
        let totalSemestres = 0;
        for (const ramo of ramos.value) {
            if (ramo.nivel >= totalSemestres) {
                totalSemestres = ramo.nivel;
            }
        }
        return totalSemestres;
    }

    function addRamo(ramo) {
        ramos.value.push(ramo);
    }

    function deleteRamo(codigo) {
        ramos.value = ramos.value.filter(ramo => ramo.codigo !== codigo);
    }
    
    return {
        ramos,
        universidad,
        nombreCarrera,
        calcularSemestres,
        addRamo,
        deleteRamo,
    }
},{
    persist: true
});