<template>
    <Form @submit.prevent="breakCipher(input)">
        <Input v-model="input" placeholder="Podaj zaszyfrowany tekst" />
        <Button>Rozwiąż</Button>
    </Form>
</template>

<script setup lang="ts">
import data from '~/assets/data.json';

let input: Ref<string> = ref('');
let toast = useToast();

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
            if (data.includes(word.toLowerCase())) {
                found = true;
                toast.add({
                    title: 'Znaleziono!',
                    description: shiftedSentence,
                    color: 'success',
                });
                await navigateTo({
                    path: '/result',
                    query: {
                        shift: i,
                        text: obfuscatedSentence,
                    },
                });
            }
        });
        if (found) return i;
    }
    input.value = '';

    toast.add({
        title: 'Error',
        description: 'Nie znaleziono przesunięcia',
        color: 'error',
    });
};
</script>
