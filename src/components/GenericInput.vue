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



watch([modelValue, errorMessage], () => {
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
  margin: 1rem 0;


  & input {
    height: 3rem;
    background-color: $color-neutral-light-2;
    padding-left: 1.5rem;
    font-size: 1rem;
    border-radius: 16px;
    transition: background-color 0.3s ease;
    color: $color-primary;
    border: none;
    box-shadow: $shadow;
    border: 1px solid rgba($color: $color-neutral-dark-1, $alpha: .1);

    &:focus {
      outline: none;
      background-color: transparent;
      border: 1px solid $color-primary;
    }
  }

  & label {
    position: absolute;
    top: 1rem;
    height: 1rem;
    bottom: 0;
    left: 1rem;
    pointer-events: none;
    transition: transform 0.3s ease;
    text-align: left;
    transform: translate(0, -150%);
    color: $color-primary;

    .label-text {
      padding: 0 4px;
      font-size: 1.2rem;
      font-weight: 500;
      background-color: $color-neutral-light-2;
      transition: transform 0.3s ease;
    }
  }

  .error {
    color: $color-error;
    margin-left: 1rem;
    font-weight: bolder;
    visibility: hidden;
    opacity: 0.0;
    text-align: left;
  }


  &--empty {
    & label {
      transition: transform 0.3s ease;
      transform: translate(0);
    }

    input {
      &:focus+label {
        transition: transform 0.3s ease;
        transform: translate(0, -150%);
      }
    }
  }

  &--error {
    & input {
      border: 1px solid $color-error;
      transition: border-color 0.3s ease;
      color: $color-error;
      &:focus {
        border: 1px solid $color-error;
      }
    }

    & label {
      .label-text {
        color: $color-error;
        transition: color 0.3s ease;

      }
    }

    .error {
      visibility: visible;
      opacity: 1.0;
    }
  }


}
</style>
