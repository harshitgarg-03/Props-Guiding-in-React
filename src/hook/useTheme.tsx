import { useContext } from 'react'
import { ThemeContext } from '../ContextApi/ThemeContext';

function useTheme() {
    const context  = useContext(ThemeContext);
    if(!context) {
        throw new Error("Error in Contexting..")
    }
  return context;
}

export default useTheme;