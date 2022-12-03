programa
{
	funcao inicio()
	{
		inteiro contador = 1
		inteiro numero_camisetas
		real preco_camiseta
		real total_compra = 0

		escreva("Informe o número de camisetas: ")
		leia(numero_camisetas)

		enquanto(contador <= numero_camisetas)
		{
			escreva("\nInforme o preço da camiseta: R$")
			leia(preco_camiseta)

			total_compra = total_compra + preco_camiseta
			contador++
		}
		escreva("\nTotal: R$"+total_compra+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 430; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */