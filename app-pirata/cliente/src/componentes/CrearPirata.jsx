import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CrearPirata = () => {

    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')
    const [tesoro, setTesoro] = useState('')
    const [captura, setCaptura] = useState('')
    const [posicion, setPosicion] = useState('')
    
    const navegar = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/crearpirata', {
            nombre,
            imagen,
            tesoro,
            captura,
            posicion
        }).then((res)=>{
            console.log(res);
            navegar('/todaslistas')
            
        }).catch((error)=>{
            console.log(error)
        })
    }


return (
    <div className='container bg-warning vh-100  m-0 m-1 p-0  border border-3 border-dark' >
        <header className='bg-secondary border border-3 border-dark '>
            <button className='btn btn-success mt-3 mb-3 '> Crear Nuevo</button>
        </header>       

        <div className='col col-6 bg-primary mt-3'>
            <form onSubmit={submitHandler}>
                <label htmlFor=""className='form-label'> Nombre de Pirata</label>   
                <input type="text" className='form-controlw-50' onChange={(e)=>setNombre(e.target.value)}/>
                <label htmlFor=""className='form-label'> Url de imagen </label>   
                <input type="text"  className='form-control'onChange={(e)=>setImagen(e.target.value)}/>
                <label htmlFor=""className='form-label'>tesoro</label>   
                <input type="number"  className='form-control'onChange={(e)=>setTesoro(e.target.value)}/>
                <label htmlFor=""className='form-label'>captura</label>   
                <input type="text" className='form-control' onChange={(e)=>setCaptura(e.target.value)}/>
                <label htmlFor=""className='form-label'>posicion</label>   
                <input type="text" className='form-control'onChange={(e)=>setPosicion(e.target.value)} />   
                <button className='btn btn-success mt-3'> Crear Pirata</button>                           
            
            </form>
        </div>       
    
    </div>
)
}

export default CrearPirata
