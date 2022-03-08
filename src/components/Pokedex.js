import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {searchPokemon} from '../helpers/urlSearchPoke'


const Pokedex = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState()

   const onChange= (e) =>{
     console.log(e.target.value)
     setSearch(e.target.value)
   }

   const buscando = async(e) =>{
    const data = await searchPokemon(search)
    setPokemon(data);
   }
  
  return (
    <div>
      <div className='imgPokedexContainer'>
      <img className='pokedeximg' src='https://res.cloudinary.com/dfp8qduho/image/upload/v1646758354/pokemon/agukyjj8hq0hspcyryln.png' alt='poke-buscar' />
      </div>
      <Form className="d-flex">          
              <FormControl
                type="search"
                placeholder="Busca pokemones"
                className="me-2"
                aria-label="Search"
                onChange={onChange}                          
              />
              <Button onClick={buscando} className='btnpokedex'>Buscar</Button>
            </Form>
            <div className='containerPokedex'>
              {
                pokemon &&
                <div className='cardPokedex'>
                  <h1>Nombre:{pokemon.name}</h1>
                  <h3>Peso:{pokemon.weight}</h3>
                  <img src={pokemon.sprites.other.dream_world.front_default} />
                </div>
              }  
            </div>
            <Button className='btnpokedex'><Link className='labelWords' to='/addPoke'>Registra tu propio Pokémon!</Link></Button>       
    </div>
  )
}

export default Pokedex