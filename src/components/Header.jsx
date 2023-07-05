import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import '../App.js';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=af8740a96f450865176080b5942993f3";

const Header = () => {

    const[peliculas, setPeliculas] = useState([]);
  
  
    useEffect(() => {
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data);
            setPeliculas(data.results);
        })
    }, []);

    const[busqueda, setBusqueda] = useState('');

    const buscarPelicula = async(e) => {
        e.preventDefault();
        console.log("Searching");
        try{
           const url = `https://api.themoviedb.org/3/search/movie?api_key=af8740a96f450865176080b5942993f3&query=${busqueda}`;
           const res = await fetch(url);
           const data = await res.json();
           console.log(data);
           setPeliculas(data.results); 
        } 
        catch(e) {
            console.log(e);
        }
      };
    
    const changeHandler = (e) => {
        setBusqueda(e.target.value);
    };  

    return (
        <div>
            <Navbar bg="dark" expands="lg" variant="dark">
				<Container fluid>
                    <Navbar.Brand href="/home"> Movies Wiki </Navbar.Brand>
                    {/*<Navbar.Brand href="https://developer.themoviedb.org/"> About </Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{maxHeight:'100px'}}
                            navbarScroll></Nav>

                            <Form className="d-flex" onSubmit={buscarPelicula}>
                                <FormControl
                                type="search"
                                placeholder="Buscar Película"
                                className="me-2"
                                aria-label="search"
                                name="query"
                                value={busqueda} onChange={changeHandler}></FormControl>
                                <Button variant="secondary" type="submit"> Buscar </Button>
                            </Form>
                        </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;