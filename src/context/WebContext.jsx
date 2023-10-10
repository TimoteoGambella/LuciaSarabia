import { useMediaQuery } from '@mui/material';
import { createContext, useState } from 'react';

export const UseWebContext = createContext();

export const WebContext = ({ children }) => {
    const isMobile=useMediaQuery("(max-width:391px)")
    const isTablet=useMediaQuery("(max-width:769px)")
    const aboutMeScreen =useMediaQuery("(max-width:1101px)")
    const detail800 =useMediaQuery("(max-width:801px)")

    const [language, setLanguage] = useState("es")
    const [openLanguageBox, setOpenLanguageBox] = useState(false)

    return (
        <UseWebContext.Provider value={{
            language,
            setLanguage,
            openLanguageBox,
            setOpenLanguageBox,
            isMobile,
            isTablet,
            aboutMeScreen,
            detail800
        }}>
            {children}
        </UseWebContext.Provider>
    );
};