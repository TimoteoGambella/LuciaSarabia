import { useNavigate, useParams } from "react-router-dom";

import dataIlustrations from "./projects.json"
import dataEditorial from "./projects2.json";
import dataMural from "./projects3.json"

import {collaboratorLogo} from "../data/collaborators"
import {projectsPhotos} from "../data/projectsPhotos"
import {projectsPhotos2} from "../data/projects2Photos";
import {projectsPhotos3} from "../data/projects3Photos";

import backArrow from "../assets/backArrow.svg"
import { useContext } from "react";
import { UseWebContext } from "../context/WebContext";

import {orderDetailPhotos, orderDetailPhotos2, orderDetailPhotos3} from "../data/orderDetailPhotos";

export function Detail () {
    let { type, id } = useParams();
    const navigate = useNavigate();

    const {isTablet, detail800} = useContext(UseWebContext);

    const data = type==="il"?dataIlustrations:type==="ed"?dataEditorial:dataMural
    const array = type==="il"?orderDetailPhotos:type==="ed"?orderDetailPhotos2:orderDetailPhotos3
    
    return (
        <div className="detail-container">
            <div className="backTo" onClick={()=>navigate(`/${type}`)}>
                <img src={backArrow} alt="BACK" />
                {isTablet ? 
                    <p>{type==="il"?"Ilustración":type==="ed"?"Editorial":type==="mu"&&"Mural"}</p>
                :
                    <p>Volver a <span>{type==="il"?"Ilustración":type==="ed"?"Editorial":type==="mu"&&"Mural"}</span></p>
                }
            </div>
            <div className="box">
                {detail800 && 
                    <div className="infoDetail800">
                        <h1>{data[id].title}</h1>
                        <h2>{data[id].date}</h2>
                    </div>
                }
                {!detail800 ? 
                    <div className="photos">
                        {(type==="il"?projectsPhotos[id]:type==="ed"?projectsPhotos2[id]:projectsPhotos3[id]).map((photo, index) => {
                            const isInArray = array[id].includes(index)
                            return(
                                <img key={index} src={photo} alt={photo}
                                    style={{
                                        width: isInArray && "47%"
                                    }}
                                />
                            )
                        })}
                    </div>
                    :
                    <div className="photos">
                        {(type==="il"?projectsPhotos[id]:type==="ed"?projectsPhotos2[id]:projectsPhotos3[id]).map((photo, index) => {
                            const isInArray = array[id].includes(index)

                            const img1 = array[id].includes(0)
                            const img2 = array[id].includes(1)
                            return(
                                <>
                                    {img1 && img2 && index<=1 &&
                                        <img key={index} src={photo} alt={photo}
                                            style={{
                                                width: isInArray && "47%"
                                            }}
                                        />
                                    }
                                    {(!img1 || !img2) && index===0 &&
                                        <img key={index} src={photo} alt={photo}
                                            style={{
                                                width: isInArray && "47%"
                                            }}
                                        />
                                    }
                                </>
                            )
                        })}
                    </div>
                }

                <div className="info">
                    {!detail800 && 
                        <>
                            <h1>{data[id].title}</h1>

                            <h2>{data[id].date}</h2>
                        </>
                    }

                    {data[id].description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    {!detail800 && collaboratorLogo[data[id].collaborators[0]]!==undefined &&
                        <>
                            <h5>Colaboradores</h5>
                            <img src={collaboratorLogo[data[id].collaborators[0]]} alt="COLLABORATOR" />
                        </>
                    }
                </div>

                {detail800 && 
                    <div className="photos">
                        {(type==="il"?projectsPhotos[id]:type==="ed"?projectsPhotos2[id]:projectsPhotos3[id]).map((photo, index) => {
                            const isInArray = array[id].includes(index)
                            const img1 = array[id].includes(0)
                            const img2 = array[id].includes(1)
                
                            if (img1 && img2 && index <= 1) return null;
                
                            if ((!img1 || !img2) && index === 0) return null;
                
                            return(
                                <img key={index} src={photo} alt={photo}
                                    style={{
                                        width: isInArray && "47%"
                                    }}
                                />
                            )
                        })}
                    </div>
                }    

                {detail800 && collaboratorLogo[data[id].collaborators[0]]!==undefined &&
                    <div className="collaborator-detail800">
                        <h5>Colaboradores</h5>
                        <img src={collaboratorLogo[data[id].collaborators[0]]} alt="COLLABORATOR" />
                    </div>                
                }
            </div>

            <div className="next-prev">
                {id>0 &&
                    <div style={{flexGrow:1}} onClick={()=>{
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                            navigate(`/project/il/${Number(id)-1}`)
                        }}
                    >
                        <img src={backArrow} alt="BACK" />
                        <p>Anterior</p>
                    </div>
                }
                {id<Object.keys(data).length-1 &&
                    <div className="next" style={{flexGrow:1, justifyContent:"flex-end"}} onClick={()=>{
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                            navigate(`/project/il/${Number(id)+1}`)
                        }}
                    >
                        <p>Siguiente</p>
                        <img src={backArrow} alt="NEXT" />
                    </div>
                }
            </div>
        </div>
    )
}