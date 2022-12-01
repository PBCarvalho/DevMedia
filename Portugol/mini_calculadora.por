programa
{
	
	funcao inicio()
	{
		real numero1, numero2
		caracter operacao

		escreva("Mini calculadora de dois números\n\n")

		escreva("Informe o primeiro números: ")
		leia(numero1)
		
		escreva("Informe o segundo números: ")
		leia(numero2)

		escreva("\nQual operação deseja utilizar?\n")
		escreva("+ : SOMA\n")
		escreva("- : SUBTRAÇÃO\n")
		escreva("* : MULTIPLICAÇÃO\n")
		escreva("/ : DIVISÃO\n")
		leia(operacao)

		escreva("Opção escolhida: "+operacao+"\n\n")
		escreva("Resultado: "+numero1+" "+operacao+" "+numero2+" = ")
		
		se (operacao == '+')
		{
			escreva(numero1 + numero2)
		}
		senao se (operacao == '-')
		{
			escreva(numero1 - numero2)
		}
		senao se (operacao == '*')
		{
			escreva(numero1 * numero2)
		}
		senao se (operacao == '/')
		{
			se (numero2 > 0)
			{
				escreva(numero1 / numero2)	
			} 
			senao
			{
				escreva("Não é possível dividir por 0")
			}
		
		}
		senao
		{
			escreva("Operação inválida")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 785; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */