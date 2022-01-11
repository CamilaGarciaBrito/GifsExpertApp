import React from "react";
import { useFetchGifs } from "../hooks/useFecthGifs";
import { GifGridItem } from './GifGridItem';
 

export const GifGrid = ({ category }) => {

    const { data:images, loading }= useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid animate__animated animate__bounce"> 
                {
                    images.map( img => (
                        <GifGridItem 
                            img={ img } 
                            key={ img.id }
                            {...img}
                        />
                    ))
                }
            </div>
        </>
        
    )

}
