export default async () => {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://cdn.jsdelivr.net/gh/A-Minos/tetrio-chinese@release/rolling/electron-loaders/preload.js')
    document.head.appendChild(script)
}