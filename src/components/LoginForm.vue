<template>
    <div class="login-form">
        <div class="login-title">
            <h1>Task List App</h1>
        </div>
        <div class="input-group">
            <GenericInput name="Login" errorMessage="erro mimiim" v-model="login" />
            <GenericInput name="Senha" v-model="password" />
        </div>
        <GenericButton text="Entrar" type="success" :onClick="handleSignClick" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import GenericButton from './GenericButton.vue';
import GenericInput from './GenericInput.vue';

const login = ref("")
const password = ref("")

const handleSignClick = () => {
    console.log("entrar", login.value, password.value)
}
</script>

<style lang="scss" scoped>
.login-form {
    display: flex;
    padding: 10px;
    width: 400px;
    background-color: $light-color-1;
    flex-direction: column;
    justify-content: space-evenly;

    .login-title{
        display: flex;
        justify-content: center;
        color: $text-color-dark;
    }

    .input:first-child {
        margin-bottom: 2rem;
    }
}
</style>