console.log ("Desafio 05:")

console.log("1. Crie um array que receba 5 itens e exiba no console.")

 let animais = ["cachorro", "gato", "passarinho", "peixe", "coelho"];
 console.log("Array com cinco itens:", animais);

//=================================

console.log("2. Utilize um método para adicionar um nome ao inicio do array.")

animais.unshift("cobra");
console.log("Adicionando cobra no início do array com Unshift:", animais);

//=================================

console.log("3. Utilize um método para remover o último nome do array.")

animais.pop();
console.log("Removendo coelho da lista com Pop:", animais);

//=================================

console.log("4. Utilize um método para adicionar dois nomes ao fim do array.")

animais.push("cavalo", "porco");
console.log("Adicionando 2 nomes no fim do array com Push:", animais);

//=================================

console.log("Utilize um método para remover o primeiro nome do array.")

animais.shift();
console.log("Remover o primeiro nome do array com Shift:", animais);

//=================================

console.log("Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]")

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log("Organizando os números em ordem crescente:", numbers);