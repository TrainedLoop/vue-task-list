<template>
    <div class="public">
        <div class="public__bg"></div>
        <div class="public__main">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.public {
    width: 100vw;
    height: 100vh;

    &__main {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
    }

    &__bg {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        filter: blur(16px);
        background-image: url("../assets/images/bg.jpg");
    }
}
</style>