<script setup>
import { ref, toRefs, watch } from 'vue';
const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        required: true,
    },
});

let { modelValue, name } = toRefs(props);
let styleClasses = ref(['input'])
if (modelValue.value === "") {
    styleClasses.value.push('input--empty')
}
const emit = defineEmits(['update:modelValue']);

watch(modelValue, () => {
    console.log('=============watch==========')
    if (modelValue.value === "") {
        styleClasses.value.push("input--empty")
    }
    else {
        styleClasses.value = styleClasses.value.filter(i => i !== 'input--empty')
    }
}, { deep: true })

function updateValue(event) {
    const { value } = event.target
    emit('update:modelValue', value);
}
</script>

<template>
    <div v-bind:class="styleClasses">
        <input v-bind="$attrs" :id=" name" :name="name" autocomplete="off" :value=modelValue
            :aria-labelledby="`placeholder-${name}`" @input="updateValue" />
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
