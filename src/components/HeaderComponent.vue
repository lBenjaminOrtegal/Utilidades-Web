<script setup>
<<<<<<< HEAD
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const navigateTo = (path) => {
    isMenuOpen.value = false;
    router.push(path);
};

const isActive = (path) => {
    return route.path === path;
};
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top custom-navbar">
        <div class="container">

            <a class="navbar-brand d-flex align-items-center gap-2" href="#">
                <img src="/src/assets/nombreUTILS.png" alt="Logo" width="200" class="d-inline-block align-text-top">
            </a>

            <button class="navbar-toggler custom-toggler border-0" type="button" @click="toggleMenu"
                aria-controls="navbarNav" :aria-expanded="isMenuOpen" aria-label="Toggle navigation"
                :class="{ 'active': isMenuOpen }">
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
            </button>

            <div class="collapse navbar-collapse mobile-anim" :class="{ 'show': isMenuOpen }" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center gap-2 gap-lg-1">

                    <li class="nav-item">
                        <a class="nav-link custom-link" :class="{ 'active-nav': isActive('/') }" href="#"
                            @click.prevent="navigateTo('/')">
                            Inicio
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link custom-link" :class="{ 'active-nav': isActive('/malla') }" href="#"
                            @click.prevent="navigateTo('/malla')">
                            Malla
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link custom-link" :class="{ 'active-nav': isActive('/notas') }"
                            href="#" @click.prevent="navigateTo('/notas')">
                            Notas
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link custom-link" :class="{ 'active-nav': isActive('/tareas') }" href="#"
                            @click.prevent="navigateTo('/tareas')">
                            Tareas
                        </a>
                    </li>

                    <li class="nav-item d-lg-none w-100">
                        <hr class="dropdown-divider">
                    </li>

                </ul>
            </div>
=======
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom px-5">
        
        <a class="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center" href="#">
            <img src="../../public/iconoUtilidadesWeb.png" alt="Logo" width="50">
            Utils.Web
        </a>

        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav gap-3">
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/">Inicio</RouterLink>
                </li>
                
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/malla">Malla</RouterLink>
                </li>
                
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/notas">Notas</RouterLink>
                </li>
                
                <li class="nav-item">
                    <RouterLink class="nav-link fs-5" to="/tareas">Tareas</RouterLink>
                </li>
            </ul>
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c
        </div>
    </nav>
</template>

<style scoped>
<<<<<<< HEAD
.custom-navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
    padding: 12px 0;
}

.custom-link {
    color: #4B525C;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 8px 16px !important;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.custom-link:hover {
    background-color: #f3f4f6;
}

.custom-toggler {
    outline: none;
    box-shadow: none !important;
    padding: 0.25rem 0.5rem;
}

.hamburger-lines {
    width: 30px;
    height: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.line {
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: #34353B;
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.custom-toggler.active .line1 {
    transform: rotate(45deg) translate(8px, 8px);
}

.custom-toggler.active .line2 {
    opacity: 0;
    transform: translateX(-10px);
}

.custom-toggler.active .line3 {
    transform: rotate(-45deg) translate(7px, -6px);
}

.navbar-collapse.collapsing {
    transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0.5;
}

.navbar-collapse.show {
    opacity: 1;
}

.active-nav {
    background-color: #e5e7eb;
}

@media (max-width: 991px) {
    .navbar-collapse {
        background-color: white;
        padding: 1rem;
        border-top: 1px solid #eee;
        margin-top: 10px;
    }

    .btn-login {
        width: 100%;
        margin-top: 10px;
        text-align: center;
    }
}
=======
    .nav-link:hover {
        color: #0d6efd !important;
    }
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c
</style>