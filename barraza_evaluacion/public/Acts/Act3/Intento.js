const crypto = require('crypto');
const readline = require('readline');

// Creación del código para hacer las cosas

class Programa {
    constructor(nombre, curp, grupo, dif) {
        this.nombre = nombre;
        this.curp = curp;
        this.grupo = grupo;
        this.fecha = new Date().toLocaleDateString();
        this.bitcoin = "MX$1,677,433";
        this.dolar = "MX$17.63";
        this.bloque(dif);
    }

    static sha256(texto) {
        return crypto.createHash('sha256').update(texto).digest('hex');
    }

    unirBloque() {
        return this.curp + this.bitcoin + this.dolar;
    }

    bloque(dificultad) {
        let nonce = 0;
        const objetivo = "0".repeat(dificultad);

        console.log(`\t\t --- Iniciando bloque de dificultad ${dificultad} ---`);

        while (true) {
            const contenido = this.unirBloque() + `${nonce}`;
            const hashIntentado = Programa.sha256(contenido);

            if (nonce < 5) {
                console.log(`Nonce: ${nonce} -> Hash: ${hashIntentado}`);
            } else if (nonce === 5) {
                console.log("...");
            }

            if (hashIntentado.startsWith(objetivo)) {
                console.log(`\n\t\t ¡Se ha encontrado un bloque válido! \n ${this.nombre} del ${this.grupo}. Estos fueron los resultados de ${this.fecha} \n Nonce final: ${nonce} \n Hash válido: ${hashIntentado}`);
                return hashIntentado;
            }

            nonce++;
        }
    }
}

// Crear interfaz para entrada de usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Hacer las preguntas de manera secuencial
rl.question("Ingresa tu nombre: ", (nombre) => {
    rl.question("Ingresa tu CURP: ", (curp) => {
        rl.question("Ingresa tu grupo: ", (grupo) => {
            rl.question("¿Con qué grado de dificultad desea el bloque? ", (dif) => {
                const programaPropio = new Programa(nombre, curp, grupo, parseInt(dif));
                rl.close();
            });
        });
    });
});
