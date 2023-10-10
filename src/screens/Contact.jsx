import { useContext, useState } from "react";
import photo from "../assets/contactoelefante.png";
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
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_USER_ID')
            //     .then((response) => {
            //         console.log('Email sent successfully:', response.status, response.text);
            //     }, (error) => {
            //         console.error('Error sending email:', error);
            //     });
        }
    }
    
    return (
        <div className="contact-container">
            <h1>Contacto</h1>

            <div className="box">
                {!isTablet &&
                    <img src={photo} alt="ILLUSTRATION" />
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
                            rows="4" // Puedes ajustar el número de líneas visibles inicialmente
                            cols="50" // Puedes ajustar el ancho del textarea
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    {loader ?
                        <BeatLoader style={{alignSelf:"center"}} color='black' size={20} speedMultiplier={0.7}/>
                        :
                        <div className="button" onClick={()=>handleSubmit()}>Mandar mensaje</div>
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