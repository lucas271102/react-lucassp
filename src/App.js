import {BrowserRouter, Routes, Route}from 'react-router-dom';
import './App.css';
import CarritoPage from './components/CarritoPage/CarritoPage';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Deportivos from './components/pages/Deportivos';
import SuperDeportivos from './components/pages/SuperDeportivos';

function App() {
  return (
    <BrowserRouter>
     <>
      <NavBar/>
      
      
      <Routes>
      <Route path='/'element={<ItemListContainer label="Detalles" />}/>
        <Route path="/cart" element={<CarritoPage/>}/>
        <Route path="/home" element={<ItemListContainer/>}/>
        <Route path="/detalle"element={<ItemDetailContainer/>}/>
        <Route path="/deportivos" element={<Deportivos/>}/>
        <Route path="/superdeportivos"element={<SuperDeportivos/>}/>
      </Routes>
    </>
  
    </BrowserRouter>
   
  );
}

export default App;
