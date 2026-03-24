import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import {resolve} from "node:path";

// https://vite.dev/config
export default defineConfig({
    base: './',
    build: {
        outDir: resolve(__dirname, '../source/tetrio-plus-plus-customize'),
        emptyOutDir: true
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        unocss(),
        vue(),
        Components({
            resolvers: [
                NaiveUiResolver()
            ]
        })
    ],
})
