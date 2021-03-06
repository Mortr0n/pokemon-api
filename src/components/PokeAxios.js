import React,{ useEffect } from "react";
import axios from "axios";

const PokeAxios = (props) => {

    const { pokemon, setPokemon} = props;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then((res) =>{
                console.log(res.data);
                setPokemon(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <div style={{textAlign:"center"}}>
            {console.log(pokemon)}
            {
            pokemon.map((poke, index)=>{
            return(
                <div key={index}>
                    {poke.name}
                </div>
            )
        })}
        </div>
    )

}

export default PokeAxios;