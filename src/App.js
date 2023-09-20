import './App.css';
import Usuario from './componentes/Usuario';

function App() { //componente funcional, el nombre del componente va en mayuscula
  return (
    <div className="App"> 
      <Usuario imagen={require('./assets/imagenes/perfil.webp')} nombre={'Maria'} cargo={'Gerente Gerenal'} color={'#94FCD9'}/>
    </div>
  );
}

export default App;

//------notas------
/*
En Jsx las class para aplicar css se usa className

*/ 
