let nome = ["Luan", "Henrique", "Hector"];
console.log(nome);
console.log(nome[2]);

for (let contador = 0; contador < nome.length; contador++){
    console.log(`Elemento index ${contador} | nome: ${nome[contador]}`);
}

// Métodos de Array []:

let alunos = ["Sophia", "Luan", "Adriana", "Romulo", "Raquel", "Anderson"];
console.log("Array inicial:", alunos);

// Sort(): ordernar em ordem crescente - alfabética e numérica

alunos.sort();
console.log("Array em ordem:", alunos);

// Reverse(): ordenar em ordem descrescente
alunos.reverse();
console.log("Array em ordem:", alunos);

let numero = [22, 34, 12, 380, 07, 50];
console.log("Array inicial:", numero);
numero.sort();
console.log("Array em ordem:", numero);
numero.sort(function(a,b){
    return a-b;
});

// Unshift(): adicionar um item no começo da lista
alunos.unshift("Alice", "Nicolas");
console.log("Acrescenta nome no começo com unshift:", alunos);

// Shift(): remover um item no começo da lista
alunos.shift();
console.log("Remover quem ta no começo com shift:", alunos);

// Push(): adicionar no final do array
alunos.push("Mariana");
console.log("Adiciona no fim do array com push:", alunos);

// Pop(): remover o último item do array
alunos.pop();
console.log("Remove o ultimo do array com pop:", alunos);

// Splice: remover, adicionar e substituir
/*No splice passamos 2 argumentos, o primeiro é o índice do item a ser removido
ou posição onde quer adicionar ou substituir um item 
e o segundo é o número de itens a serem removidos, por isso o zero.*/ 
alunos.splice(6, 1);
console.log("Removendo com splice:", alunos);

alunos.splice(1, 0, "Cássio");
console.log("Adicionando com splice:", alunos);

alunos.splice(5, 2, "Andreza");
console.log("Substituindo com splice:", alunos);

// Objetos: conjuntos de variáveis e funcções que são chamadas de propriedades e metodos

let pessoa = {
    nome: "Adriana",
    sobrenome: "Gutierrez",
    idade: 42,
    casada: true,
    estudante: true,
    tecnologias: ["htlm", "css", "JS"],
}

console.log(pessoa);
console.table(pessoa);

console.log("Seu nome é", pessoa.nome);
console.log("Sua tecnologia é:", pessoa.tecnologias[1]);

// Array de objetos

const galera = [
    {
        nome: "Adriana",
        tecnologia: ["HTML5", "CSS"]
    }, //tem que ter a vírgula!

    {
        nome: "Raquel",
        tecnologia: "JavaScript"
    }
]

console.log(galera[0].nome);
console.log(galera[0].tecnologia[1]);