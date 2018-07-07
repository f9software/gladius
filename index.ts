/** omap **/

export interface OMap<T> {
    [key: string]: T
}


export function omap<T>(items: T[], getKey: (item: T) => string): OMap<T> {
    const map: OMap<T> = {};
    items.forEach(item => map[getKey(item)] = item);
    return map;
}


export function group<K, T>(items: T[], getKey: (item: T) => string): OMap<T[]> {
    const map: OMap<T[]> = {};

    items.forEach(item => {
        const key = getKey(item);

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(item);
    });

    return map;
}


/** map **/

export function map<K, T>(items: T[], getKey: (item: T) => K): Map<K, T> {
    const map: Map<K, T> = new Map();
    items.forEach(item => map.set(getKey(item), item));
    return map;
}


/**
 * Pass an array of items and a function that extracts a key, and will return a object map where object keys are being 
 * extracted using the getKey, and the values are indexes of the element in the array.
 * @param items List of items.
 * @param getKey Function to extract the key.
 */
export function mapIndex<T>(items: T[], getKey: (item: T) => string): OMap<number> {
    const map: OMap<number> = {};
    items.forEach((item: T, index: number) => map[getKey(item)] = index);
    return map;
}


