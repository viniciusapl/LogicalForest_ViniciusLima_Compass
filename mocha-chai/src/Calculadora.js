export default class Calculadora{

//FUNÇÕES DE OPERAÇÕES BÁSICAS
    //Função para somar
    static soma(a, b) {
        return (a + b);
    }

    //Função para subtração
    static sub(a, b) {
        return (a - b);
    }

    //Função para multiplicação
    static mult(a, b) {
        return (a * b);
    }

    //Função para divisão
    static div(a, b) {
        return (a / b);
    }

    //Função para potência
    static pot(a, b) {
        return (a ** b);
    }

    //Função para radiciação
    static rad(a, b) {
        return (a ** (1 / b));
    }


//FUNÇÕES USADAS APENAS PARA A VALIDAÇÃO DA CALCULADORA DE MÉDIA

    //Função para validação de intervalo entre 0 e 10
    static entre0e10 (x) {
        return (x < 0 || x > 10);
    }

    //Função para validar se parâmetros passados são números
    static naoENum (x) {
        return (isNaN(x));
    }

//CALCULADORA DE MÉDIA
    //Função para o cálculo da média
    static mediaFinal(...args) { 
        //Coloquei os valores dentro de um array
        let notas = [...args];

        //Armazenei a soma dos valores dentro de outra variável
        let somaNotas = notas.reduce((a, b) => this.soma(a, b), 0);

        //Validação dos valores usando as funções que criei lá em cima
        if (notas.some(this.entre0e10)) { //Aqui usei a função nativa .some, ela vai passar a função de validação por todos os elementos do array e retornar true se o número não estiver entre o intervalo 0 e 10, se estive tudo ok ela retorna false
            return ("ERRO: Insira um VALOR entre 0 a 10");
        } else if (notas.some(this.naoENum)) {
            return ("ERRO: Insira um NÚMERO entre 0 e 10");
        } else {
            return (somaNotas/notas.length); // Cálculo da média do aluno
        }
    }

//Função para verificar se aluno foi aprovado ou reprovado
    static aprov(...args) {
        //Armazenei o resultado do cálculo da média dentro da variável média
        let media = this.mediaFinal(...args);
        //Aqui é pra confirmar se a validação da função mediaFinal não resultou em alguma mensagem de erro *aqui foi encontrado um bug durante os testes finais*
        if (isNaN(media)) {
            return media;
        } else if (media < 6 ) {
            return 'Reprovado'//Verifiquei se a media foi o necessário para aprovar ou resultou em reprova
        } else {
            return 'Aprovado';
        }
    }
}


