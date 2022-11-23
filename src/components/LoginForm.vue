<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';
import GenericButton from './GenericButton.vue';
import GenericInput from './GenericInput.vue';
import GenericCard from './GenericCard.vue';

const store = useUserStore()
const { loginLoading, loginError } = storeToRefs(store);
const { authUser } = store

const login = ref("")
const password = ref("")

const buttonText = computed(() => {
    return loginLoading.value ? "Entrando..." : "Entrar"
})

const handleSignClick = async () => {
    if (loginLoading.value === true)
        return;
    await authUser({ login: login.value, password: password.value })
}
const handleRegisterClick = () => {
    router.push('/register')
}
</script>

<template>
    <GenericCard>
        <form class="login-form">
            <div class="login-title">
                <h1>Task List App</h1>
            </div>
            <div class="input-group">
                <GenericInput name="Login" v-model="login" />
                <GenericInput name="Senha" type="password" :errorMessage="loginError" v-model="password" />
            </div>
            <GenericButton class="submit-login" :text="buttonText" type="success" :onClick="handleSignClick" />
            <GenericButton class="register" text="Cadastrar" type="default" :onClick="handleRegisterClick" />
        </form>
    </GenericCard>
</template>

<style lang="scss" scoped>
.login-form {
    display: flex;
    width: 400px;
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