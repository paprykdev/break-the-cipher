<template>
    <form
        v-bind="$attrs"
        class="flex min-w-1/2 md:min-w-1/4 flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out"
    >
        <slot />
    </form>
</template>
