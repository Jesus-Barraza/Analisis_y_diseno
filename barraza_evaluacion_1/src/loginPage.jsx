import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Login from "./login.jsx";
import './App.css';

function LoginPage({ setSesion }) {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    setSesion(decoded); // guardamos el usuario en App
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setSesion(null);
  };

  return (
    <div className="App" style={{ textAlign: "center"}}>
        <header className="App-header">
            {!user ? (
                <Login onSuccess={handleLoginSuccess} />
            ) : (
                <div>
                    <h1>Evaluación parcial 1</h1>
                    <h2>¡Hola, {user.name}!</h2>
                    <img src={user.picture} alt="Foto de perfil" />
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </header>
    </div>
  );
}

export default LoginPage;
