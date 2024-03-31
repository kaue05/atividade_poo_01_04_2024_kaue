//EXERCICIO 2
//2.1

class Animal {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Mamifero extends Animal {
    constructor(nome, idade, tipoDePelo){
        super(nome, idade);
        this.tipoDePelo = tipoDePelo;
    }

    getSom(){
        return this.#indicarSomCaracteristico();
    }

    #indicarSomCaracteristico(){
        if (this.nome == "Cachorro"){
            return "Esse animal late!";
        } else {
            if (this.nome == "Gato"){
                return "Esse animal mia!";
            } else {
                if (this.nome == "Leão"){
                    return "Esse animal ruge!";
                } else {
                    return "Nome inválido";
                }
            }
        }
    }
}

class Ave extends Animal {
    constructor(nome, idade, tipoDeBico){
        super(nome, idade);
        this.tipoDeBico = tipoDeBico;
    }

    getVoo(){
        return this.#indicarSePodeVoar();
    }

    #indicarSePodeVoar(){
        if (this.nome == "Gavião"){
            return "Esse animal voa!";
        } else {
            if (this.nome == "Galinha"){
                return "Esse animal não voa!";
            } else {
                return "Nome inválido";
            }
        }
    }
}

const mamifero = new Mamifero("Cachorro", 5, "Pelo curto");
console.log(mamifero.getSom());

const ave = new Ave("Galinha", 5, "Pequeno");
console.log(ave.getVoo());

//2.2

class Livro {
    constructor(titulo, autor, preco){
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    getInformacoes(){
        return `Titulo: ${this.titulo}; Autor: ${this.autor}; Preço: ${this.preco}`;
    }
}

class LivroFisico extends Livro {
    constructor(titulo, autor, preco, peso){
        super(titulo, autor, preco);
        this.peso = peso;
    }

    getCustoEnvio(){
        return this.#calcularCustoEnvio();
    }

    #calcularCustoEnvio(){
        if (this.peso <= 1){
            return `Peso de ${this.peso}kg, frete grátis!`;
        } else {
            if (this.peso < 5){
                return `Peso de ${this.peso}kg, frete de R$5,00!`;
            } else {
                if (this.peso < 10){
                    return `Peso de ${this.peso}kg, frete de R$10,00!`;
                }
            }
        }
    }
}

class Ebook extends Livro {
    constructor(titulo, autor, preco, tamanhoMB){
        super(titulo, autor, preco);
        this.tamanhoMB = tamanhoMB;
    }

    getTamanhoMB(){
        return `O tamanho do arquivo é de ${this.tamanhoMB}MB`;
    }
}

const livroFisico = new LivroFisico("Livro 1", "Autor 1", 80, 1);
console.log(livroFisico.getInformacoes());
console.log(livroFisico.getCustoEnvio());

const ebook = new Ebook("Livro 2", "Autor 2", 50, 12);
console.log(ebook.getInformacoes());
console.log(ebook.getTamanhoMB());