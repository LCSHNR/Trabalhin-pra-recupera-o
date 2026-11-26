
 // MISSÃO 1 - PROTÓTIPOS

function ItemBase(nome) {
    this.nome = nome;
}

ItemBase.prototype.gerarEtiqueta = function(numeroChamada) {
    return `[ITEM: ${this.nome.toUpperCase()} | CHAMADA: #${numeroChamada}]`;
};


// MISSÃO 2 - ENCAPSULAMENTO

class ContaCantina {
    #saldo;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        if (valor < 0) {
            console.log("Erro: saldo negativo não permitido!");
        } else {
            this.#saldo = valor;
        }
    }

    calcularTaxa(valor) {
        return valor;
    }
}



// MISSÃO 3 - HERANÇA E POLIMORFISMO


class ContaAluno extends ContaCantina {
    constructor(titular, saldoInicial, turma) {
        super(titular, saldoInicial);
        this.turma = turma;
    }

    calcularTaxa(valor) {
        return valor * 0.80;
    }
}

class ContaProfessor extends ContaCantina {
    constructor(titular, saldoInicial, disciplina) {
        super(titular, saldoInicial);
        this.disciplina = disciplina;
    }

    calcularTaxa(valor) {
        if (valor < 100) {
            return 0;
        }
        return valor;
    }
}


// TESTES OBRIGATÓRIOS

console.log("===== SISTEMA DA CANTINA =====");

// Teste 1 - Protótipo
const item = new ItemBase("Salgado");

console.log("\nETIQUETA:");
console.log(item.gerarEtiqueta(16));


// Teste 2 - Encapsulamento
const aluno = new ContaAluno("SEU NOME COMPLETO", 200, "3º Ano");

console.log("\nSALDO DO ALUNO:");
console.log("Saldo inicial: R$", aluno.saldo);

aluno.saldo = -50;

console.log("Saldo após tentativa: R$", aluno.saldo);

// aluno.#saldo;
// Erro: atributos privados só podem ser acessados dentro da própria classe.


// Teste 3 - Herança
const professor = new ContaProfessor("Professor da Cantina", 500, "Programação");


// Teste 4 - Polimorfismo
console.log("\nPOLIMORFISMO:");

console.log("Valor original: R$ 80");
console.log("Aluno paga: R$", aluno.calcularTaxa(80));
console.log("Professor paga: R$", professor.calcularTaxa(80));


// Teste adicional
console.log("\nTESTE COM R$ 150:");

console.log("Aluno paga: R$", aluno.calcularTaxa(150));
console.log("Professor paga: R$", professor.calcularTaxa(150));
