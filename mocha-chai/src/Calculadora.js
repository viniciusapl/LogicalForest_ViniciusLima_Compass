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
    
    static mediaFinal(a, b, c, d) {
        let mediaFinal = (a + b + c + d) / 4;
        if (a === undefined || b === undefined || c === undefined || d === undefined) {
            return "Por favor, insira todas as quatro notas";
        } else if (mediaFinal < 6){
            return "Reprovado"
        } else {
            return "Aprovado"
        }
    }

    static imc(peso, altura) {
        let result = peso / altura ** 2
        if (result < 18.5) {
            return 'Magreza'
        } else if (result >= 18.5 && result < 25) {
            return 'Normal'
        } else if (result >= 25 && result < 30) {
            return 'Sobrepeso'
        } else if (result >= 30 && result < 35) {
            return 'Obesidade grau I'
        } else if (result >= 35 && result < 40) {
            return 'Obesidade grau II'
        } else {
            return 'Obesidade grau III'
        }
    }

}