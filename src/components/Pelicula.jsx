import { useState } from 'react';
import {Modal, show, Button} from 'react-bootstrap';

const API_IMG = "https://image.tmdb.org/t/p/w500/"

const Pelicula = ({title, poster_path, vote_average, release_date, overview}) => {
    
    const[mostrar, setMostrar]=useState(false);

    const muestra = () => setMostrar(true);
    const cierra = () => setMostrar(false);
    
    return (  
        <div className="card text-center bg-secendary mb-3">
           <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path}/>
              <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={muestra}> Ver Más </button>
                    <Modal show={mostrar} onHide={cierra}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>    
                        </Modal.Header>
                        <Modal.Body>
                        <img className="card-img-top" style={{width:'14rem'}} src={API_IMG+poster_path}/>
                        <h3>{title}</h3>
                        <h4>IMDB: {vote_average}</h4>
                        <h5>Fecha de Lanzamiento: {release_date}</h5>
                        <br/>
                        <h6><strong> Trama: </strong></h6>
                        <p><strong> {overview} </strong></p>   
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={cierra}> Cerrar </Button>
                        </Modal.Footer>
                    </Modal>
              </div>
           </div>
        </div>
    );
}
 
export default Pelicula;