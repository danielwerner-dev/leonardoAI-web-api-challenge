/**
 * Used for type-safe handling of localStorage that also
 * avoids the need to externally keep track of the storage key.
 * The key is automatically prefixed with the application's namespace,
 * to avoid any potential naming conflicts.
 */
export class StorageManager<T> {
  private readonly key: string;
  private static readonly NAMESPACE = "leonardoAiChallenge";

  /**
   * Creates a new StorageManager for the given key, with the given default value.
   * The key is automatically prefixed with the application's namespace,
   * to avoid any potential naming conflicts.
   * @param key The key to use for storing the value in localStorage.
   * @param defaultValue The default value to return if the key is not set in localStorage.
   */
  constructor(key: string, private readonly defaultValue: T) {
    this.key = `${StorageManager.NAMESPACE}:${key}`;
  }

  /**
   * Retrieves the value from localStorage for the given key.
   * If the key is not set in localStorage, the default value is returned.
   * @returns The value from localStorage, or the default value if the key is not set.
   */
  get(): T {
    const data = window.localStorage.getItem(this.key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return this.defaultValue;
  }

  set(value: T) {
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }
}
