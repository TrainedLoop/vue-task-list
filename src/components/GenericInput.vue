<template>
  <div :class="styleClasses">
    <input v-bind="$attrs" :id="name" :name="name" autocomplete="off" :aria-labelledby="`placeholder-${name}`"
      :value="modelValue" @input="inputHandler" />
    <label :id="`placeholder-${name}`" :for="name">
      <span class="label-text">{{ name }}</span>
    </label>
    <div class="error">
      <small>{{ errorMessage }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from "vue";

interface Props {
  modelValue?: string;
  name: string;
  errorMessage?: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});
const emit = defineEmits<Emits>();

const { modelValue, name, errorMessage } = toRefs(props);
const styleClasses = ref(["input"]);



watch([modelValue,errorMessage], () => {
  if (modelValue.value === "") {
    styleClasses.value.push("input--empty");
  } else {
    styleClasses.value = styleClasses.value.filter((i) => i !== "input--empty");
  }
  if (errorMessage?.value !== "" && errorMessage?.value !== undefined) {
    styleClasses.value.push("input--error");
  }
  else {
    styleClasses.value = styleClasses.value.filter((i) => i !== "input--error");
  }
}, { immediate: true });

const inputHandler = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  emit("update:modelValue", value);
  return event;
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  position: relative;

  & input {
    height: 1rem;
    background-color: transparent;
    padding-left: 4px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid $default-color-1;
    transition: background-color 0.3s ease;
    color: $text-color-dark;
    color: $text-color-light;

    &:focus {
      outline: none;
      background-color: transparent;
    }
  }

  & label {
    position: absolute;
    height: 2rem;
    top: -.8rem;
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
      color: $text-color-light;
      transition: transform 0.3s ease;
      transform: translate(0, -100%);
    }
  }

  .error {
    color: $errorColor;
    padding-left: 5px;
    font-weight: bolder;
    visibility: hidden;
    opacity: 0.0;
    text-align: left;
  }

  &--error {
    .error {
      visibility: visible;
      opacity: 1.0;
    }
  }

  &--empty {
    & label .label-text {
      transition: transform 0.3s ease;
      transform: translate(0);
    }

    input {
      &:focus+label .label-text {
        transition: transform 0.3s ease;
        transform: translate(0, -100%);
      }
    }
  }
}
</style>
