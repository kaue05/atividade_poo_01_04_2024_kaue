//EXERCICIO 4
//4.1

class ItemBiblioteca {
    constructor(titulo, anoLancamento) {
        if (this.constructor === ItemBiblioteca) {
            throw new Error('Não é possível instanciar uma classe abstrata diretamente.');
        }
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
    }

    obterInformacoes() {
        throw new Error('Método abstrato obterInformacoes() deve ser implementado.');
    }
}

class Livro extends ItemBiblioteca {
    constructor(titulo, anoLancamento, autor, edicao){
        super(titulo, anoLancamento);
        this.autor = autor;
        this.edicao = edicao;
    }

    obterInformacoes(){
        return `Título: ${this.titulo}; Ano de lançamento: ${this.anoLancamento}; Autor: ${this.autor}; Edição: ${this.edicao}`;
    }
}

class DVD extends ItemBiblioteca {
    constructor(titulo, anoLancamento){
        super(titulo, anoLancamento);
    }

    obterInformacoes(){
        return `Título: ${this.titulo}; Ano de lançamento: ${this.anoLancamento}`;
    }
}

const livro = new Livro("Livro 1", 2005, "Autor 1", 8);
const dvd = new DVD("DVD 1", 2010);

console.log(livro.obterInformacoes());
console.log(dvd.obterInformacoes());