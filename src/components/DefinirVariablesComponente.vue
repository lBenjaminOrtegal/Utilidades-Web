<script setup></script>

<template>
    <div class="name">
        <div class="Text">
            <slot></slot>
        </div>
        <div class="textSubmit">
            <slot name="Label"></slot>
        </div>
    </div>
</template>

<style>
    .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0px; 
        border-radius: 16px;
        padding: 16px;
        margin: 32px auto; 
        width: 90%; 
        max-width: 600px; 
    }

    .Text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 8px;
        width: 100%;
    }

    .Text h2 { 
        font-size: 30px;
        margin: 0; 
        color: #34312D; 
    }

    .textSubmit {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
        width: 100%; 
    }

    .textSubmit label {
        font-weight: bold;
        color: #34312D;
    }

    .textSubmit input { 
        width: 100%; 
        height: 45px;
        border: 1px solid #7E7F83;
        border-radius: 4px;
        font-size: 16px; 
        padding: 0 16px; 
        box-sizing: border-box; 
        color: #34312D;
        transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    
    .textSubmit input:focus {
        border-color: #437057;
        outline: none;
        box-shadow: 0 0 0 3px rgba(67, 112, 87, 0.3);
    }
</style>