declare var getDataSourceForDomain: (location: Location) => Promise<{
    get<T extends readonly string[]>(keys: [...T]): Promise<Record<T[number], unknown>>;
}>;