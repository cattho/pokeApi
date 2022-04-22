import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const PokeCards = () => {
  const [cards, setCards] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=55');



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
                html: `
               <div class='modalContainer'>
                  <div>
                     <div class='pokeNameModal'>${poke.name}</div>
               <img class='pokeImgModal' src=${poke.sprites.other.dream_world.front_default} />
                  </div>

                  <div class='statsContainer'>
                    <p><b>Heal Points:</b> ${poke.stats[0].base_stat}</p>
                    <p><b>Attack Points:</b> ${poke.stats[1].base_stat}</p>
                    <p><b>Defense Points:</b> ${poke.stats[2].base_stat}</p>
                  </div>
               </div>
                `,
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
                <p className='pokeId'> N° {poke.id}</p>
                <h3 className='pokeName'>{poke.name}</h3>
                <div className='typesContainer'>
                  <p className='type'>{poke.types[0].type.name}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default PokeCards