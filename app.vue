<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
:root {
    --bg: #022b3a;
    --primary: #1f7a8c;
    --secondary: #bfdbf7;
    interpolate-size: allow-keywords;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    background: var(--bg);
    color: white;
}
header {
    width: 100vw;
    text-align: center;
    padding: 1.5rem 0;
    font-family: "Rubik Glitch", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 2.3rem;
}

a {
    color: white;
    text-decoration: none;
}

main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 10rem);
    position: relative;
}
</style>
