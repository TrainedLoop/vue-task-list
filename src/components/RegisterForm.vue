

<template>
    <GenericCard>
        <div class="register-form">
            <div class="form-inputs">
                <GenericInput name="Nome" v-model="name" />
                <GenericInput name="Email" type="email" v-model="email" />
                <GenericInput name="Usuário" v-model="username" />
                <GenericInput name="Senha" type="password" v-model="password" />
                <GenericInput name="Confirme a senha" type="password" errorMessage="erro mimiim"
                    v-model="passwordConfirm" />
            </div>
            <GenericButton class="submit-register" text="Cadastrar" type="success" :onClick="handleRegisterClick" />
        </div>
    </GenericCard>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import GenericInput from './GenericInput.vue';
import GenericButton from './GenericButton.vue';
import GenericCard from './GenericCard.vue';

const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const name = ref("");

const handleRegisterClick = () => {
    console.log("entrar", username.value, password.value, email.value, name.value)
}
</script>

<style lang="scss" scoped>
.register-form {
    display: flex;
    width: 800px;
    flex-direction: column;
}
</style>