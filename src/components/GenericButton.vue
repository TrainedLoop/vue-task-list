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
        background-color: $default-color-1;
        color: $text-color-light;
        height: 2.5rem;
        font-size: 1rem;
        border: none;
        box-shadow: inset 1px 2px 5px 2px rgba(0, 0, 0, 0),
            1px 2px 5px 2px rgba(0, 0, 0, 0.15);
        border-radius: 0.3rem;
        width: 100%;
        text-transform: uppercase;
        font-weight: bolder;
        transition: all .3s ease;
        transform: scale(1);

        &:active {
            box-shadow: inset 1px 2px 5px 2px rgba(0, 0, 0, 0.1),
                1px 2px 5px 2px rgba(0, 0, 0, 0);
            transition: box-shadow transform .1s ease;
        }

        &:hover {
            transform: scale(1.002);
            transition: box-shadow transform .3s ease;

        }

    }
    &--success {
        & button {
            background-color: $light-color-2;
            color: $text-color-light;
        }
    }
}
</style>