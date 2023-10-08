import { useNavigate, useParams } from "react-router-dom";

import dataIlustrations from "./projects.json"
// import dataIlustrations from "./projects.json"
// import dataIlustrations from "./projects.json"

import {collaboratorLogo} from "../data/collaborators"
import {projectsPhotos} from "../data/projectsPhotos"

import backArrow from "../assets/backArrow.svg"

export function Detail () {
    let { type, id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="detail-container">
            <div className="backTo" onClick={()=>navigate(-1)}>
                <img src={backArrow} alt="BACK" />
                <p>Volver a <span>{type==="il"?"Ilustración":type==="ed"?"Editorial":type==="mu"&&"Mural"}</span></p>
            </div>
            <div className="box">
                <div className="photos">
                    {(type==="il"&&projectsPhotos[id]).map((photo, index) => {
                        return(
                            <img key={index} src={photo} alt={photo}
                                style={{
                                    width: (index===1 || index===2 || index===4 || index===5 || index===7 || index===8 || index===10 || index===11 || index===13 || index===14 || index===16 || index===17 || index===19 || index===20) && "47%"
                                }}
                            />
                        )
                    })}
                </div>

                <div className="info">
                    <h1>{dataIlustrations[id].title}</h1>

                    <h2>{dataIlustrations[id].date}</h2>

                    <p>{dataIlustrations[id].description}</p>

                    <h5>Colaboradores</h5>
                    <img src={collaboratorLogo[dataIlustrations[id].collaborators[0]]} alt="COLLABORATOR" />
                </div>
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
                {id<Object.keys(dataIlustrations).length-1 &&
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