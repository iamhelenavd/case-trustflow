export function useLocalStorage<LocalStorage>(key: string) {

  const setItem = (value: LocalStorage) => {
    if (!value) return
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = (): LocalStorage | undefined => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as LocalStorage) : undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };


  return { setItem, getItem, removeItem };
}
