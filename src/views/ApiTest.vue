<template>
  <p>{{apiResponse}}</p>
  <Input name="test"/>
</template>

<script>
import { testApi } from '@/services/apitest'
import Input from '@/components/GenericInput.vue'
export default {
  data() {
    return {
      apiResponse: "sem resposta"
    }
  },
  methods: {
    async getApiTest() {
      const response = await testApi()
      this.apiResponse = response.teste
    }
  },
  components: {
    Input
  },
  mounted() {
    this.getApiTest()
  },
}
</script>
