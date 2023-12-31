import { useContext } from "react";
import logo from "../assets/logohorizontal.svg";
import banner from "../assets/bannerfooter_actualizado.jpeg";
import instagram from "../assets/mdi_instagram.svg";
import { UseWebContext } from "../context/WebContext";

export function Footer () {
    const {isTablet, isMobile} = useContext(UseWebContext);
    
    return(
        <>
        <div style={{background:window.location.pathname.startsWith("/proj")&&"#F9F8F4"}} className={`footer-container ${isTablet&&"tablet"} ${isMobile&&"mobile"}`}>

            {!isTablet &&
                <p>Made with <span>♥</span> by <span onClick={()=>window.open("https://www.behance.net/erickmagallan")}>Erick Magallán</span></p>
            }
            {isTablet &&
                <div className="erick">
                    <p>Made with <span>♥</span></p>
                    <p>
                        by <span onClick={()=>window.open("https://www.behance.net/erickmagallan")}>Erick Magallán</span>
                    </p>
                </div>
            }

            <img onClick={()=>{
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }} className="logo" src={logo} alt="LOGO" />

            <div className="networks">
                <img onClick={()=>window.open("https://www.instagram.com/luciasarabiaaa/")} style={{width:isTablet&&"16px"}} src={instagram} alt="INSTAGRAM" />
            </div>
        </div>
        <img src={banner} alt="BANNER" style={{width:"100%", pointerEvents:"none"}}/>
        </>
    )
}