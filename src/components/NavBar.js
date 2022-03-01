import React from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/actionUser'

const NavBar = () => {
  const dispatch= useDispatch()

  const handleLogOut= () =>{
    dispatch(logout())
  }
  return (
    <div>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">
                <img
                alt="Pokemon"
                src="https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png"
                width="auto"
                height="100%"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Form className="d-flex">
                <Button className='pokedexIcon' variant="outline-success" as={Link} to='/pokedex'><img width="auto" height="30px" src='https://flyclipart.com/thumb2/ball-icon-168685.png' alt="pokeball-icon"  /></Button>
                <Button variant="outline-success" onClick={() =>{handleLogOut()}}>LogOut</Button>
            </Form>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar