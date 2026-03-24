import plugins from "@/plugins";
import {generatePluginStateStorageKey} from "@/utils/plugin";
import {isEmptyish, isNonNullish, isNullish} from "remeda";

(async () => {
    if (window.location.pathname != '/') return;

    const storage = await getDataSourceForDomain(window.location);
    const storageData = await storage.get([
        'tetrioPlusEnabled', ...plugins.map(plugin => {
            return generatePluginStateStorageKey(plugin.id)
        })
    ])

    if (!storageData.tetrioPlusEnabled) {
        return
    }

    await Promise.all(
        plugins.map(async plugin => {
            const storageKey = generatePluginStateStorageKey(plugin.id)

            if (isNullish(storageData[storageKey]) || !storageData[storageKey]) {
                return
            }

            if (!isEmptyish(plugin.style)) {
                const style = document.createElement('style')
                style.innerHTML = plugin.style
                document.head.appendChild(style)
            }

            if (isNonNullish(plugin.script)) {
                await plugin.script()
            }
        })
    )
})()