import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync } from '../actions/actionPokemon'

const ListaPokeUser = () => {
    const dispatch = useDispatch()
    const { pokemon } = useSelector(store => store.pokemon)
    console.log(pokemon, 'ojito al poke');
    return (
        <div>
            <Table bg='light' className='table' striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre del Pokémon</th>
                        <th>Imagen del Pokémon</th>
                        <th>Descripcion del Pokémon</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (pokemon) ?
                            (
                                pokemon.map((poke, index) => (
                                    <tr key={index}>
                                        <td>{poke.nombre}</td>
                                        <td><img src={poke.imagen} alt="" width='50px' /></td>
                                        <td>{poke.descripcion}</td>

                                        <td>
                                            <button onClick={() => { dispatch(deleteAsync(poke.nombre)) }}>Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            ) :
                            <tr>
                                <td colSpan={3}>Datos no disponibles</td>
                            </tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ListaPokeUser