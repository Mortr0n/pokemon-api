import React, { useEffect, useState } from 'react';

const PokeFetch = (props) => {
    
    const {pokemon, setPokemon} = props;
    const [x, setX] = useState(1);
    useEffect(() => {
        // there's actually 1118 pokemon but the assignment says 807.  I ended 
        // making the x value the limit.  Everytime you click the button you get 1
        // more.  Gotta click 'em all!!! make sure to include the $
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${x}`)
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .then((res) =>{
            console.log(res)
          // I tried this with just res like they
          //  told us, but it needed the result for it to work
            setPokemon(res.results);
        })
        .catch((err) =>console.log(err))
        // by putting x inside the array the item rerenders each time the button is 
        // clicked
    }, [x]);
    
    return(

        <div>
            {/* learned a cool way to get the items to rerender! */}
        <div style={{textAlign:"center"}}>
            <button  onClick={() => setX(x+50)}>Rerender Component</button>
        </div>
            {console.log(pokemon)}
            {
            pokemon.map((poke, index)=>{
            return(
                <div key={index} style={{textAlign:"center"}}>
                    {poke.name}
                    
                </div>
                
            )
        })}
        
        </div>
    )
}

export default PokeFetch;