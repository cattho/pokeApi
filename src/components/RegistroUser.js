import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { singUpEmailPass } from '../actions/actionUser'
import { useForm } from '../hooks/useForm'

const RegistroUser = () => {

  const dispatch= useDispatch()

  const[registerData, handleInputChange]=useForm({
    email:'',
    nombre:'',
    pass1:'',
    pass2:''
  })

  const {email,nombre,pass1,pass2}=registerData

  const handleRegistro = (e) =>{
    e.preventDefault();
    dispatch(singUpEmailPass(email,nombre,pass1,pass2))
}

  return (
    <div className='page-container'>              
       <div className='form-container'>        
       <Form onSubmit={handleRegistro}>
            <img className='pokeimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png' alt='Pokemon' />
            <h1>Registrate</h1>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                Nombre
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Nombre" name='nombre' value={nombre} onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Contraseña
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" name='pass1' value={pass1} onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                Repite contraseña
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" name='pass2' value={pass2} onChange={handleInputChange} />
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button className='btnRegis' type="submit">Registrarse</Button>
                <Link className='letrapeq' to="/login">Login</Link>
                </Col>               
            </Form.Group>
            
            <img className='pokeimg' src='https://imagenpng.com/wp-content/uploads/2016/09/Pikachu-png-0.png' alt='pikachu' />
        </Form>
       </div>
    </div>
  )
}

export default RegistroUser