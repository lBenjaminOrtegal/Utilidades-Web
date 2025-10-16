<script setup>

</script>

<template>
    <header class="headerClass">
        <h1 class="headerTitle">Utilidades Web</h1>
        <div class="Links">
            <div class="navLink">
                <RouterLink class="link" to="/">Inicio</RouterLink>
            </div>
            <div class="navLink">
                <RouterLink class="link" to="/malla">Malla</RouterLink>
            </div>
            <div class="navLink">
                <RouterLink class="link" to="/notas">Notas</RouterLink>
            </div>
            <div class="navLink">
                <RouterLink class="link" to="/tareas">Tareas</RouterLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .headerTitle {
        font-size: 24px;
        font-weight: 600;
        color: #34312D;
    }

    .headerClass {
        height: 100px;
        padding: 0 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #7E7F83;
        box-sizing: border-box;
        width: 100%;
    }

    .Links {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .link {
        font-size: 20px;
        text-decoration: none;
        color: #34312D;
        transition: color 0.2s ease-in-out;
    }

    .link:hover {
        color: #DED1C0;
    }

    @media (max-width: 768px) {
        .headerClass {
            height: auto;
            padding: 15px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }

        .headerTitle {
            font-size: 20px;
            width: 100%;
            text-align: center;
        }

        .Links {
            width: 100%;
            gap: 10px;
            justify-content: space-between;
        }
        
        .navLink {
            flex-basis: auto; 
            flex-grow: 1; 
            text-align: center; 
        }

        .link {
            font-size: 16px;
            padding: 5px 0;
            display: block;
        }
    }
</style>