<script setup lang="ts">
const {
    query: { shift, text },
} = useRoute();
</script>

<template>
    <Card>
        <p class="text-center">
            Wpisany tekst <br />
            <span class="italic">{{ text }}</span>
        </p>
        <p class="text-center">Przesunięcie: {{ shift }}</p>
        <LinkComponent to="/">Powrót</LinkComponent>
    </Card>
</template>
