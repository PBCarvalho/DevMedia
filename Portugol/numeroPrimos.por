programa{
	funcao inicio(){

		inteiro divisor = 2
		inteiro numero
		inteiro contador = 0

		escreva("\nChecagem de números primos \n")
  		escreva("\nInforme um número: ")
  		leia(numero)

  		enquanto(divisor <= (numero/2)){
  			se(numero % divisor == 0){
  				contador = contador + 1
  				pare
  			}
  			divisor = divisor + 1
  		}
  		se(contador == 0 e numero != 1){
  			escreva("\n"+numero+" é um número primo\n")
  		} senao {
  			escreva("\n"+numero+" não é um número primo\n")
  		}
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 494; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */