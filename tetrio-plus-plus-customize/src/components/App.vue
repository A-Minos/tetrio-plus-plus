<script lang="ts" setup>
import {darkTheme} from "naive-ui";
import plugins from "@/plugins";
import {type Ref, ref, watch} from "vue";
import {isEmptyish} from "remeda";
import {generatePluginStateStorageKey} from "@/utils/plugin";
import {computedAsync} from "@vueuse/core";
import hljs from 'highlight.js/lib/core'
import type Plugin from "@/types/plugin";
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('css', css)
hljs.registerLanguage('javascript', javascript)

const mappedPlugins = computedAsync(async () => {
    return Promise.all(
        plugins.map(async plugin => {
            const storageKey = generatePluginStateStorageKey(plugin.id)
            const state = ref<boolean>(await browser.storage.local.get(storageKey).then(data => !!data[storageKey]) ?? false)

            watch(state, newState => {
                browser.storage.local.set({
                    [storageKey]: newState
                })
            })

            return {
                ...plugin,
                show_code: ref(false),
                state
            } satisfies Plugin & {
                show_code: Ref<boolean>
                state: Ref<boolean>
            }
        })
    )
}, [])
</script>

<template>
    <n-config-provider :hljs="hljs" :theme="darkTheme">
        <n-layout position="absolute">
            <n-layout-content class="p-10">
                <n-flex size="small" vertical>
                    <n-h1 prefix="bar">
                        <n-flex align="center" size="small">
                            <n-text>tetr.io plus + 定制</n-text>
                            <n-text :depth="3">By</n-text>
                            <n-a href="https://github.com/A-Minos">A Minos</n-a>
                        </n-flex>
                    </n-h1>

                    <n-list bordered class="plugins">
                        <n-list-item v-for="plugin in mappedPlugins" :key="plugin.id">
                            <n-thing>
                                <template #header>
                                    <n-text>{{ plugin.name }}</n-text>
                                    <n-text :depth="3" class="plugin_information_divider">By</n-text>
                                    <n-text>{{ plugin.author }}</n-text>
                                    <n-text :depth="3" class="plugin_information_divider">@</n-text>
                                    <n-text> {{ plugin.version }}</n-text>
                                </template>

                                <template #description>{{ plugin.description }}</template>

                                <n-switch v-model:value="plugin.state.value"/>
                            </n-thing>

                            <n-drawer v-model:show="plugin.show_code.value" placement="left" width="50%">
                                <n-drawer-content title="代码">
                                    <n-flex size="small" vertical>
                                        <n-card v-if="!isEmptyish(plugin.style)" class="plugin_code" size="small"
                                                title="样式">
                                            <n-code :code="plugin.style" language="CSS" show-line-numbers word-wrap/>
                                        </n-card>

                                        <n-card v-if="!isEmptyish(plugin.script)" class="plugin_code" size="small"
                                                title="脚本">
                                            <n-code :code="plugin.script.toString()" language="JavaScript" show-line-numbers
                                                    word-wrap/>
                                        </n-card>

                                        <n-card v-if="!isEmptyish(plugin.background_script)" class="plugin_code" size="small"
                                                title="后台脚本">
                                            <n-code :code="plugin.background_script.toString()" language="JavaScript"
                                                    show-line-numbers word-wrap/>
                                        </n-card>
                                    </n-flex>
                                </n-drawer-content>
                            </n-drawer>

                            <template #suffix>
                                <n-button @click.stop="plugin.show_code.value = true">检查代码</n-button>
                            </template>
                        </n-list-item>
                    </n-list>
                </n-flex>
            </n-layout-content>
        </n-layout>
    </n-config-provider>
</template>