<template>
    <div :class="buttonClasses">
        <button v-bind="$attrs" type="button" @click="onClick">
            {{ props.text }}
        </button>
    </div>
</template>

<script setup lang='ts'>

export interface Props {
    onClick: () => void;
    type?: 'success' | 'default';
    text?: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'default',
});

const buttonClasses = ['generic-button']

switch (props.type) {
    case 'success':
        buttonClasses.push('generic-button--success')
        break;
    default:
        break;
}


</script>



<style lang="scss" scoped>
.generic-button {
    margin-top: 20px;

    & button {
        outline: none;
        background-color: $color-neutral-dark-1;
        color: $color-neutral-light-2;
        height: 3rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 1rem;
        width: 100%;
        text-transform: uppercase;
        transition: all .3s ease;
        transform: scale(1);

        &:active {
            box-shadow: $shadow-inset;
            transition: box-shadow transform .1s ease;
        }

        &:hover {
            transform: scale(1.01);
            transition: box-shadow transform .3s ease;

        }

    }
    &--success {
        & button {
            background-color: $color-primary;
            color: $color-neutral-light-1;
        }
    }
}
</style>