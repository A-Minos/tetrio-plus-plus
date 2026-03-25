import type Plugin from "@/types/plugin";
import style from "@/plugins/sensitive_flag_replace/plugin.css?raw";

export default {
    id: "sensitive_flag_replace",
    name: "敏感旗帜替换",
    author: "渣渣120",
    version: "1.0.0",
    description: "使特定旗帜替换为中国台北旗帜",

    style,
} satisfies Plugin;