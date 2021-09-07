import React, {useState} from 'react';
import axios from'axios';
import './App.css';

function App() {
const [pokemon, setPokemon] = useState([]); {

const handleAPIcall = (event) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json(event))
        .then(response => setPokemon(response.results))
};

return (
    <div style={{textAlign: "center", marginTop: 10}}>
        <button onClick= {handleAPIcall}>Fetch Pokemon</button>
        {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
            return (<div key={index}>{pokemon.name}</div>)
        })}
    </div>
);}

}
export default App;
