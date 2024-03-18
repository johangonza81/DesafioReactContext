import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import IconHeart from "./IconHeart"




const Carta =({photo}) =>{
    const {toggleLike} = useContext(MyContext)
    return(
        <div className="Card" key={photo.id} onClick={() => toggleLike(photo.id) }>      
          

            
            <div >
            {photo.liked ? <IconHeart filled/>: <IconHeart/>}
            <img className="imagen" src={photo.src.medium} alt={photo.title}/>
            </div>

            <div>
                <p>{photo.alt}</p>
                <h5>Autor:{photo.photographer}</h5>
            </div>   
        </div>
        
 
       

       




       
    )
}
export default Carta;