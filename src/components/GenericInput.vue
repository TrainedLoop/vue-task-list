<script setup>
import { defineProps, toRefs, defineEmits } from 'vue'
const props = defineProps({
    modelValue: String

})

let { modelValue } = toRefs(props)
console.log(modelValue)
const emit = defineEmits(['update:modelValue'])
function updateValue(event) {
    emit('update:modelValue', event.target.value)
}


</script>

<template>
    <input :value="modelValue"  v-bind="$attrs" @input="updateValue" />
    <p>value: {{modelValue}}</p>
</template>