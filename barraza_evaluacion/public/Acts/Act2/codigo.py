import hashlib
from datetime import date 

#Creación del código para hacer las cosas

class Programa():
    def __init__ (self, nombre, curp, grupo, dif):
        self.__nombre=nombre
        self.__curp=curp
        self.__grupo=grupo
        self.__fecha=date.today()
        self.__bitcoin= "MX$1,677,433"
        self.__dolar= "MX$17.63"
        self.bloque(dif)    

    @staticmethod
    def sha256(texto):
        resultado = hashlib.sha256(texto.encode())
        return resultado.hexdigest()
    
    def unir_bloque(self):
        texto=self.__curp+self.__bitcoin+self.__dolar
        return texto
    
    def bloque(self, dificultad):
        nonce=0
        objetivo="0" * dificultad

        print(f"\t\t --- Iniciando bloque de dificultad {dificultad} ---")

        while True:
            contenido=self.unir_bloque()+f"{nonce}"
            hash_intentado=self.sha256(contenido)

            if nonce < 5:
                print(f"Nonce: {nonce} -> Hash: {hash_intentado}")
            elif nonce == 5:
                print("...")

            if hash_intentado.startswith(objetivo):
                print(f"\n\t\t ¡Se ha encontrado un bloque válido! \n {self.__nombre} del {self.__grupo}. Estos fueron los resultados de {self.__fecha} \n Nonce final: {nonce} \n Hash válido: {hash_intentado}")
                return hash_intentado
            
            nonce +=1

programaPropio=Programa(input("Ingresa tu nombre: "), input("Ingresa tu CURP: "), input("Ingresa tu grupo: "), dif=int(input("¿Con qué grado de dificultad desea el bloque?")))