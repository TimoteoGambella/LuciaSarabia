import { useState } from "react";
import photo from "../assets/ilustration-contact.svg";

export function Contact () {

    const [data, setData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };
    
    return (
        <div className="contact-container">
            <h1>Contacto</h1>

            <div className="box">
                <img src={photo} alt="ILLUSTRATION" />

                <div className="form">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={data.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={data.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <textarea 
                            id="message" 
                            value={data.message}
                            onChange={handleInputChange}
                            rows="4" // Puedes ajustar el número de líneas visibles inicialmente
                            cols="50" // Puedes ajustar el ancho del textarea
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}