import { useState } from 'react';
import './calculadora.css'; // Importamos los estilos que crearé abajo

function Operaciones() {
    // Definimos el estado para los números y el resultado
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    // Función auxiliar para obtener los valores numéricos
    const getValues = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            setResultado("Ingresa números válidos");
            return null;
        }
        return { n1, n2 };
    };

    function sumar() {
        const val = getValues();
        if (val) setResultado(val.n1 + val.n2);
    }

    function restar() {
        const val = getValues();
        if (val) setResultado(val.n1 - val.n2);
    }

    function multiplicar() {
        const val = getValues();
        if (val) setResultado(val.n1 * val.n2);
    }

    function dividir() {
        const val = getValues();
        if (val) {
            if (val.n2 !== 0) {
                setResultado(val.n1 / val.n2);
            } else {
                setResultado("Error: No dividir por 0");
            }
        }
    }

    // Función para limpiar todo
    function limpiar() {
        setNum1('');
        setNum2('');
        setResultado(null);
    }

    return (
        <div className="container">
            <div className="calculadora-card">
                <h1>Calculadora</h1>

                {/* Campos de entrada */}
                <div className="inputs-container">
                    <input 
                        type="number" 
                        placeholder="Número 1" 
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Número 2" 
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>

                {/* Botones de operaciones */}
                <div className="botones-grid">
                    <button className="btn op" onClick={sumar}>+</button>
                    <button className="btn op" onClick={restar}>-</button>
                    <button className="btn op" onClick={multiplicar}>×</button>
                    <button className="btn op" onClick={dividir}>÷</button>
                </div>

                <button className="btn clear" onClick={limpiar}>Limpiar</button>

                {/* Visualización del resultado */}
                <div className="resultado-box">
                    <h3>Resultado:</h3>
                    <p>{resultado !== null ? resultado : '...'}</p>
                </div>
            </div>
        </div>
    );
}

export default Operaciones;