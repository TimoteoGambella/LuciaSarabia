import { useContext, useState } from "react";
import photo from "../assets/contactoelefante.svg";
import { BeatLoader } from 'react-spinners';
import { UseWebContext } from "../context/WebContext";
import emailjs from 'emailjs-com';

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
};

export function Contact () {

    const {isTablet} = useContext(UseWebContext);

    const [data, setData] = useState({
        name:"",
        email:"",
        message:""
    })
    const [errors, setErrors] = useState({
        name:"",
        email:"",
        message:""
    })

    const {final, setFinal} = useState(false);
    const [loader, setLoader] = useState(false);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setErrors(prevErrors => ({
            ...prevErrors,
            [id]: ""
        }))
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        let error = false
        setLoader(true)

        if(data.name===""){
            setErrors(prevErrors => ({
                ...prevErrors,
                name: "El nombre es obligatorio"
            }));
            error=true
        } 
        if(data.email===""){
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "El email es obligatorio"
            }))
            error=true
        }
        if(!validateEmail(data.email)){
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "El email no es válido"
            }))
            error=true
        }
        if(data.message===""){
            setErrors(prevErrors => ({
                ...prevErrors,
                message: "El mensaje es obligatorio"
            }))
            error=true
        }

        if(error){
            setLoader(false)
            return
        }else{        
            emailjs.send('service_5pof7u5', 'template_umwfunz', data, 'IQYl2IeFWUvZUAqRt6P-R')
                .then((response) => {
                    setFinal(true)
                    setLoader(false)
                }, (error) => {
                    setLoader(false)
                });
        }
    }
    
    return (
        <div className="contact-container">
            <h1>Contacto</h1>

            <div className="box">
                {!isTablet &&
                    <img className="illustration" src={photo} alt="ILLUSTRATION" />
                }

                <div className="form">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={data.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={data.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <textarea 
                            id="message" 
                            value={data.message}
                            onChange={handleInputChange}
                            rows="4"
                            cols="50"
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    {loader ?
                        <BeatLoader style={{alignSelf:"center"}} color='black' size={20} speedMultiplier={0.7}/>
                        :
                        <div className="button" onClick={()=>!final ? handleSubmit() : null}>{!final ? "Mandar mensaje" : "¡Enviado!"}</div>
                    }
                </div>

            </div>
            {isTablet &&
                <div className="illustration">
                    <img src={photo} alt="ILLUSTRATION" />
                </div>
            }
        </div>
    )
}