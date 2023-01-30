import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ListaPirata = () => {

    const [lista, setLista]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/obtenerpiratas')
        .then((res)=>{ 
            console.log(res)
            setLista(res.data)           
        }).catch((error)=>{
            console.log(error)
            
        })

    },[])


return (
    <div className='container bg-warning vh-auto  m-0 m-1 p-0  border border-3 border-dark mx-auto'>
    <header className='bg-secondary border border-3 border-dark '>
        <div className='heder'>
        <h1 className='titulo' > Listas de piratas </h1> <button className='boton btn btn-success mt-3 mb-3 me-5 float-end'> Crear Nuevo</button>  
        </div>
    </header>
        
        {

            lista.map((pirata)=>(
                <>
                <div className='bg-light border border-3 border-dark mt-3 mb-3 lista' >
                    <div className='contenedor1 '> <img className='img img-fluid' src={pirata.imagen}/> </div>
                    <div className='contenedor2 mx-auto'> 
                    <h2 className='' > {pirata.nombre}</h2>
                        <div className='botones mt-3 mb-3' >
                            <button className='btn btn-success me-3 shadow border border-3 border-dark '>Ver Pirata</button>
                            <button className='btn btn-danger me-3 border border-3 border-dark' >Eliminar Pirata</button>
                        </div>
                    </div>

                    <Link to = {`/unapirata/${pirata._id}`} > Mas info</Link>
                
                </div>                
                
                </>
            ))

        }
    </div>
)
}

export default ListaPirata
