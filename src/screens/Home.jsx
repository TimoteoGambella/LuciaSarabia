import { useContext, useState } from "react";
import { Gallery } from "../components/Gallery";

import arrow from "../assets/arrow-language.svg"
import { UseWebContext } from "../context/WebContext";

import {projectsPhotos} from "../data/projectsPhotos";
import {projectsPhotos2} from "../data/projects2Photos";
import {projectsPhotos3} from "../data/projects3Photos";

import dataIlustrations from "./projects.json";
import dataEditorial from "./projects2.json";
import dataMural from "./projects3.json"
import { useParams } from "react-router-dom";


export function Home () {
    const {isTablet, isMobile} = useContext(UseWebContext);
    let { type } = useParams();

    const [section, setSection] = useState(type!==undefined?type:"il")

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
                            {section==="il"?"Ilustración":section==="ed"?"Editorial":section==="mu"&&"Mural"}
                        </h2>
                        <img src={arrow} alt="ARROW" />
                    </div>
                    {sectionOptions && 
                        <div className="box">
                            <h2 onClick={()=>{setSection(section==="il"?"ed":section==="ed"?"mu":section==="mu"&&"il");setSectionOptions(!sectionOptions)}}>
                                {section==="il"?"Editorial":section==="ed"?"Mural":section==="mu"&&"Ilustración"}
                            </h2>
                            <h2 onClick={()=>{setSection(section==="il"?"mu":section==="ed"?"il":section==="mu"&&"ed");setSectionOptions(!sectionOptions)}}>
                                {section==="il"?"Mural":section==="ed"?"Ilustración":section==="mu"&&"Editorial"}
                            </h2>
                        </div>
                    }
                </div>
            }
            <Gallery 
                data={section==="il"?dataIlustrations:section==="ed"?dataEditorial:dataMural}
                photos={section==="il"?projectsPhotos:section==="ed"?projectsPhotos2:projectsPhotos3}
                section={section}
            /> 
        </div>
    )
}