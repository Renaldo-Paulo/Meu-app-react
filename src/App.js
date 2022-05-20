import logo from './logo.svg';
import './App.css';


//Vamos criar um componente

function MyButton() {
  return (
    <button>Clica-me</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>Sobre</h1>
      <p>Olá.<br/>Como é que estás?</p>
    </>
  );
}

function App() {
  return (
    <div>
    <h1>Seja bem vindo a minha Aplicação</h1>
    
    <MyButton/>
    <MyButton/>
    <MyButton/>
    <MyButton/>

    <AboutPage/>
    </div>
  );
}

export default App;
