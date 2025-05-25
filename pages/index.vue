<script setup lang="ts">
import data from '~/assets/data.json';
// const { data }: { data: string[] } = await $fetch("/api/data");

let input: Ref<string> = ref('');
let error: Ref<string> = ref('');

const baseCode = (s: number): number => {
    if (s >= 97 && s <= 122) {
        return 97;
    } else if (s >= 65 && s <= 90) {
        return 65;
    } else {
        return -1;
    }
};

const mod = (n: number): number => {
    return ((n % 26) + 26) % 26;
};

const breakCipher = (obfuscatedSentence: string) => {
    let found = false;
    for (let i = 0; i < 26; i++) {
        const shiftedSentence = obfuscatedSentence.replace(
            /[\w]/g,
            (letter: string) => {
                const code = letter.charCodeAt(0);
                const base = baseCode(code);

                return String.fromCharCode(mod(code - base - i) + base);
            }
        );
        const shiftedWords = shiftedSentence
            .split(/[^\w]+/g)
            .filter((e: string) => e != '');

        shiftedWords.forEach(async (word: string) => {
            if (data.includes(word)) {
                found = true;
                await navigateTo({
                    path: '/result',
                    query: {
                        shift: i,
                        text: obfuscatedSentence,
                    },
                });
            }
        });
        if (found) break;
    }
    if (found) return;

    error.value = 'Nie znalenziono przesunięcia!';
    input.value = '';
    setTimeout(() => (error.value = ''), 3250);
};
</script>

<template>
    <form @submit.prevent="breakCipher(input)">
        <input type="text" v-model="input" />
        <button>Rozwiąż</button>
    </form>
    <p v-if="error !== ''">{{ error }}</p>
</template>

<style scoped lang="scss">
* {
    font-family: Poppins, sans-serif;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

input {
    padding: 12px 15px;
    outline: none;
    border: 2px solid var(--primary);
    border-radius: 15px;
    background: var(--bg);
    color: white;
    font-size: 1.2rem;
    transition: all 0.5s;

    &:focus {
        border-color: var(--secondary);
    }
}

button {
    font-size: 1.2rem;
    padding: 10px 20px;
    width: 100%;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    width: fit-content;
    background: var(--bg);
    border: 2px solid var(--secondary);
    color: var(--secondary);

    transition: all 0.2s ease-in-out;

    &:hover {
        width: 100%;
        background: var(--secondary);
        color: var(--bg);
    }
}

p {
    position: absolute;
    bottom: -30px;
    right: 20px;
    background: #fff;
    color: #f00;
    border-radius: 3px 5px 5px 3px;
    border-left: 2px solid red;
    padding: 10px 10% 10px 10px;
    animation:
        show 0.5s 0s forwards,
        hide 0.5s 3s forwards;

    &::before {
        content: '';
        width: 0;
        height: 2px;
        background-color: red;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 0 10px 10px 0;

        animation: slide 3s forwards;
    }

    @keyframes slide {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes show {
        from {
            opacity: 0;
            right: 300px;
        }
        to {
            opactiy: 1;
            right: 20px;
        }
    }

    @keyframes hide {
        0% {
            opactiy: 1;
            right: 20px;
        }
        50% {
            opacity: 0;
            right: 150px;
        }
        100% {
            opacity: 0;
            right: 300px;
        }
    }
}
</style>
