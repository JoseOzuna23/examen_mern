import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate,Link } from 'react-router-dom'

const UnaPirata = () => {
// editar
const[pirata, setPirata] = useState({})
// obtner lid
const {id} = useParams()
const navigate= useNavigate()

useEffect(()=>{

    axios.get(`http://localhost:8000/api/unapirata/${id}`)
    .then((res)=>{
        console.log(res)
        setPirata(res.data)
    }).catch((error)=>{
        console.log(error)
    })

},[])

// const  borrarSerie = ()=>{
// axios.delete(`http://localhost:8000/api/borrarserie/${id}`)
// .then((res)=>{
//     console.log(res)
//     setSerie(res.data)
// }).catch((error)=>{
//     console.log(error)
// })

// }

return (
<div className='container bg-warning vh-auto  m-0 m-1 p-0  border border-3 border-dark mx-auto'>
<header className='bg-secondary border border-3 border-dark '>    
        
        <h1 className=' mx-auto' > {pirata.nombre} </h1> 
        
</header>

<div className='headerPrincipal mt-5'>
    <div className='ms-5'>
        <img src={pirata.imagen} className='imagenSolo' alt=""/> 
        <h1> {pirata.nombre}</h1>
    </div>

    <div className='ms-5'>
        <h1 className='text-center'> Informacion</h1>
            <h3 className='text-left'> {pirata.posicion}</h3>
            <h3> {pirata.tesoro}</h3>
            <h3> {pirata.captura}</h3>            
    </div>

</div>


</div>
)
}

export default UnaPirata