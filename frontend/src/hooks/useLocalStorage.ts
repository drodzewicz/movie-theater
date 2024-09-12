export function useLocalStorage<T = unknown>(key: string, defaultValue: T = undefined) {
    const val = JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    const setValue = (newValue: T) => localStorage.setItem(key, JSON.stringify(newValue));
    const clearValue = () => localStorage.removeItem(key);

    return [val, setValue, clearValue];
}
