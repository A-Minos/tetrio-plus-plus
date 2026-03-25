interface Plugin {
    id: string;
    name: string;
    author: string;
    version: string;
    description: string;

    style?: string;
    script?: () => unknown;
    background_script?: () => unknown;
}

export default Plugin;