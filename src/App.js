import { useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {

  // componentDidMount 
  useEffect(() => {
    // consulta a la BBDD
    console.log('App se ha montado')
  }, [])

  return (
    <>
      <NavBar />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
};

export default App;
