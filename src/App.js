import { useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {

  // componentDidMount 
  useEffect(() => {
    // consulta a la BBDD
    console.log('App se ha montado')
  }, [])

  return (
    <>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
