// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://BrigadaFantasma.github.io',
    base: 'WoWAmigos',
    vite: {
        plugins: [tailwindcss()],
    }
});
