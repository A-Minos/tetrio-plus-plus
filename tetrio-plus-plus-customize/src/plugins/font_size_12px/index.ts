import type Plugin from "@/types/plugin";
import style from '@/plugins/font_size_12px/plugin.css?raw'

export default {
    id: 'font_size_12px',
    name: '缩小字号',
    author: '渣渣120',
    version: '1.0.0',
    description: '将字号变小, 游戏页面也会变小',

    style
} satisfies Plugin