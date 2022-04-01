import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Simpsons']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Shrek']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category=>{
                        return <GifGrid category={category} key = {category}/>;
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;