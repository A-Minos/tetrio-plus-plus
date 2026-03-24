import type Plugin from "@/types/plugin";
import script from '@/plugins/chinese_translate/plugin'

export default {
    id: 'chinese_translate',
    name: '中文翻译',
    author: '幻灭',
    version: '1.1.0',
    description: '汉化游戏',

    script
} satisfies Plugin