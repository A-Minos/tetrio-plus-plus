import type Plugin from "@/types/plugin";
import style from "@/plugins/performancemeter_opacity_10/plugin.css?raw";

export default {
    id: 'performancemeter_opacity_10',
    name: '降低性能指示器透明度',
    author: '渣渣120',
    version: '1.0.0',
    description: '在某些情况下, 当性能指示器打开时, 游戏帧数会比不打开时稳定, 原因不明',

    style
} satisfies Plugin