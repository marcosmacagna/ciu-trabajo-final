import { useEffect, useState } from 'react';
import './App.css';
import Pelicula from './components/Pelicula';
import Header from './components/Header';
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=af8740a96f450865176080b5942993f3";

function App() {
  
  const guardado = (buscadas) => {
    localStorage.setItem('peliculas-buscadas', JSON.stringify(buscadas));
  };

  useEffect(() => {
    const peliculasBuscadas = JSON.parse(
      localStorage.getItem('peliculas-buscadas')
    );

    //setPeliculas(peliculasBuscadas);
  }, []);

  //Muestra las películas más populares en la página inicial.

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setPeliculas(data.results);
      })
  }, []);

  //Muestra las películas que se obtuvieron despues de una busqueda en la barra.

  const [busqueda, setBusqueda] = useState('');

  const buscarPelicula = async (e) => {
    e.preventDefault();
    console.log("Buscando");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=af8740a96f450865176080b5942993f3&query=${busqueda}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPeliculas(data.results);
      guardado(data.results);
    }
    catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setBusqueda(e.target.value);
  };  

  

  return (
    <>
      {/*HEADER*/}
      <div>
        <Navbar bg="dark" expands="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="index.html"> Movies Wiki </Navbar.Brand>
            {/*<Navbar.Brand href="https://developer.themoviedb.org/"> About </Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-3"
                style={{ maxHeight: '100px' }}
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
      {/*HEADER*/}

      <div className="principal">
        {peliculas.length > 0 ?(
          <div className="container">
            <div className="grid">
              {peliculas.map((peliculaRequerida) =>
                <Pelicula key={peliculaRequerida.id} {...peliculaRequerida} />)}
            </div>
          </div>
        ):(
          <h2> No se encontraron resultados con esa busqueda </h2>
        )}
         
      </div>

      <Footer/>
    </>
  );
}

export default App;
