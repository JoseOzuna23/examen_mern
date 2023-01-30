
import './App.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CrearPirata from './componentes/CrearPirata';
import ListaPirata from './componentes/ListaPirata';
import UnaPirata from './componentes/UnaPirata';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path='/nuevapirata' element ={<CrearPirata/>}/>
        <Route path='/todaslistas' element ={ <ListaPirata/>}/>
        <Route path='/unapirata/:id' element ={ <UnaPirata/>}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
