import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GidGrid";


export const GifExpertApp = () => {
    
    //const categories = [ 'On Punch', ' Samurai X', 'Dragon Ball' ];
    const [categories, setCategories] = useState([ 'Samurai X' ]);

    //const handleAdd = () => {
        //setCategories( [ 'HunterXHunter' ] );
        //setCategories( cats => [...cats, 'HunterxHenter' ]);
    //}

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
            
        </>
    )
}