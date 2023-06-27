export default class AsyncLocalStorage {
    /**
     * Fetches `key` value.
     */
    static getItem(key: string, callback?: Function): Promise<*>;
    /**
     * Sets `value` for `key`.
     */
    static setItem(key: string, value: string, callback?: Function): Promise<*>;
    /**
     * Removes a `key`
     */
    static removeItem(key: string, callback?: Function): Promise<*>;
    /**
     * Merges existing value with input value, assuming they are stringified JSON.
     */
    static mergeItem(key: string, value: string, callback?: Function): Promise<*>;
    /**
     * Erases *all* AsyncLocalStorage for the domain.
     */
    static clear(callback?: Function): Promise<*>;
    /**
     * Gets *all* keys known to the app, for all callers, libraries, etc.
     */
    static getAllKeys(callback?: Function): Promise<*>;
    /**
     * (stub) Flushes any pending requests using a single batch call to get the data.
     */
    static flushGetRequests(): void;
    /**
     * multiGet resolves to an array of key-value pair arrays that matches the
     * input format of multiSet.
     *
     *   multiGet(['k1', 'k2']) -> [['k1', 'val1'], ['k2', 'val2']]
     */
    static multiGet(keys: Array<string>, callback?: Function): Promise<*>;
    /**
     * Takes an array of key-value array pairs.
     *   multiSet([['k1', 'val1'], ['k2', 'val2']])
     */
    static multiSet(keyValuePairs: Array<Array<string>>, callback?: Function): Promise<*>;
    /**
     * Delete all the keys in the `keys` array.
     */
    static multiRemove(keys: Array<string>, callback?: Function): Promise<*>;
    /**
     * Takes an array of key-value array pairs and merges them with existing
     * values, assuming they are stringified JSON.
     *
     *   multiMerge([['k1', 'val1'], ['k2', 'val2']])
     */
    static multiMerge(keyValuePairs: Array<Array<string>>, callback?: Function): Promise<*>;
}
