import {BrowserRouter, Routes, Route}from 'react-router-dom';
import './App.css';
import CarritoPage from './components/CarritoPage/CarritoPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
     <>
      <NavBar/>
      
      <ItemListContainer label="Detalles"/>
      <Routes>
        <Route path="/cart" element={<CarritoPage/>}/>
      </Routes>
    </>
  
    </BrowserRouter>
   
  );
}

export default App;
