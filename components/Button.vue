<template>
    <button
        class="text-lg p-[10px_20px] rounded-lg outline-none cursor-pointer w-fit bg-bg border-2 border-secondary text-secondary transition-all duration-200 ease-in-out hover:w-full hover:bg-secondary hover:text-bg"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>
