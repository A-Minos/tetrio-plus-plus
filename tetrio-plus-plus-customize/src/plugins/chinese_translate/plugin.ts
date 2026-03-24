export default async () => {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://gitee.com/huanmes/iotranslate/releases/download/iotranv1.0/iotranslate.user.js')
    document.head.appendChild(script)
}