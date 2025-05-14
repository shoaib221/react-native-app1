

import { createContext, useState } from "react"; 


export const ThemeContext = createContext()  


export const ThemeProvider = ( {children} ) => { 
    const [ themeColor, setTheme ] = useState( "light" ) 

    const toggleTheme = () => { 
        if( themeColor === "light" ) setTheme( "dark" ); 
        else setTheme( "light" ); 
    } 

    return ( 
        <ThemeContext.Provider value={{ themeColor, toggleTheme }}> 
            {children} 
        </ThemeContext.Provider> 
    )   

}   


