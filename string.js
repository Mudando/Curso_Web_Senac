const escola = 'Senai'
console.log(escola.charAt(4))//charart retorna o valor do item da posição solicitada
console.log(escola.charCodeAt(2))//retorna o codigo da tabela unicode
console.log(escola.indexOf('1'))//em um tratamento faz uma busca pelo elemento específico, se ele não encontrar ele retorna -1, se encontrar retorna o valor
console.log(escola.substring(2))//retorna exatamente a quantidade de caracteres existente a partir do valor informado ou dentro de um espaço especificado"Bom para fazer busca de dados"
console.log('Escola:' .concat(escola).concat(' Serviço Nacional de Aprendizagem') )//concatenação
console.log('Escola:' + escola + (' Serviço Nacional de Aprendizagem') )//concatenação usando o +, se torna um pouco mais simples do que o .concat
console.log("5" + 5)//tambem fez concatenação se for +, mas se for outro operador diferende do + ele faz o calculo matemático
console.log("5" - 5)//como dito acima ele realiza o calculo
console.log('Segunda,Terça,Quarta'.split(','))//vai ser usado para separar uma string de acordo com o valor informado