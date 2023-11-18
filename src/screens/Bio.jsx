import { useContext } from "react";
import mainPhoto from "../assets/aboutMe-main.svg";
import finalPhoto from "../assets/ilustration-aboutMe.svg";

import {collaboratorLogo} from "../data/collaborators"
import { UseWebContext } from "../context/WebContext";

export function Bio () {
    const {aboutMeScreen} = useContext(UseWebContext)

    return (
        <>
            <link rel="preload" href={mainPhoto} as="image" />
            <link rel="preload" href={finalPhoto} as="image" />
            {Object.values(collaboratorLogo).map((imagesArray,i) => (
                <link key={i} rel="preload" href={imagesArray[i]} as="image" />
            ))}
            {!aboutMeScreen ? 
                <div className="bio-container">
                    <img className="mainPhoto" src={mainPhoto} alt="BIO" />

                    <div className="info">
                        <div className="box1">
                            <h2>Biografía</h2>
                            <p>Nací en el pequeño pueblo de Comala hace 28 años, y sigo haciendo a diario lo que me gustaba hacer desde entonces: dibujar y escribir. Crecí entre dos volcanes y un mar, rodeada de la fantasía de cuatro elementos: el ajedrez, los árboles, las casas y el viaje; esto conforma mi universo narrativo, de esos ingredientes están hechos mis sueños.</p>
                        </div>

                        <div className="box2">
                            <h2>Trayectoria</h2>
                            <ul>
                                <li><span>2019</span>: Portfolio Domêstika, Jóvenes Talentos México 2019</li>
                                <li><span>2021</span>: Canturía, Arrullos y Poemas, editado por Veleta Roja (España).</li>
                                <li><span>2022</span>: Lista larga de la Exposición de Ilustradores 2022, Bologna Children’s Book Fair</li>
                                <li><span>2022</span>: Residencia artística y Coediciones en La Ceiba Gráfica (Veracruz, México)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className="bio-container-changeDesktop">
                    <div className="box1">
                        <img className="mainPhoto" src={mainPhoto} alt="BIO" />
                        <div>
                            <h2>Biografía</h2>
                            <p>Nací en el pequeño pueblo de Comala hace 28 años, y sigo haciendo a diario lo que me gustaba hacer desde entonces: dibujar y escribir. Crecí entre dos volcanes y un mar, rodeada de la fantasía de cuatro elementos: El ajedréz, los árboles, las casas y el viaje; esto conforma mi universo narrativo, de esos ingredientes están hechos mis sueños.</p>
                        </div>
                    </div>

                    <div className="box2">
                        <h2>Trayectoria</h2>
                        <ul>
                            <li><span>2019</span>: Portafolio Domêstika, Jóvenes Talentos México 2019.</li>
                            <li><span>2021</span>: Canturía, Arrullos y Poemas, editado por Veleta Roja (España).</li>
                            <li><span>2022</span>: Lista larga de la Exposición de Ilustradores 2022, Bologna Children’s Book Fair</li>
                            <li><span>2022</span>: Residencia artística y Coediciones en La Ceiba Gráfica (Veracruz, México)</li>
                        </ul>
                    </div>
                </div>
            }

            <div className={`clients-container ${aboutMeScreen&&"changeDesktop"}`}>
                <h2>Clientes</h2>
                
                <div>
                    {Object.values(collaboratorLogo).map((img,i)=>{
                        return(
                            <>
                                {i!==4 && i !== 7 &&
                                    <img src={img} key={i} alt={img}/>
                                }
                            </>
                        )
                    })}
                </div>

                <img className="finalPhoto" src={finalPhoto} alt="ILLUSTRATION" />
            </div>
        </>
    )
}