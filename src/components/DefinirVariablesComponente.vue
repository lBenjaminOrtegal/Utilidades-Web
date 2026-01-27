<script setup>
</script>

<template>
    <div class="d-flex flex-column align-items-center gap-3 p-4 rounded-3 my-4 mx-auto shadow-sm"
        style="max-width: 600px;">

        <div class="text-center w-100 mb-2">
            <slot></slot>
        </div>

        <div class="d-grid gap-3 w-100">
            <slot name="Label"></slot>
        </div>
    </div>
</template>

<style scoped>
:global(.text-center h2) {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
    color: #34312D;
}
</style>