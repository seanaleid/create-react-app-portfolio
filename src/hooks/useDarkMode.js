import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    // useEffect(() => {
    //     darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');
    // }, [darkMode])

    const bodyEl = document.querySelector("body");

    useEffect(() => {
        if (darkMode) {
          bodyEl.classList.add('dark-mode');
        } else {
          bodyEl.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
};