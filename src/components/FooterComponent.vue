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

    .Developer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .myName {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 14px;
    }

    .myName .boldParagraph {
        font-weight: bold;
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
</style>