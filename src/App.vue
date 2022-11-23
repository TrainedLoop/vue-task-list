<script setup lang="ts">
import { markRaw, ref, VueElement, watch } from 'vue'
import { useRoute } from 'vue-router'

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as VueElement,
  async (metaLayout) => {
    if (metaLayout === undefined)
      return
    layout.value = markRaw(metaLayout)
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .fade-enter-active{
    transition: opacity .5s ease-out;
  }
  .fade-leave-active {
    transition: opacity 0.2s ease-in;
  }
  .fade-enter-from,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>