// exercício 1
function boasVindas() {
    console.log("Bem-vindo ao JavaScript!");
}
boasVindas();


// exercicio 2
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}
saudacao("Camila");


// exercicio 3
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));


// exercicio 4
function subtracao(a, b) {
    return a - b;
}
console.log(subtracao(10, 4));


// exercicio 5
function multiplicacao(a, b) {
    return a * b;
}
console.log(multiplicacao(5, 2));


// exercicio 6
function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}
console.log(divisao(20, 10));


// exercicio 7
function dobro(numero) {
    return numero * 2;
}
console.log(dobro(10));


// exercicio 8
function triplo(numero) {
    return numero * 3;
}
console.log(triplo(5));


// exercicio 9
function quadrado(numero) {
    return numero * numero;
}
console.log(quadrado(8));


// exercicio 10
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(media(10, 9, 8));

// exercicio 11
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(parOuImpar(8));


// exercicio 12
function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(maioridade(17));


// exercicio 13
function aprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
console.log(aprovacao(8));


// exercicio 14
function maior(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(maior(20, 10));


// exercicio 15
function verificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}
console.log(verificarNumero(-9));


// exercicio 16
function desconto(preco) {
    return preco * 0.90;
}
console.log(desconto(100));


// exercicio 17
function converterTemperatura(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(converterTemperatura(30));


// exercicio 18
function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}
console.log(nomeCompleto("Camila", "Regis"));


// exercicio 19
function verificarSenha(senha) {
    if (senha.length >= 8) {
        return true;
    } else {
        return false;
    }
}
console.log(verificarSenha("javascript"));


// exercicio 20
function calculadora(a, b, operacao) {
    if (operacao === "+") {
        return a + b;
    } else if (operacao === "-") {
        return a - b;
    } else if (operacao === "*") {
        return a * b;
    } else if (operacao === "/") {
        if (b === 0) {
            return "Erro: divisão por zero!";
        }
        return a / b;
    } else {
        return "Operação inválida!";
    }
}
console.log(calculadora(10, 5, "+"));

// exercicio 21
const soma = (a, b) => a + b;

console.log(soma(5, 3));
console.log(soma(10, 2));
console.log(soma(7, 8));


// exercicio 22
const dobro = numero => numero * 2;

console.log(dobro(5));
console.log(dobro(10));
console.log(dobro(3));


// exercicio 23
const saudacao = nome => "Olá, " + nome + "!";

console.log(saudacao("Camila"));
console.log(saudacao("Ana"));
console.log(saudacao("Pedro"));

// exercicio 24
const numeroPar = numero => numero % 2 === 0;

console.log(numeroPar(4));
console.log(numeroPar(7));
console.log(numeroPar(10));


// exercicio 25
const primeiroElemento = array => array[0];

console.log(primeiroElemento([10, 20, 30]));
console.log(primeiroElemento(["Ana", "João"]));
console.log(primeiroElemento([5, 8, 9]));


// exercicio 26
const ultimoElemento = array => array[array.length - 1];

console.log(ultimoElemento([10, 20, 30]));
console.log(ultimoElemento(["Ana", "João"]));
console.log(ultimoElemento([5, 8, 9]));


// exercicio 27
const quantidade = array => array.length;

console.log(quantidade([1, 2, 3]));
console.log(quantidade(["Ana", "João"]));
console.log(quantidade([10, 20, 30, 40]));


// exercicio 28
const adicionarElemento = (array, elemento) => {
    array.push(elemento);
    return array;
};

console.log(adicionarElemento([1, 2], 3));
console.log(adicionarElemento(["Ana"], "Pedro"));
console.log(adicionarElemento([10, 20], 30));


// exercicio 29
const removerUltimo = array => {
    array.pop();
    return array;
};

console.log(removerUltimo([1, 2, 3]));
console.log(removerUltimo(["Ana", "Pedro"]));
console.log(removerUltimo([10, 20, 30, 40]));


// 30. exercicio 30
function listarElementos(nomes) {
    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i]);
    }
}

listarElementos(["Ana", "Pedro", "Camila"]);
listarElementos(["João", "Maria"]);
listarElementos(["Lucas", "Beatriz", "Rafael"]);

// exercicio 31
const nomes = ["Ana", "Pedro", "Camila"];

nomes.forEach(nome => {
    console.log(nome);
});


// exercicio 32
const numeros = [10, 20, 30, 40, 50];

numeros.forEach(numero => {
    console.log("Número: " + numero);
});


// exercicio 33
const numeros1 = [1, 2, 3, 4, 5];

const dobrados = numeros1.map(numero => numero * 2);

console.log(dobrados);


// exercicio 34
const numeros2 = [2, 4, 6, 8];

const triplicados = numeros2.map(numero => numero * 3);

console.log(triplicados);


// exercicio 35
const nomes1 = ["Ana", "Pedro", "Camila"];

const maiusculos = nomes1.map(nome => nome.toUpperCase());

console.log(maiusculos);


// exercicio 36
const precos = [10, 20, 30, 40];

const novosPrecos = precos.map(preco => preco * 1.10);

console.log(novosPrecos);


// exercicio 37
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros3.filter(numero => numero % 2 === 0);

console.log(pares);


// exercicio 38
const impares = numeros3.filter(numero => numero % 2 !== 0);

console.log(impares);


// exercicio 39
const idades = [12, 18, 25, 14, 30, 16];

const maiores = idades.filter(idade => idade >= 18);

console.log(maiores);


// exercicio 40
const notas = [5, 8, 6, 9, 10, 4, 7];

const aprovados = notas.filter(nota => nota >= 7);

console.log(aprovados);

// exercicio 41
const numeros4 = [5, 12, 8, 20, 3];

const encontrado = numeros4.find(numero => numero > 10);

console.log(encontrado);


// exercicio 42
const nomes2 = ["Ana", "Bruno", "Carlos", "Daniela"];

const nomeEncontrado = nomes2.find(nome => nome === "Carlos");

console.log(nomeEncontrado);


// exercicio 43
const notas1 = [8, 9, 4, 7, 5];

const notaBaixa = notas1.find(nota => nota < 6);

console.log(notaBaixa);


// exercicio 44
const numeros5 = [3, 5, -2, 8, 10];

const existeNegativo = numeros5.some(numero => numero < 0);

console.log(existeNegativo);


// exercicio 45
const notas2 = [3, 5, 6, 8, 4];

const existeAprovado = notas2.some(nota => nota >= 7);

console.log(existeAprovado);


// exercicio 46
const numeros6 = [2, 4, 6, 8, 10];

const todosPositivos = numeros6.every(numero => numero > 0);

console.log(todosPositivos);


// exercicio 47
const notas3 = [7, 8, 9, 10, 6];

const todosAprovados = notas3.every(nota => nota >= 7);

console.log(todosAprovados);


// exercicio 48
const valores = [10, 20, 30, 40];

const somaValores = valores.reduce((acumulador, valor) => {
    return acumulador + valor;
}, 0);

console.log(somaValores);


// exercicio 49
const notas4 = [6, 8, 7, 9];

const somaNotas = notas4.reduce((acumulador, nota) => {
    return acumulador + nota;
}, 0);

const media = somaNotas / notas4.length;

console.log(media);


// exercicio 50
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniela", nota: 6 },
    { nome: "Eduardo", nota: 7 }
];

const alunosAprovados = alunos
    .filter(aluno => aluno.nota >= 7)
    .map(aluno => aluno.nome);

console.log(alunosAprovados);