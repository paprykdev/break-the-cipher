<script setup lang="ts">
defineProps({
    to: String,
});
</script>

<template>
    <NuxtLink
        :to="to"
        class="mt-5 text-primary transition-all duration-[400ms] hover:text-secondary"
        v-bind="$attrs"
    >
        <slot />
    </NuxtLink>
</template>
