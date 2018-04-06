/** omap **/

export interface OMap<T> {
    [key: string]: T
}

export function omap<T>(items: T[], getKey: (item: T) => string): OMap<T> {
    const map: OMap<T> = {};
    items.forEach(item => map[getKey(item)] = item);
    return map;
}


/** map **/

export function map<K, T>(items: T[], getKey: (item: T) => K): Map<K, T> {
    const map: Map<K, T> = new Map();
    items.forEach(item => map.set(getKey(item), item));
    return map;
}
