import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">     
      
      <SayMyName nome="Caio" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome= "Caio"
        idade= "30"
        profissao= "Estudante"
        foto= "https://viaplaceholder.com/150" />
      
    </div>
  );
}

export default App;
