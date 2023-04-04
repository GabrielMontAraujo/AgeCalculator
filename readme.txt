Explicação:

O código HTML define a estrutura da página, com um formulário contendo um campo de data de nascimento e um botão para calcular a idade. Há também um elemento <div> para mostrar o resultado do cálculo.

O código CSS define a aparência da página, com alguns estilos básicos para torná-la mais apresentável.

O código JavaScript é onde a mágica acontece. A função calculateAge() é chamada quando o botão é clicado. Ela recupera o valor do campo de data de nascimento e a data atual, e em seguida realiza o cálculo da idade em anos, meses e dias.

Primeiro, é criada uma instância da classe Date para a data de nascimento, usando o valor do campo de entrada. Em seguida, é criada outra instância da classe Date para a data atual, usando a função new Date(). Depois, subtrai-se a data de nascimento da data atual, para obter a diferença em milissegundos.

Com a diferença em milissegundos, podemos calcular a diferença em dias, dividindo o valor por 1000 (para converter em segundos), 60 (para converter em minutos), 60 (para converter em horas) e 24 (para converter em dias). O resultado é arredondado para baixo com Math.floor().