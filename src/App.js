import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />     
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
