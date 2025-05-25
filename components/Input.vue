<script setup lang="ts">
const model = defineModel({ default: '' });
</script>

<template>
    <input
        class="p-[12px_15px] w-full outline-none border-2 border-primary rounded-lg bg-bg text-white text-lg transition-all duration-500 focus:border-secondary"
        type="text"
        v-model="model"
        v-bind="$attrs"
    />
</template>
