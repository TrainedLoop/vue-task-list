<script setup>
import { defineProps, toRefs, defineEmits } from 'vue'
const props = defineProps({
    modelValue: String,
    name: {
        type: String,
        required: true
    }
})

let { modelValue, name } = toRefs(props)
console.log(modelValue)
const emit = defineEmits(['update:modelValue'])
function updateValue(event) {
    emit('update:modelValue', event.target.value)
}


</script>

<template>
    <div class="input">
        <input v-bind="$attrs" :id="name" :name="name" autocomplete="off" :value="modelValue"
            :aria-labelledby="`placeholder-${name}`" @input="updateValue">
        <label class="input__placeholder-text" :for="name" :id="`placeholder-${name}`">
            <div class="text">{{name}}</div>
        </label>

    </div>
</template>

<style lang="scss" scoped>
.input {
    display: flex;
    flex-direction: column;
    max-width: 70vw;
    position: relative;

    & input {
        height: 2rem;
        font-size: 1rem;
        border: none;
        border-bottom: 1px solid;
        background-color: lightgrey;
        transition: background-color .3s ease;

        &:focus {
            outline: none;
            background-color: transparent;
            transition: background-color .3s ease;
        }

    }


    & label {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 3px;
        background-color: transparent;
        pointer-events: none;
        display: flex;
        align-items: center;
        transform: translate(0);
        transition: transform .3s ease;
        ;

    }

    & input:focus+label
    & input:not([value='']):not(:focus)+label {
        font-size: 0.8rem;
        color: black;
        transform: translate(0, -50%);
        transition: transform .3s ease;
        ;
    }
}
</style>