programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real total_desconto
		real total_juros
		

		escreva("Informe o valor: ")
		leia(valor)
		
		escreva("\nInforme a porcentagem: ")
		leia(porcentagem)

		total_desconto = valor - (valor * porcentagem / 100)
		total_juros = valor + (valor * porcentagem / 100)

		escreva("\n")

		escreva(valor+" com "+porcentagem+"% de desconto é "+total_desconto)
		
		escreva("\n")
		
		escreva(valor+" com "+porcentagem+"% de juros é "+total_juros)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 330; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */