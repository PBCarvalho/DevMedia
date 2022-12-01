programa
{
	funcao inicio(){
		inteiro dia_semana

		escreva("Sistema de sugestão de jogos para fim de semana:\n\n")

		escreva("Escolha um dia da semana (1 = Domingo, 6 = Sexta, 7 = Sábado)\n\n")
		leia(dia_semana)

		escolha(dia_semana)
		{
		caso 1:
		escreva("\nDomingo é dia de FIFA 21")
		pare
		caso 6:
		escreva("\nSexta-feira é dia de Apex Legends")
		pare
		caso 7:
		escreva("\nSábado é dia de Call of Duty: Warzone")
		pare
		caso contrario:
		escreva("\nNão é fim de semana")
        	pare
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 502; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */