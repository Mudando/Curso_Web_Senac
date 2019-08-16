const produto = {}

produto.nome='Celular'
produto.preco= 1000
produto.cor='azul'
console.log(produto.nome, produto.preco, produto.cor)//retorna os atributos do obj


produto.categoria = { tipo: 'smartphone', loja: 'americanas'}
console.log(produto)

const objeto = {
    item1: 'valor item',
    item2:''
}

console.log(objeto)

const objetoestranho = {
    ['nome^ Estranho'] : 0
}

console.log(objetoestranho["nome^ Estranho"])


function imprimirSoma(n1, n2){
    console.log(n1+n2)
}
imprimirSoma(1,)
imprimirSoma(1, 2)
imprimirSoma(1)
imprimirSoma(1, 's')

function imprimirmultiplica(n1, n2){
    console.log(n1*n2)
}

imprimirmultiplica(1, 2)