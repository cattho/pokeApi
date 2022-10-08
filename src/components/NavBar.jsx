import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Buscador from './Buscador'


const NavBar = () => {
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
            <Buscador />
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar