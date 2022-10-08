import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncFacebookLogin, asyncGoogleLogin, emailPassLogin } from '../actions/actionUser'
import { useForm } from '../hooks/useForm'


const Login = () => {
    const dispatch = useDispatch()

    const handleGoogleLog = () => {
        dispatch(asyncGoogleLogin())
    }

    const handleFacebooklog = () =>{
        dispatch(asyncFacebookLogin())
    }

    const [datos, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = datos;

    const handleLoginEmailPass = () => {
        dispatch(emailPassLogin(email, password))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='page-container'>
            <div className='form-container'>
                <Form onSubmit={handleSubmit}>
                    <div className='imgContainerForm'>
                        <img className='pokeimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png' alt='Pokemon' />
                    </div>

                    <div className='formContainer'>                     
                        <input type="email" placeholder="Email" name='email' value={email} onChange={handleInputChange} autoComplete="off" />                         
                        <input type="password" placeholder="Password" name='password' value={password} onChange={handleInputChange} />
                    </div>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button className='btnRegis btnlog' type="submit" onClick={() => { handleLoginEmailPass() }}>Conectarse</Button>
                            <Button className='btnRegis btnlog'><img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" onClick={() => { handleGoogleLog() }} /></Button>
                            <Button className='btnfb'><img className="fb-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="facebook-button" onClick={() =>{handleFacebooklog()}} /></Button>

                        </Col>
                        <Form.Label className='labelWordsbl'>¿No tienes una cuenta? </Form.Label>
                        <Link to="/registro" className='letrasRegistro'> Registrate</Link>
                    </Form.Group>

                    <div className='imgContainerForm'>
                        <img className='pokeimg' src='https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png' alt='pokemon-login' />
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login