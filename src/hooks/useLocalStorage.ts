// Updated useLocalStorage hook with generics
export function useLocalStorage<T>(key: string) {
  // Set item: Storing values to local storage
  const setItem = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error?.message);
    }
  };

  // Get item: Getting stored values from local storage
  const getItem = (): T | undefined => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : undefined;
    } catch (error) {
      console.log(error?.message);
      return undefined;
    }
  };

  return { setItem, getItem };
}
