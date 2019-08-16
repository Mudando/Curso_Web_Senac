let texto = true
console.log(texto)
console.log('Elementos Verdadeiros: ')
console.log(!!'a')//com algo vai retornar verdadeiro
console.log(!!' ')//com espaço vai retornar verdadeiro
console.log(!!3)//com numero qualquer vai retornar verdadeiro
console.log(!![])//com vetor vai ser verdadeiro
console.log(!!{})//com objeto vai ser verdadeiro

console.log('Elementos Falsos: ')
console.log(!!0)//o 0 vai ser sempre falso
console.log(!!'')//elemento vazio vai retornar false
console.log(!!NaN)//sempre falso
console.log(!!null)//sempre falso
console.log(!!undefined)//falso tambem

//diferença de null e undefined"Toda vez que eu não atribuir tipo para uma variavel ela vai ser considerada undefined, para uma variavel ser null temos de setar ela como nula"
let teste
console.log(teste)

console.log('testando ou')
console.log(!!('' || null || 0 || undefined || " "))

console.log('testando &')
console.log(!!('' & null & 0 & undefined & " "))



