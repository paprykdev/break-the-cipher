<script setup lang="ts">
const {
    query: { shift, text },
} = useRoute();

const ROTATE_CONST = -30;
</script>

<template>
    <div>
        <p>
            Wpisany tekst <br />
            <span>{{ text }}</span>
        </p>
        <p>Przesunięcie: {{ shift }}</p>
        <NuxtLink to="/">Powrót</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
* {
    font-family: Poppins, sans-serif;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    gap: 10px;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 0 0 2px var(--secondary);
    font-size: 1.5rem;
    color: var(--secondary);

    transition: all 0.4s;

    &:hover {
        box-shadow: 0 0 30px 2px var(--secondary);
    }
}

@media only screen and (min-width: 820px) {
    div {
        width: 30%;
    }
}

p {
    text-align: center;
}

a {
    margin-top: 20px;
    color: var(--primary);

    transition: all 0.4s;
    &:hover {
        color: var(--secondary);
    }
}

span {
    font-style: italic;
}
</style>
