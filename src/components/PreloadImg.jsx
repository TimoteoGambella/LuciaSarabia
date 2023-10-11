import {projectsPhotos} from "../data/projectsPhotos";
import {projectsPhotos2} from "../data/projects2Photos";
import {projectsPhotos3} from "../data/projects3Photos";

export const PreloadImages = () => {
    return (
      <>
        {Object.values(projectsPhotos).map((imagesArray,i) => (
          <link key={i} rel="preload" href={imagesArray[0]} as="image" />
        ))}
        {Object.values(projectsPhotos2).map((imagesArray,i) => (
          <link key={i} rel="preload" href={imagesArray[0]} as="image" />
        ))}
        {Object.values(projectsPhotos3).map((imagesArray,i) => (
          <link key={i} rel="preload" href={imagesArray[0]} as="image" />
        ))}
      </>
    );
};