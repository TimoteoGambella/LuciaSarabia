// import { useMediaQuery } from '@mui/material';
import { createContext } from 'react';

export const UseWebContext = createContext();

export const WebContext = ({ children }) => {
    // const isMobile=useMediaQuery("(max-width:640px)")
    // const isTablet=useMediaQuery("(min-width:641px)")
    // const isDesktop=useMediaQuery("(min-width:1025px)")
    // const isBigDesktop=useMediaQuery("(min-width:1281px)")

    // const bannersDesktop=useMediaQuery("(min-width:801px)")


    return (
        <UseWebContext.Provider value={{}}>
            {children}
        </UseWebContext.Provider>
    );
};