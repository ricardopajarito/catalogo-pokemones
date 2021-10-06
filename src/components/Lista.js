import React, {useState, useEffect}  from "react";
import Tarjeta from "./Tarjeta"

const Lista = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        obtenerDatos()
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=1')
        const pokemons = await data.json()
        // pokemons.results.map

        console.log(pokemons)
        setData(pokemons)
    }

    return(
        <div>
            <Tarjeta></Tarjeta>
        </div>
    );
}

export default Lista;