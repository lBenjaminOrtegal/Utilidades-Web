<script setup>

</script>

<template>
    <div class="Frame1">
        <div class="myName">
            <p class="boldParagraph">Desarrollador</p>
            <p>Benjamin Ortega</p>
        </div>
        <a class="linkRef" href="https://github.com/lBenjaminOrtegal">Github</a>
    </div>
</template>

<style scoped>
    .Frame1 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #34312D;
        height: 100px;
        padding: 0 64px;
        box-sizing: border-box;
        flex-shrink: 0;
    }

    .myName {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 14px;
    }

    .linkRef {
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        color: white;
        padding: 24px 0;
        display: block;
    }

    .linkRef:hover {
        color: #DED1C0;
    }

    @media (max-width: 768px) {
        .Frame1 {
            height: 70px;
            padding: 0 20px;
        }
        
        .myName {
            font-size: 12px; 
        }

        .linkRef {
            font-size: 16px; 
            padding: 10px 0;
        }
    }
</style>