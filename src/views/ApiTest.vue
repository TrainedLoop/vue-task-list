<template>
  <div>
    <p>{{ apiResponse }}</p>
    <GenericInput v-model="apiResponse" name="test" />
  </div>
</template>

<script setup lang="ts">
import GenericInput from "@/components/GenericInput.vue";
import { ref, watch } from "vue";

const apiResponse = ref("");

watch(apiResponse, () => {
  console.log("=============apiResponse==========");
});
</script>
