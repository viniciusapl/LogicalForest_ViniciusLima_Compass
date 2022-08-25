export default class Calculadora{

    static soma(a, b) {
        return a + b;
    };

    static sub(a, b) {
        return a - b;
    };

    static mult(a, b) {
        return a * b;
    };

    static div(a, b) {
        return a / b;
    };

    static pot(a, b) {
        return a ** b;
    };

    static rad(a, b) {
        return a ** (1 / b);
    };
    
 /*   static mediaFinal(nota1, nota2, nota3, nota4) {
        
        var calcMedia = function () {
            var a = nota1
            var b = nota2
            var c = nota3
            var d = nota4
            let calc = (a + b + c + d) / 4;
            return calc
        }

        var aprove = function (media = calcMedia()) {
            if (media < 6){
                return "Reprovado"
            } else {
                return "Aprovado"
            }
        }

        if (nota1 === undefined || nota2 === undefined || nota3 === undefined || nota4 === undefined) {
            return "ERRO: Por favor, insira todas as quatro notas";
        } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
            return "ERRO: Insira um valor entre 0 a 10"
        } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            return "ERRO: Insira um número entre 0 e 10"
        } else {
            return calcMedia() 
        }
 
    } */


    /*static mediaFinal(a, b, c, d) {
        
        function calcMedia() {
            let calc = (a + b + c + d) / 4;
            return calc
        }

        let media = calcMedia()
        if (a === undefined || b === undefined || c === undefined || d === undefined) {
            return "ERRO: Por favor, insira todas as quatro notas";
        } else if (a < 0 || a > 10 || b < 0 || b > 10 || c < 0 || c > 10 || d < 0 || d > 10) {
            return "ERRO: Insira um valor entre 0 a 10"
        } else if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
            return "ERRO: Insira um número entre 0 e 10"
        } else if (media < 6){
            return "Reprovado"
        } else {
            return "Aprovado"
        }
        
    }

    static aprove(){ 
        
        var media = mediaFinal()
        if (media < 6){
            return "Reprovado"
        } else {
            return "Aprovado"
        }

    }*/

    static mediaFinal(a, b, c, d) { 
        return  (a + b + c + d) / 4
    }

    static aprove(a, b, c, d) {

        let media = this.mediaFinal(a, b, c, d)

        if (media < 6 ) {
            return 'Reprovado'
        } else {
            return 'Aprovado'
        }
    }
    

    static imc(peso, altura) {
        let result = peso / altura ** 2
        if (result < 18.5) {
            return 'Magreza'
        } else if (result < 25) {
            return 'Normal'
        } else if (result < 30) {
            return 'Sobrepeso'
        } else if (result < 35) {
            return 'Obesidade grau I'
        } else if (result < 40) {
            return 'Obesidade grau II'
        } else {
            return 'Obesidade grau III'
        }
    }

}