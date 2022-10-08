import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ResultadosBusqueda = () => {
    const navigate = useNavigate()
    const [pokeResults, setPokeResults] = useState('');
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${keyword}`;
        axios
            .get(url)
            .then(r => {
                const res = r.data
                setPokeResults(res);
            })
            .catch(error => {
                alert('Este pokemon no existe')
                navigate('/')
            })
    }, [pokeResults]);

    return (
        <>
            <h1 className='pokedex-title'>{keyword.toUpperCase()}</h1>
            <div className='result-container'>
                {
                    (pokeResults) &&
                    <div className='result-poke' key={pokeResults.id}>
                        <div className="maain-results">
                            <p className='pokeId'>Pokemon N° {pokeResults.id}</p>
                            <img src={pokeResults.sprites.other.home.front_default} alt={pokeResults.name} />
                            <ul className='poke-type '>Type:
                                {pokeResults.types.map(typePoke =>
                                    <li>{typePoke.type.name.toUpperCase()}</li>)}
                            </ul>
                        </div>

                        <div className="stats-container">
                            <p className='stats'>Heal Points: {pokeResults.stats[0].base_stat} 💗</p>
                            <p className='stats'>Attack Points: {pokeResults.stats[1].base_stat} 🔥</p>
                            <p className='stats'>Defense Points: {pokeResults.stats[2].base_stat} 🛡️</p>

                            <h4>Abilities of {keyword.toUpperCase()}</h4>
                            {
                                pokeResults.abilities.map(abilityObject =>
                                    <li className='abiliti-list'>{abilityObject.ability.name.toUpperCase()}</li>)
                            }
                            <h4>PNG's for {keyword}</h4>
                            <div className="png-containers">
                                <div>
                                    <img src={pokeResults.sprites.front_default} alt={pokeResults.name} />
                                </div>
                                <div>
                                    <img src={pokeResults.sprites.front_shiny} alt={pokeResults.name} />
                                </div>
                                <div>
                                    <img src={pokeResults.sprites.back_default} alt={pokeResults.name} />
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </>
    )
}

export default ResultadosBusqueda