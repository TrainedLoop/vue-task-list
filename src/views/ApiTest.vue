<template>
  <p>{{apiResponse}}</p>
  <GenericInput name="test" v-model="apiResponse" />
</template>

<script setup>
// import { testApi } from '@/services/apitest'
import GenericInput from '@/components/GenericInput.vue'
import {  ref ,watch} from 'vue';

let apiResponse = ref('')

watch(apiResponse, () => {
    console.log('=============apiResponse==========')
    
})

</script>
