import { useContext } from "react";
import Carta from "./Carta";
import { MyContext } from "../context/MyContext";

const Gallery = () => {
  const {photos, toggleLike} =useContext(MyContext)
  return <div className="gallery grid-columns-5 p-3">
    {photos.map((photo) =>(
      <Carta 
      onClick= {() => toggleLike (photo.id)}
      key={photo.id}
      photo={photo}
      />
    ))}
  </div>
};
export default Gallery;
