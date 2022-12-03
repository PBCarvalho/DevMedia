programa
{
	funcao inicio()
	{
		real idade_funcionario
		real soma_idades = 0.0
		real media = 0.0

		para(inteiro contador = 1; contador <= 15; contador++)
		{
			escreva("Digite a idade "+contador+"º funcionário: ")
			leia(idade_funcionario)

			soma_idades = soma_idades + idade_funcionario
		}
		media = soma_idades / 15

		escreva("Média de idade dos funcionarios: "+media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 326; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */