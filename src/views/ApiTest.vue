<template>
  <p>{{apiResponse}}</p>
</template>

<script>
import { testApi } from '@/services/apitest'
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
  mounted() {
    this.getApiTest()
  },
}
</script>
