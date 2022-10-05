import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,area,flags}=props.country
    console.log(props.country.ccn3)
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <p>Area:{area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;