import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({children}) =>{
    const [photos, setPhotos] = useState([])

    const liked = photos.filter((photo) => photo.liked);

    useEffect(() =>{
        fetch("./photos.json")
        .then((res) => res.json())
        .then (({photos}) =>{
        setPhotos(photos)
        })
    },[])

    const toggleLike = (id) => {
        const newPhotos = photos.map((photo) => {
            if (photo.id === id) {
                return{ ... photo,  liked: !photo.liked}
            }
                return photo        
        })
        setPhotos(newPhotos)
    }


    return (
        <>
        <MyContext.Provider value={{photos, liked, toggleLike 
        }}>
            {children}
        </MyContext.Provider>
        </>
    )
}
export default MyContextProvider;


