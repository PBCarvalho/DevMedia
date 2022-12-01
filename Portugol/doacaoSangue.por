programa
{
 funcao inicio()
 {
  cadeia tipo_sangue

  escreva("O tipo sanguíneo do paciente é A+ ou B-? ")
  leia(tipo_sangue)

  se(tipo_sangue == "A+")
  {
   escreva("\nPodem doar para o tipo A+: A+, A-, O+ e O-")
  }
  senao se(tipo_sangue == "B-")
  {
   escreva("\nPodem doar para o tipo B-: B- e O-")
  }
  senao
  {
   escreva("\nTipo sanguíneo inválido")
  }
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 373; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */