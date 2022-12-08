import {BrowserRouter, Routes, Route}from 'react-router-dom';
import './App.css';
import CarritoPage from './components/CarritoPage/CarritoPage';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
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
      <Route path='/'element={<ItemListContainer label="Detalles"/>}/>
        <Route path="/cart" element={<CarritoPage/>}/>
        <Route path="/home" element={<ItemListContainer/>}/>
        <Route path="/detalle"element={<ItemDetail/>}/>
        <Route path="/deportivos" element={<Deportivos/>}/>
        <Route Path="/superdeportivos"element={<SuperDeportivos/>}/>
      </Routes>
    </>
  
    </BrowserRouter>
   
  );
}

export default App;
