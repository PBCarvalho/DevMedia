programa
{
	
	funcao inicio()
	{
		cadeia jogo
		cadeia plataforma
		inteiro unidades
		real preco
		logico pre_venda = verdadeiro

		escreva("Digite o nome do jogo: ")
		leia(jogo)
		escreva("Digite a plataforma do jogo: ")
		leia(plataforma)
		escreva("Digite o número de cópias disponíveis: ")
		leia(unidades)
		escreva("Digite o preço do jogo: R$")
		leia(preco)
		escreva("Produto em pré-venda? ")
		escreva("verdadeiro = Sim, falso = Não\n")
		leia(pre_venda)

		escreva("\nResumo do jogo cadastrado\n")

		escreva("\nJogo: "+jogo)
		escreva("\nPlataforma: "+plataforma)
		escreva("\nUnidades disponíveis: "+unidades)
		escreva("\nPreço: "+preco)
		escreva("\nPré-venda: "+pre_venda)

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 125; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */