//EXERCICIO 1
//1.1

class Carro {
    constructor(marca, modelo, ano, anoAtual){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.anoAtual = anoAtual;
    }

    obterInformacoes(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }

    anosDeUso(){
        return (this.anoAtual - this.ano);
    }
}

const carro = new Carro("Hyundai", "HB20", 2013, 2024);
console.log(carro.obterInformacoes());
console.log(carro.anosDeUso());




//1.2

class CentroTreinamento {

    #nome
    #idade
    #peso
    #altura

    constructor(nome, idade, peso, altura){
        this.#nome = nome;
        this.#idade = idade;
        this.#peso = peso;
        this.#altura = altura;
    }

    getDesconto(){
        return this.#receberDescontoEspecial();
    }

    getIMC(){
        return this.#calcularIMC();
    }

    #receberDescontoEspecial(){
        if (this.#idade < 18){
            return "Esse membro recebe um desconto especial!";
        } else {
            return "Esse membro não recebe desconto!";
        }
    }

    #calcularIMC(){
        this.imc = this.#peso / Math.pow(this.#altura, 2);
        this.imc = this.imc.toFixed(2);

        if (this.imc <= 18.5){
            return `O IMC desse membro é: ${this.imc}, logo está abaixo do peso!`;
        } else {
            if (this.imc >= 18.6 && this.imc <= 24.9){
                return `O IMC desse membro é: ${this.imc}, logo está no peso ideal!`;
            } else {
                if (this.imc >= 25 && this.imc <= 29.9){
                    return `O IMC desse membro é: ${this.imc}, logo está levemente acima do peso!`;
                } else {
                    if (this.imc >= 30 && this.imc <= 34.9){
                        return `O IMC desse membro é: ${this.imc}, logo está com obesidade grau I!`;
                    } else {
                        if (this.imc >= 35 && this.imc <= 39.9){
                            return `O IMC desse membro é: ${this.imc}, logo está com obesidade grau II!`;
                        } else {
                            return `O IMC desse membro é: ${this.imc}, logo está com obesidade grau III!`;
                        }
                    }
                }
            }
        }
    }
}

const centroTreinamento = new CentroTreinamento("João", 17, 67, 1.74);
console.log(centroTreinamento.getDesconto());
console.log(centroTreinamento.getIMC());