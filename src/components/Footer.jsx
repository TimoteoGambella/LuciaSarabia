import { useContext } from "react";
import logo from "../assets/footerLogo.svg";
import logoTablet from "../assets/logoTablet.svg";

import instagram from "../assets/mdi_instagram.svg";
import linkedin from "../assets/mdi_linkedin.svg";
import { UseWebContext } from "../context/WebContext";

export function Footer () {
    const {isTablet, isMobile} = useContext(UseWebContext);
    
    return(
        <div style={{background:window.location.pathname.startsWith("/proj")&&"#F9F8F4"}} className={`footer-container ${isTablet&&"tablet"}`}>
            <img onClick={()=>{
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }} src={isTablet ? logoTablet : logo} alt="LOGO" />

            {!isTablet &&
                <p>Made with <span>♥</span> by <span>Erick Magallán</span></p>
            }
            {isTablet &&
                <div className="erick">
                    <p>Made with <span>♥</span></p>
                    <p>
                        by <span>Erick Magallán</span>
                    </p>
                </div>
            }

            <div className="networks">
                {/* <img style={{width:isTablet&&"16px"}} src={linkedin} alt="LINKEDIN" /> */}
                <img onClick={()=>window.open("https://www.instagram.com/luciasarabiaaa/")} style={{width:isTablet&&"16px"}} src={instagram} alt="INSTAGRAM" />
            </div>
        </div>
    )
}