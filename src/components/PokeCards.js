import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const PokeCards = () => {
  const [cards, setCards] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=52')



  const traerPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function pokemonObject(result) {
      result.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setCards(list => [...list, data])
      })
    }
    pokemonObject(data.results)
  }

  const activarModalPoke = (id) => {
    cards.filter((mostrar) => (
      mostrar.id === id
    ))
  }

  useEffect(() => {
    traerPokemon()
  }, [])

  return (

    <div className='PokeCardPage'>
      <div className='cardContainer'>

        {
          cards.map((poke, index) => (
            <div key={index} onClick={() => {
              activarModalPoke(Swal.fire({
                title: `${poke.name}`,
                content: `${poke.types}`,
                width: 600,
                imageUrl: `${poke.sprites.other.dream_world.front_default}`,
                padding: '3em',
                color: '#30a7d7',
                background: '#fff url(/images/trees.png)',
                confirmButtonColor: '#000',
                backdrop: `
                rgba(0,0,0,0.8)
                url("https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif")
                left top
                no-repeat
              `
              }))
            }}>
              <div className='pokeCard'>
                <img alt='pokemon' src={poke.sprites.other.dream_world.front_default} />
                <p> N° {poke.id}</p>
                <h3>{poke.name}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default PokeCards