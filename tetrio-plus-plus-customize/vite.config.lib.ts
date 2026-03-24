import {defineConfig} from 'vite'
import {resolve} from "node:path";

// https://vite.dev/config
export default defineConfig(env => {
    return {
        base: './',
        build: {
            outDir: resolve(__dirname, '../source/tetrio-plus-plus-customize'),
            rolldownOptions: {
                input: resolve(__dirname, `src/loaders/${env.mode.startsWith('lib:') ? env.mode.split('lib:')[1] : null}.ts`),
                output: [
                    {
                        format: 'iife',
                        name: 'TetrioPlusPlusCustomize',
                        entryFileNames: 'loaders/[name].js',
                        codeSplitting: true
                    }
                ]
            }
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        }
    }
})
