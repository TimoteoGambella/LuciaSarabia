import { useContext, useState } from "react";
import { Gallery } from "../components/Gallery";

import arrow from "../assets/arrow-language.svg"
import { UseWebContext } from "../context/WebContext";

export function Home () {
    const {isTablet, isMobile} = useContext(UseWebContext);

    const [section, setSection] = useState("il")

    const [sectionOptions, setSectionOptions] = useState(false)

    return (
        <div className={`home-container ${isTablet&&"tablet"}`}>
            {!isTablet && 
                <div className="sections">
                    <h2 onClick={()=>setSection("il")}
                        style={{color:section==="il"&&"#1E1E1E"}}
                    >
                        Ilustración
                    </h2>
                    <h2 onClick={()=>setSection("ed")}
                        style={{color:section==="ed"&&"#1E1E1E"}}
                    >
                        Editorial
                    </h2>
                    <h2 onClick={()=>setSection("mu")}
                        style={{color:section==="mu"&&"#1E1E1E"}}
                    >
                        Mural
                    </h2>
                </div>
            }
            {isTablet && 
                <div className="section-tablet">
                    <div className="principal" onClick={()=>setSectionOptions(!sectionOptions)}>
                        <h2>
                            {section==="il"?"ILUSTRACIÓN":section==="ed"?"EDITORIAL":section==="mu"&&"MURAL"}
                        </h2>
                        <img src={arrow} alt="ARROW" />
                    </div>
                    {sectionOptions && 
                        <div className="box">
                            <h2 onClick={()=>{setSection(section==="il"?"ed":section==="ed"?"mu":section==="mu"&&"il");setSectionOptions(!sectionOptions)}}>
                                {section==="il"?"EDITORIAL":section==="ed"?"MURAL":section==="mu"&&"ILUSTRACIÓN"}
                            </h2>
                            <h2 onClick={()=>{setSection(section==="il"?"mu":section==="ed"?"il":section==="mu"&&"ed");setSectionOptions(!sectionOptions)}}>
                                {section==="il"?"MURAL":section==="ed"?"ILUSTRACIÓN":section==="mu"&&"EDITORIAL"}
                            </h2>
                        </div>
                    }
                </div>
            }
            <Gallery /> 
        </div>
    )
}