import data from "~/assets/data.json";

export default defineEventHandler((event) => {
    return {
        data,
    };
});
