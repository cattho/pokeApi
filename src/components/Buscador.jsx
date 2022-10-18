import React from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Buscador = () => {

    const navigate = useNavigate();

    const handleinputChange = e =>{
        e.preventDefault()
        const keyword = e.target.keyword.value.trim().toLowerCase();
        if (keyword.length === 0) {
            Swal.fire('Tienes que escribir una palabra clave')
            return;
        } else if (keyword.length < 4) {
            Swal.fire('Tienes que escribir mas de 4 caracteres')
            e.target.keyword.value = '';
            return;
        } else {
            navigate(`/pokedex?keyword=${keyword}`);
            e.target.keyword.value = '';
        };
    }

    return (
        <>
            <Form className="d-flex form-searcher" onSubmit={handleinputChange}>
                <img width="auto" height="30px" src='https://flyclipart.com/thumb2/ball-icon-168685.png' alt="pokeball-icon" />
                <input 
                type="text"
                name='keyword'
                placeholder='Enter the name of your pokemon'
                />
                <button type='submit'>Search</button>
            </Form>
        </>
    )
}

export default Buscador