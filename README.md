# 🧑‍💻 Break The Cipher

Aplikacja frontendowa polegająca na znalezieniu wartości przesunięcia (szyfrem cezara) z bazy podanych słów kluczowych.

[Link do strony internetowej](https://break-the-cipher.vercel.app)

## 📦 Technologie

- **Nuxt**
- **Tailwindcss**
- **NuxtUI** - dla powiadomień toast
- **Nuxt/google-fonts**

## 📁 Jak uruchomić?

1. Sklonuj repozytorium
```bash
git clone https://github.com/paprykdev/break-the-cipher.git
```
2. Przejdź do katalogu
```bash
cd break-the-cipher
```
3. Pobierz pakiety
```bash
npm install
```
4. Uruchom aplikację
```bash
npm run dev
```
5. (opcjonalnie) Zbuduj aplikację i uruchom ją
```bash
npm run build && npm start
```

## 🗃️ Struktura projektu
- **/pages**: routing aplikacji
- **/components**: kompontenty
- **/layouts**: layouty nuxt
- **/assets**: katalog który zostanie uwzględniony podczas budowania, przechowuje plik ze słowami kluczowymi
  - **/css**: globalne style
- **/server/api**: endpointy
