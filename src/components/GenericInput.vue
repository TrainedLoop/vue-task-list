<template>
  <div :class="styleClasses">
    <input v-bind="$attrs" :id="name" :name="name" autocomplete="off" :aria-labelledby="`placeholder-${name}`"
      :value="modelValue" @input="inputHandler" />
    <label :id="`placeholder-${name}`" :for="name">
      <span class="label-text">{{ name }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from "vue";

interface Props {
  modelValue?: string;
  name: string;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});
const emit = defineEmits<Emits>();

const { modelValue, name } = toRefs(props);
const styleClasses = ref(["input"]);

if (modelValue.value === "") {
  styleClasses.value.push("input--empty");
}

watch(modelValue, () => {
  if (modelValue.value === "") {
    styleClasses.value.push("input--empty");
  } else {
    styleClasses.value = styleClasses.value.filter((i) => i !== "input--empty");
  }
});

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
      transition: transform 0.3s ease;
      transform: translate(0, -100%);
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
