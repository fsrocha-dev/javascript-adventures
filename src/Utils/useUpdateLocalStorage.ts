function useUpdateLocalStorage (key: string, item: object) {
  const storageValue = localStorage.getItem(key);
  const newStorageValue = JSON.stringify(item)
  
  if(storageValue != newStorageValue) {
    localStorage.setItem(key, JSON.stringify(newStorageValue));
  }
}

export default useUpdateLocalStorage;