import React from 'react';
import './style_pokemon.css';

function Pokemon(props){
    return (
        <>
            <h1 className='title'>{props.name}</h1>
            <img src={props.path} alt={props.alt} width="500" className='image'></img>
        </>
    );
} 

export default Pokemon;
