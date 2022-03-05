import React from 'react';

function Pokemon(props){
    return (
        <>
            <h1>Pokemón: {props.name}</h1>
            <img src={props.path} alt={props.alt} width="300" height="300"></img>
        </>
    );
}

export default Pokemon;
