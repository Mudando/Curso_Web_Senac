//conceito de templat string
const nome = 'gilson'
const concatenacao = nome + ' ricardo'
console.log(concatenacao)

const template = `${nome} ricardo`//tudo que esta dentro da {} ele vai tentar interpretar e concateenar com o que estiver fora
console.log(template)
const teste = `${1+1} ricardo`//ele executa qualquer codigo executavel dentro da {}
console.log(teste)

console.log(`10+15 = ${10+15}`)//ele só vai calcular o que estiver dentro do {}
const caixa = texto => texto.toUpperCase()//constate usada como função, o toUpperCase vai deixar os nomes maisculos
console.log(`Olá ${caixa('fulano')}`)//estamos usando a constante caixa como uma função, reduzindo o conceito de uma função


