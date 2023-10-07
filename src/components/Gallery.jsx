import Masonry from "react-masonry-css";
import foto1 from "../assets/bankIcon.svg"
import foto2 from "../assets/bookingError.svg"
import foto3 from "../assets/boys.svg"
import foto4 from "../assets/cashIcon.svg"
import foto5 from "../assets/closeIcon.svg"
import foto6 from "../assets/congrats1.svg"
import foto7 from "../assets/creditCardIcon.svg"
import foto8 from "../assets/girls.svg"
import foto9 from "../assets/handOk.svg"
import foto10 from "../assets/help.svg"
import foto11 from "../assets/levelLogo.svg"
import foto12 from "../assets/logo.svg"
import foto13 from "../assets/orcIcon.svg"
import foto14 from "../assets/participantsIcon.svg"
import foto15 from "../assets/pasteIcon.svg"
import foto16 from "../assets/phone.svg"

export function Gallery (){
    const images = [
        { src: foto1, alt: 'descripción1' },
        { src: foto2, alt: 'descripción1' },
        { src: foto3, alt: 'descripción1' },
        { src: foto4, alt: 'descripción1' },
        { src: foto5, alt: 'descripción1' },
        { src: foto6, alt: 'descripción1' },
        { src: foto7, alt: 'descripción1' },
        { src: foto8, alt: 'descripción1' },
        { src: foto9, alt: 'descripción1' },
        { src: foto10, alt: 'descripción1' },
        { src: foto11, alt: 'descripción1' },
        { src: foto12, alt: 'descripción1' },
        { src: foto13, alt: 'descripción1' },
        { src: foto14, alt: 'descripción1' },
        { src: foto15, alt: 'descripción1' },
        { src: foto16, alt: 'descripción1' },
    ];
    
    const breakpointColumnsObj = {
        default: 3,
        390: 2
    };

    return(
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} style={{ width: "100%" }} />
            ))}
        </Masonry>
    )
}