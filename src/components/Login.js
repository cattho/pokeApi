import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncGoogleLogin, emailPassLogin } from '../actions/actionUser'
import { useForm } from '../hooks/useForm'


const Login = () => {
    const dispatch= useDispatch()

    const handleGoogleLog= () =>{
        dispatch(asyncGoogleLogin())
    }

    const[datos,handleInputChange]=useForm({
        email:'',
        password:''
    });
    const{email,password}=datos;

    const handleLoginEmailPass= () =>{
        dispatch(emailPassLogin(email,password))
    }

    const handleSubmit= (e) =>{
        e.preventDefault()
    }

  return (
    <div className='page-container'>              
       <div className='form-container'>        
       <Form onSubmit={handleSubmit}>
            <img className='pokeimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png' alt='Pokemon' />
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={handleInputChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handleInputChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button className='btnRegis btnlog' type="submit"onClick={() =>{handleLoginEmailPass()}}>Sign in</Button>
                <Button className='btnRegis btnlog'><img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" onClick={() =>{handleGoogleLog()}} /></Button>
                </Col>
                <Form.Label className='labelWords'>¿No tienes una cuenta? </Form.Label>
                <Link to="/registro"> Registrate</Link>
            </Form.Group>
            
            <img src='https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png' alt='pokemon-login' />
        </Form>
       </div>
    </div>
  )
}

export default Login