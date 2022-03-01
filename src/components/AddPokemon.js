import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { listaPokemon, registroPokeAsync } from '../actions/actionPokemon'
import { fileUpload } from '../helpers/fileUpload'
import { useForm } from '../hooks/useForm'
import ListaPokeUser from './ListaPokeUser'


const AddPokemon = () => {

    const dispatch= useDispatch()
    const [datos, handleInputChange]=useForm({
        imagen:'',
        nombre:'',
        descripcion:''})

    let {imagen,nombre,descripcion}=datos

    const handleFileChanged= (e) =>{
        const file=e.target.files[0]
        fileUpload(file)
        .then(res =>{
            imagen=res;
            console.log('ta bien');
        })
        .catch(error =>{
            console.log(error, 'malazo');
        })
    }

    const handleSubmit= (e) =>{
        e.preventDefault()       
        dispatch(registroPokeAsync(imagen,nombre,descripcion))
    }

    useEffect(() =>{
        dispatch(listaPokemon())
    })
    
  return (
    <div >
        <form onSubmit={handleSubmit} className='formregisPeli'>
                <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1646100480/pokemon/nxk55tml7qryhqtkxcg6.png' alt='pokename' />
                <div className="form-group">                   
                    <div className="form-group col-md-4">
                        <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1646100775/pokemon/i2w5kky5qmcgkqj5eoo0.png' alt='pokename'/>  
                        <input placeholder='Nombre de tu Pokémon' className="inputPoke" type="text" name="nombre" id="nombre" value={nombre} onChange={handleInputChange} required />
                    </div>
                   
                    <div className="form-group col-md-4">
                        <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1646100897/pokemon/i8uuix8axqagdx9aa2qh.png' alt='pokename'/>
                        <textarea placeholder='Describe tu Pokémon' className="inputPoke" type="text" name="descripcion" id="descripcion" value={descripcion} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group col-md-4">
                        <img src='https://res.cloudinary.com/dfp8qduho/image/upload/v1646100968/pokemon/c3xx6wjg1pg1rn9erkgs.png' alt='pokename'/>
                        <input type='file' name='imagen' id='imagen' value={imagen} onChange={handleFileChanged}/>
                        <br />
                        <button type='submit' className="btn btn-success" onClick={() =>{<Navigate to={'/addPoke'} />}}>Cargar Pokémon</button>
                    </div>
                </div>
            </form>
            <ListaPokeUser />            
    </div>
  )
}

export default AddPokemon