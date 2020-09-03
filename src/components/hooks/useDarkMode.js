import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [darkEnabled, setDarkEnabled] = useLocalStorage('darkmode', false)
    useEffect(() => {
        const dmToggle = document.querySelector('.App')
        dmToggle.classList.toggle('dark-mode')
    }, [darkEnabled])
    return [darkEnabled, setDarkEnabled]
}

export default useDarkMode