programa
{
	
	funcao inicio()
	{
		inteiro numero
		inteiro resultado
		inteiro contador = 0
		caracter operador

		escreva("Sistema de Tabuada\n\n")

		escreva("Informe um número entre 1 e 10 para ver a tabuada: ")
		leia(numero)
		escreva("\n+ : SOMA | - : SUBTRAÇÃO | * : MULTIPLICAÇÃO | / : DIVISÃO | % : RESTO DA DIVISÃO\n")
		escreva("Escolha o operador a ser utilizado: ")
		leia(operador)
		
		escreva("\nTabuada de "+numero+"\n")
		escreva("Operador: ( "+operador+" )\n\n")

		enquanto(contador <= 10){
			se(operador == '+'){			
				resultado = contador + numero
				escreva(contador+" + "+numero+" = "+resultado+"\n")
				contador = contador + 1
			}senao se(operador == '-'){
				resultado = contador - numero
				escreva(contador+" - "+numero+" = "+resultado+"\n")
				contador = contador + 1
			}senao se(operador == '*'){
				resultado = contador * numero
				escreva(contador+" * "+numero+" = "+resultado+"\n")
				contador = contador + 1
			}senao se(operador == '/'){
				resultado = contador / numero
				escreva(contador+" / "+numero+" = "+resultado+"\n")
				contador = contador + 1
			}senao{
				resultado = contador % numero
				escreva(contador+" % "+numero+" = "+resultado+"\n")
				contador = contador + 1
			}
		}	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 487; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */