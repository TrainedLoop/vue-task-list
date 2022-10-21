<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

interface Props {
    modelValue?: string,
    name: string
}
interface Emits {
    (e: 'update', modelValue: string): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

let { modelValue, name } = toRefs(props);
let styleClasses = ref(['input'])

if (modelValue.value === "") {
    styleClasses.value.push('input--empty')
}


watch(modelValue, () => {
    if (modelValue.value === "") {
        styleClasses.value.push("input--empty")
    }
    else {
        styleClasses.value = styleClasses.value.filter(i => i !== 'input--empty')
    }
})

const inputHandler = (event: any) => {
    const { value } = event.target
    emit('update', value);
    return event
}
</script>

<template>
    <div v-bind:class="styleClasses">
        <input v-bind="$attrs" :id=" name" :name="name" autocomplete="off" :value=modelValue
            :aria-labelledby="`placeholder-${name}`" @input="inputHandler" />
        <label :for="name" :id="`placeholder-${name}`">
            <span class="label-text">{{ name }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.input {
    display: flex;
    flex-direction: column;
    position: relative;

    & input {
        height: 2rem;
        font-size: 1rem;
        border: none;
        border-bottom: 1px solid;
        transition: background-color 0.3s ease;

        &:focus {
            outline: none;
            background-color: transparent;
        }

    }


    & label {
        position: absolute;
        height: 2rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 3px;
        background-color: transparent;
        pointer-events: none;
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;

        .label-text {
            transition: transform .3s ease;
            transform: translate(0, -100%);
        }

    }

    &--empty {
        & label .label-text {
            transition: transform .3s ease;
            transform: translate(0);
        }

        input {
            &:focus+label .label-text {
                transition: transform .3s ease;
                transform: translate(0, -100%);
            }

        }
    }

}
</style>
