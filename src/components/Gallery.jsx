import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";

export function Gallery ({data, photos, section}){
    
    const breakpointColumnsObj = {
        default: 3,
        390: 2
    };

    const navigate = useNavigate()

    return(
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {data.map((project, index) => {
                return(
                    <div key={index} onClick={()=>navigate(`/project/${section}/${index}`)}>
                        <img src={photos[index][0]} alt={project.title} style={{ width: "100%" }} />
                    </div>
                )
            })}
        </Masonry>
    )
}