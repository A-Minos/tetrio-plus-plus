export default async () => {
    const response = await fetch(
        "https://cdn.jsdelivr.net/gh/A-Minos/tetrio-chinese@release/rolling/electron-loaders/background.js",
    );

    const raw = await response.text();

    // oxlint-disable-next-line no-eval
    await eval(`(async () => { ${raw} })();`);
};