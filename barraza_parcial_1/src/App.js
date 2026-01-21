import logo from './logo.svg';
import imgJesus from './img_jesus.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgJesus} width="200" height="150" className="App-logo" alt="imagen" />
        <p>
          Hola soy Jesús Daniel Barraza Torres, Este es mi hola mundo de react
        </p>
        <a
          className="App-link"
          href="http://www.utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresa a la UTD
        </a>
      </header>
    </div>
  );
}

export default App;
//<img src={logo} width="50" height="50" className="App-logo" alt="logo" />