function ItemBase(nome) {
    this.nome = nome;
}

ItemBase.prototype.gerarEtiqueta = function(numeroChamada) {
    return `[ITEM: ${this.nome.toUpperCase()} | CHAMADA: #${numeroChamada}]`;
};



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
            console.log("ERRO: O saldo não pode ser negativo!");
        } else {
            this.#saldo = valor;
        }
    }

    calcularTaxa(valor) {
        return valor;
    }
}



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



console.log("===== TESTES DO SISTEMA =====");

const item = new ItemBase("Salgado");

console.log("\n1. ETIQUETA DO ITEM:");
console.log(item.gerarEtiqueta(16));


const aluno = new ContaAluno("Lucas Henrique", 200, "Turma A");

console.log("\n2. TESTE DO SALDO:");
console.log("Saldo inicial:", aluno.saldo);

aluno.saldo = -50;

console.log("Saldo após tentativa:", aluno.saldo);



const professor = new ContaProfessor("Professor", 500, "Programação");


console.log("\n3. TESTE DE POLIMORFISMO:");

const valor = 80;

console.log("Valor original: R$", valor);
console.log("Taxa do aluno com 20% de desconto: R$", aluno.calcularTaxa(valor));
console.log("Taxa do professor (isento abaixo de R$ 100): R$", professor.calcularTaxa(valor));


console.log("\n4. TESTE COM VALOR DE R$ 150:");

console.log("Taxa do aluno: R$", aluno.calcularTaxa(150));
console.log("Taxa do professor: R$", professor.calcularTaxa(150));
