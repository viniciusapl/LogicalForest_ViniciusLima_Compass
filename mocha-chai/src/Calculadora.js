export default class Calculadora{

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

//FUNÇÕES DE VALIDAÇÃO PARA A CALCULADORA DE MÉDIA
    //Função para validação de intervalo entre 0 e 10
    static entre0e10 (x) {
        return (x < 0 || x > 10);
    }

    //Função para validar se parâmetros passados são números
    static naoENum (x) {
        return (isNaN(x));
    }

//Função para o cálculo da média
    static mediaFinal(...args) { 
        //Coloquei as notas dentro de um array com nome 'notas'
        let notas = [...args];

        //Armazenei a soma das notas dentro de outra variável
        let somaNotas = notas.reduce((a, b) => this.soma(a, b), 0);

        //Validação das notas
        if (notas.some(this.entre0e10)) {
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
        let media = this.mediaFinal(...args)
        //Verifiquei se a media foi o necessário para aprovar ou resultou em reprova
        if (media < 6 ) {
            return 'Reprovado'
        } else {
            return 'Aprovado'
        }
    }

}


