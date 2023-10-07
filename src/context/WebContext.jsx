import { useMediaQuery } from '@mui/material';
import { createContext, useState } from 'react';

export const UseWebContext = createContext();

export const WebContext = ({ children }) => {
    const isMobile=useMediaQuery("(max-width:390px)")
    const isTablet=useMediaQuery("(max-width:768px)")

    const [language, setLanguage] = useState("es")
    const [openLanguageBox, setOpenLanguageBox] = useState(false)

    return (
        <UseWebContext.Provider value={{
            language,
            setLanguage,
            openLanguageBox,
            setOpenLanguageBox,
            isMobile,
            isTablet
        }}>
            {children}
        </UseWebContext.Provider>
    );
};