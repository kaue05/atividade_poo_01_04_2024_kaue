//EXERCICIO 3
//3.1

class Calculadora {
    raizQuadrada(numero){
        return Math.sqrt(numero);
    }

    potencia(base, expoente){
        return Math.pow(base, expoente);
    }

    somar(a, b){
        return a + b;
    }

    subtrair(a, b){
        return a - b;
    }

    multiplicar(a, b){
        return a * b;
    }

    dividir(a, b){
        return a / b;
    }
}

const calculadora = new Calculadora();
// console.log(calculadora.raizQuadrada(16));
// console.log(calculadora.potencia(3, 2));
// console.log(calculadora.somar(15, 15));
// console.log(calculadora.subtrair(10, 5));
// console.log(calculadora.multiplicar(5, 5));
// console.log(calculadora.dividir(100, 20));