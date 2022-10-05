import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countris.css'

const Countris = () => {
    const [countris,setCountris]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all"
        )
        .then(res=>res.json())
        .then(data=>setCountris(data))
    },[])
    return (
        <div>
            <h2>All Countris List:{countris.length}</h2>
            <div className='country-container'>
            {
                countris.map(country=><Country
                country={country}
                key={country.cca3}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countris;