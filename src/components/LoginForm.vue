<template>
    <div class="login-form">
        <div class="login-title">
            <h1>Task List App</h1>
        </div>
        <div class="input-group">
            <GenericInput name="Login" v-model="login" />
            <GenericInput name="Senha" type="password" errorMessage="erro mimiim" v-model="password" />
        </div>
        <GenericButton class="submit-login" text="Entrar" type="success" :onClick="handleSignClick" />
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
    width: 400px;
    border-radius: .5rem;
    padding: 1rem;
    box-shadow: $shadow;
    background-color: $color-neutral-light-2;
    flex-direction: column;
    justify-content: space-evenly;

    .login-title {
        display: flex;
        justify-content: center;
        color: $color-neutral-dark-1;
    }

    .input:first-child {
        margin-bottom: 2rem;
    }

    .submit-login {
        margin-top: 2rem;

    }
}
</style>