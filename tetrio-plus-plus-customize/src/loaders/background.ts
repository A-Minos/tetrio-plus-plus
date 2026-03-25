// @ts-nocheck

import plugins from "@/plugins";
import { isNonNullish } from "remeda";

promises.push(
    (async () => {
        await Promise.all(
            plugins.map(async (plugin) => {
                if (isNonNullish(plugin.background_script)) {
                    await plugin.background_script();
                }
            }),
        );
    })(),
);