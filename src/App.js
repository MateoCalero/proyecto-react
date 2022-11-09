import { useEffect } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Videos from './containers/Productos'

const App = () => {

  // componentDidMount 
  useEffect(() => {
    // consulta a la BBDD
    console.log('App se ha montado')
  }, [])

  return (
    <>
      <NavBar />
      <Videos />
    </>
  );
};

export default App;
