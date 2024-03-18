import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Carta from "../components/Carta"

 

const Favorites = () => {
  const {photos} = useContext(MyContext)
  const fotosFavoritas = photos.filter((photo) =>photo.liked === true)
  return (
    <div>
      <h1>Fotos Favoritas</h1>
    
      
      <div className="favorito" >
      {fotosFavoritas.map((photo) =>(
        <Carta  key={photo.id} photo={photo}/>
      ))}
    </div>
    </div>
    
  );
};
export default Favorites;
