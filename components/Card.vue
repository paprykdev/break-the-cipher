<script setup lang="ts"></script>

<template>
    <div
        v-bind="$attrs"
        class="flex flex-col items-center justify-center w-3/5 gap-2.5 rounded-xl p-8 text-2xl text-secondary transition-all duration-[400ms] md:w-[30%]"
    >
        <slot />
    </div>
</template>

<style lang="scss" scoped>
div {
    box-shadow: 0 0 0 2px var(--secondary);
    &:hover {
        box-shadow: 0 0 30px 2px var(--secondary);
    }
}
</style>
