// let nome = 'Eric Oliveira'
// // alert('Seja Bem Vindo ' + nome)

// console.log(nome)
// console.log(nome.toUpperCase())

// // Arrays
// let lista = ['Uva', 'Pêra', 'Laranja']
// lista.pop()
// lista.push('Tomate')
// console.log(lista)
// console.log(lista.reverse())
// console.log(lista.join(' | '))
// console.log(lista.toString())

// // Dicionário
// let fruta = {
//     nome: 'Maçã',
//     cor: 'Vermeelha'
// }

// console.log(fruta.nome, fruta.cor)

// // Lista de Dicionário
// let frutas = [{
//     nome: 'Maçã',
//     cor: 'Vermeelha'
// },
// {
//     nome: 'Laranja',
//     cor: 'Laranja'
// }
// ]

// console.log(frutas)

// // Laço de reepetição, condicionais e date
// let idade = prompt('Qual sua idade?')
// if (idade >= 18) {
//     alert('Maior de idade!')
// } else {
//     alert('Menor de idade!')
// }

// let count = 1;
// while (count <= 10) {
//     console.log(count)
//     count += 1
// }

// let contador;
// for (let contador = 1; contador <= 5; contador++) {
//     console.log(contador)
// }

// let data = new Date();
// alert(data)

// alert('Digital' + formacoes)

// // Funçõess
// function soma(n1, n2) {
//     return n1 + n2
// }

// function validarIdade(idade) {
//     let validar
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     }

//     return validar
// }
// let idade = prompt('Qual sua idade?')
// console.log(validarIdade(idade))

function clicar() {
    document.querySelector('h3').innerHTML = 'Obrigado por clicar!'
}