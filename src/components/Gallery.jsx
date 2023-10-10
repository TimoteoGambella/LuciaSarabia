import { useContext } from "react";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { UseWebContext } from "../context/WebContext";

export function Gallery ({data, photos, section}){
    const {isMobile} = useContext(UseWebContext);

    
    const breakpointColumnsObj = {
        default: 3,
        560: 2
    };

    const navigate = useNavigate()

    return(
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid ${isMobile&&"mobile"}`}
            columnClassName="my-masonry-grid_column"
        >
            {data.map((project, index) => {
                return(
                    <div key={index} onClick={()=>navigate(`/project/${section}/${index}`)} className="image-container">
                        <img src={photos[index][0]} alt={project.title} />
                        <div className="overlay">
                            <h3>{project.title}</h3>
                            <p>Ver más</p>
                        </div>
                    </div>
                )
            })}
        </Masonry>
    )
}