const imprimiResultado = function (nota)
{
  switch ( Math.floor(nota))
  {
    //JS permite usar o case um após o outro se o objetivo dos case for o mesmo
    case 10:
    case 9:
    console.log("Conceito A")
    break
    case 8: case 7:
    console.log("Conceito B")
    break
    case 5: case 4:
    console.log("Conceito c")
    break
    default:
    console.log("Nota Inválida")
  }
}
imprimiResultado(10)
imprimiResultado(4)
imprimiResultado(3)
imprimiResultado(9.6)
