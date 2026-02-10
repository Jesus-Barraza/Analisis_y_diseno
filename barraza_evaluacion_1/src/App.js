import imagen from "./Img/img_jesus.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen} className="App-logo" alt="foto" />
        <h1>
          Evaluación parcial 1
        </h1>
        <p>
          Alumno: Barraza Torres Jesús Daniel
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jes%C3%BAs-daniel-barraza-torres-0b55003a5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link de mi perfil
        </a>
        <a
          className="App-link"
          href="/components/download.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación parcial 1
        </a>
      </header>
    </div>
  );
}

export default App;
