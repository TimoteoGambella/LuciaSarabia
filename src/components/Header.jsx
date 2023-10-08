import { useContext, useEffect, useState } from "react";
import { UseWebContext } from "../context/WebContext";
import { useNavigate } from "react-router-dom";

import logo from "../assets/mainLogo.svg";
import logoTablet from "../assets/logoTablet.svg";

import instagram from "../assets/mdi_instagram.svg";
import linkedin from "../assets/mdi_linkedin.svg";
import arrow from "../assets/arrow-language.svg"
import menuLogo from "../assets/menuLogo.svg"

import en from "../assets/english.svg";
import es from "../assets/spanish.svg";
import fr from "../assets/french.svg";

export function Header (){
    const {language, setLanguage, openLanguageBox, setOpenLanguageBox, isTablet, isMobile} = useContext(UseWebContext);

    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if(menu || openLanguageBox){
            setOpenLanguageBox(false)
            setMenu(false)
        }
    }, [isTablet,isMobile])

    useEffect(() => {
        if(!menu){
            setOpenLanguageBox(false)
        }
    }, [menu])

    const LanguageBox = () => {
        return(
            <div className="language-box" style={{color:"#1E1E1E"}}>
                <div className="principal">
                    <p>{language.toUpperCase()} </p>
                    <img style={{width:"24px"}} src={language==="es"?es:language==="en"?en:language==="fr"&&fr} alt="LANG" />
                </div>
                <div className="secondary" 
                    onClick={()=>{
                        setLanguage(language==="es"?"en":language==="en"?"es":language==="fr"&&"es")
                        setOpenLanguageBox(!openLanguageBox)
                    }}
                >
                    <p>{language==="es"?"EN":language==="en"?"ES":language==="fr"&&"ES"}</p>
                    <img style={{width:"24px"}} src={language==="es"?en:language==="en"?es:language==="fr"&&es} alt="LANG" />
                </div>
                <div className="secondary" 
                    onClick={()=>{
                        setLanguage(language==="es"?"fr":language==="en"?"fr":language==="fr"&&"en")
                        setOpenLanguageBox(!openLanguageBox)
                    }}
                >
                    <p>{language==="es"?"FR":language==="en"?"FR":language==="fr"&&"EN"}</p>
                    <img style={{width:"24px"}} src={language==="es"?fr:language==="en"?fr:language==="fr"&&en} alt="LANG" />
                </div>
            </div>
        )
    }

    return(
        <>
            <div className="header-container">
                {!isMobile && !isTablet ? 
                    <>
                        <div className="networks" style={{width:"642px"}}>
                            {/* <img src={linkedin} alt="LINKEDIN" /> */}
                            <img onClick={()=>window.open("https://www.instagram.com/luciasarabiaaa/")} src={instagram} alt="INSTAGRAM" />
                        </div>

                        <img className="logo" onClick={()=>navigate("/")} src={logo} alt="LOGO" />

                        <nav style={{width:"642px"}}>
                            <p  style={{
                                    color:window.location.pathname==="/"&&"#1E1E1E"
                                }} onClick={()=>navigate("/")}>Trabajo</p>
                            <p  style={{
                                    color:window.location.pathname==="/bio"&&"#1E1E1E"
                                }} onClick={()=>navigate("/bio")}>Bio</p>
                            <p  style={{
                                    color:window.location.pathname==="/contact"&&"#1E1E1E"
                                }} onClick={()=>navigate("/contact")}>Contacto</p>
                            <div onClick={()=>setOpenLanguageBox(!openLanguageBox)} style={{color:"#1E1E1E"}}>
                                <p>{language.toUpperCase()} </p>
                                
                                <img style={{width:"24px"}} src={language==="es"?es:language==="en"?en:language==="fr"&&fr} alt="LANG" />

                                <img src={arrow} alt="ARROW"/>
                            </div>
                        </nav>
                    </>
                    : !isMobile && isTablet ? 
                        <>
                            <img style={{padding:"28px 0px"}} onClick={()=>navigate("/")} src={logoTablet} alt="LOGO" />

                            <img onClick={()=>setMenu(!menu)} src={menuLogo} alt="MENU" />
                            {menu && 
                                <nav className="menuBox">
                                    <p  style={{
                                            color:window.location.pathname==="/"&&"#1E1E1E"
                                        }} onClick={()=>navigate("/")}>Trabajo</p>
                                    <p  style={{
                                            color:window.location.pathname==="/bio"&&"#1E1E1E"
                                        }} onClick={()=>navigate("/bio")}>Bio</p>
                                    <p  style={{
                                            color:window.location.pathname==="/contact"&&"#1E1E1E"
                                        }} onClick={()=>navigate("/contact")}>Contacto
                                    </p>
                                    <div onClick={()=>setOpenLanguageBox(!openLanguageBox)}>
                                        <p>{language.toUpperCase()} </p>

                                        <img style={{width:"24px"}} src={language==="es"?es:language==="en"?en:language==="fr"&&fr} alt="LANG" />

                                        <img src={arrow} alt="ARROW"/>
                                    </div>
                                    {openLanguageBox &&
                                        <div className="language-box-tablet">

                                            <div className="secondary" 
                                                onClick={()=>{
                                                    setLanguage(language==="es"?"en":language==="en"?"es":language==="fr"&&"es")
                                                    setOpenLanguageBox(!openLanguageBox)
                                                }}
                                            >
                                                <p>{language==="es"?"EN":language==="en"?"ES":language==="fr"&&"ES"}</p>
                                                <img style={{width:"24px"}} src={language==="es"?en:language==="en"?es:language==="fr"&&es} alt="LANG" />
                                            </div>
                                            <div className="secondary" 
                                                onClick={()=>{
                                                    setLanguage(language==="es"?"fr":language==="en"?"fr":language==="fr"&&"en")
                                                    setOpenLanguageBox(!openLanguageBox)
                                                }}
                                            >
                                                <p>{language==="es"?"FR":language==="en"?"FR":language==="fr"&&"EN"}</p>
                                                <img style={{width:"24px"}} src={language==="es"?fr:language==="en"?fr:language==="fr"&&en} alt="LANG" />
                                            </div>
                                        </div>
                                    }
                                </nav>
                            }
                        </>
                        : isMobile &&
                        <>

                        </>
                }
            </div>

            {openLanguageBox && !isTablet &&
                <LanguageBox />
            }
        </>
    )
}