import React, { useEffect, useState } from 'react'
import { Card, Col} from 'react-bootstrap'
import Swal from 'sweetalert2'


const PokeCards = () => {
  const [cards, setCards] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=25')



const traerPokemon = async () => {
  const res= await fetch(loadMore)
  const data= await res.json() 
  
  setLoadMore(data.next)

  function pokemonObject(result){
    result.forEach(async pokemon =>{
      const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data= await res.json()
      setCards(list =>[...list, data])
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
  
  <div className='cardContainer'>   
    {
       cards.map((poke,index) => (                  
              <Col key={index} onClick={() =>{activarModalPoke(Swal.fire({
                title: `${poke.name}`,
                width: 600,
                imageUrl: `${poke.sprites.other.dream_world.front_default}`,
                padding: '3em',
                color: '#30a7d7',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,0,0.8)
                  url("https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif")
                  left top
                  no-repeat
                `
              }))}}>
                <Card className='card'>
                <Card.Text className='statsContainer' >                     
                     <span className='statOne'>HP: {poke.stats[0].base_stat}</span>
                     <span className='statTwo'>Attack: {poke.stats[1].base_stat}</span>                     
                    </Card.Text>
                  <Card.Img  variant="top" src={poke.sprites.other.dream_world.front_default} />
                  <Card.Body>
                    <Card.Title>{poke.name}</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>          
      ))
    }
  </div>
)
}


export default PokeCards