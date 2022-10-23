<template>
  <div>
    <p>{{ apiResponse }}</p>
    <GenericInput v-model="apiResponse" name="test" />
    <GenericButton :onClick="handleClick" text="Botão test" type="default" />
    <GenericButton :onClick="handleClick" text="Botão test" type="success" />
  </div>
</template>

<script setup lang="ts">
import GenericInput from "@/components/GenericInput.vue";
import GenericButton from "@/components/GenericButton.vue";

import { ref, watch } from "vue";

const apiResponse = ref("");

const handleClick = ()=>{
  console.log("mimii")
}


watch(apiResponse, () => {
  console.log("=============apiResponse==========");
});
</script>
