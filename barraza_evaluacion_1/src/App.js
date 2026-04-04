import imagen from "./Img/img_jesus.png";
import { useState, useEffect } from "react";
import './App.css';
import LoginPage from "./loginPage.jsx";

function App() {
  const [sesion, setSesion] = useState(() => {
    // Recuperar sesión guardada al iniciar
    const saved = localStorage.getItem("sesion");
    return saved ? JSON.parse(saved) : null;
  });

  // Guardar o limpiar sesión en localStorage cuando cambie
  useEffect(() => {
    if (sesion) {
      localStorage.setItem("sesion", JSON.stringify(sesion));
    } else {
      localStorage.removeItem("sesion");
    }
  }, [sesion]);

  return (
    <div className="App">
      {!sesion ? (
        <LoginPage setSesion={setSesion} />
      ) : (
        <header className="App-header">
          <div style={{ marginBottom: "20px" }}>
            <h2>¡Hola, {sesion.name}!</h2>
          </div>

          <img src={imagen} className="App-logo" alt="foto" />
          <h1>Evaluación parcial 1</h1>
          <p>Alumno: Barraza Torres Jesús Daniel</p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/jes%C3%BAs-daniel-barraza-torres-0b55003a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link de mi perfil
          </a> <br/>
          <a
            className="App-link"
            href="/components/P1/download.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación parcial 1
          </a> <br/>
          <a
            className="App-link"
            href="/components/P2/info.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación parcial 2
          </a> <br/>
          <button onClick={() => setSesion(null)}>Cerrar sesión</button> <br/>
        </header>
      )}
    </div>
  );
}

export default App;
