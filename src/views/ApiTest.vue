<template>
  <div>
    <p>{{ apiResponse }}</p>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";

import { ref } from "vue";

const apiResponse = ref("");


</script>
