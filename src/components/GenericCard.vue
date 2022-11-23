<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped lang="scss">
.card {
    border-radius: .5rem;
    padding: 1.5rem;
    box-shadow: $shadow;
    background-color: $color-neutral-light-2;
    width: fit-content;
}
</style>