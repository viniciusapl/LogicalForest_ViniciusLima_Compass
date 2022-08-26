import assert from 'assert'
import chai from 'chai'
import exp from 'constants'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

//TESTES DE SOMA
describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve somar -7 e -5 resultando em -12', () => {
        let resultado = Calculadora.soma(-7, -5)
        expect(resultado).to.be.eq(-12)
    })
    it('Deve somar -2.5 e 5 resultando em 2.5', () => {
        let resultado = Calculadora.soma(-2.5, 5)
        expect(resultado).to.be.eq(2.5)
    })
})

//TESTES DE SUBTRAÇÃO
describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })   
    it('Deve subtrair 6 e 2 resultando em 4', () => {
        let resultado = Calculadora.sub(6, 2)
        expect(resultado).to.be.eq(4)
    })   
    it('Deve subtrair 7.5 e 7.4 resultando em 0.1', () => {
        let resultado = Calculadora.sub(7.8, 7.7)
        expect(parseFloat(resultado.toFixed(1))).to.be.eq(0.1)
    })   
    it('Deve subtrair -4 e 6 resultando em -10', () => {
        let resultado = Calculadora.sub(-4, 6)
        expect(resultado).to.be.eq(-10)
    })
})

//TESTES DE MULTIPLICAÇÃO
describe('Testes de multiplicação', () => {
    it('Deve multiplicar 9 por 5 resultando em 45', () => {
        let resultado = Calculadora.mult(9, 5)
        expect(resultado).to.be.eq(45)
    })   
    it('Deve multiplicar 6 por -2 resultando em -12', () => {
        let resultado = Calculadora.mult(6, -2)
        expect(resultado).to.be.eq(-12)
    })   
    it('Deve multiplicar -7 por -5 resultando em 35', () => {
        let resultado = Calculadora.mult(-7,-5)
        expect(resultado).to.be.eq(35)
    })   
    it('Deve multiplicar 8.7 por -2 resultando em -17.4', () => {
        let resultado = Calculadora.mult(8.7, -2)
        expect(resultado).to.be.eq(-17.4)
    })   
})

//TESTES DE DIVISÃO
describe('Testes de divisão', () => {
    it('Deve dividir 50 por 5 resultando em 10', () => {
        let resultado = Calculadora.div(50, 5)
        expect(resultado).to.be.eq(10)
    })   
    it('Deve dividir 6 por 2 resultando em 3', () => {
        let resultado = Calculadora.div(6, 2)
        expect(resultado).to.be.eq(3)
    })   
    it('Deve dividir 3 por -2 resultando em -1.5', () => {
        let resultado = Calculadora.div(3, -2)
        expect(resultado).to.be.eq(-1.5)
    })   
    it('Deve dividir 10 por 2.5 resultando em 4', () => {
        let resultado = Calculadora.div(10, 2.5)
        expect(resultado).to.be.eq(4)
    })   
})

//TESTES DE POTÊNCIA
describe('Testes de potência', () => {
    it('Deve realizar a potência de 10 por 2 resultando em 100', () => {
        let resultado = Calculadora.pot(10, 2)
        expect(resultado).to.be.eq(100)
    })
    it('Deve realizar a potência de 2 por 4 resultando em 16', () => {
        let resultado = Calculadora.pot(2, 4)
        expect(resultado).to.be.eq(16)
    })
    it('Deve realizar a potência de 2 por -2 resultando em 0.25', () => {
        let resultado = Calculadora.pot(2, -2)
        expect(resultado).to.be.eq(0.25)
    })
    it('Deve realizar a potência de -5 por 3 resultando em -125', () => {
        let resultado = Calculadora.pot(-5, 3)
        expect(resultado).to.be.eq(-125)
    })
})

//TESTES DE RAIZ
describe('Testes de radiciação', () => {
    it('Deve realizar a radiciação de 81 com índice 2 resultando em 9', () => {
        let resultado = Calculadora.rad(81, 2)
        expect(resultado).to.be.eq(9)
    })
    it('Deve realizar a radiciação de -81 com índice 2 resultando em 9', () => {
        let resultado = Calculadora.rad(-81, 2)
        expect(resultado).to.be.NaN
    })
})


//TESTES DA CALCULADORA DE MÉDIA
describe('Teste de cálculo de média de n números', () => {

    //TESTES DE VALIDAÇÃO
    //Usando uma string entre as notas
    it('Tendo os valores "a", 3, 7 e 8 a média não poderá ser calculada, resultando em uma mensagem de erro', () => {
        let resultado = Calculadora.mediaFinal('a', 2, 3, 7)
        expect(resultado).to.be.eq('ERRO: Insira um NÚMERO entre 0 e 10')
    })

    //Usando um número menor que zero
    it('Tendo um valor fora do intervalo 0 e 10 entre as notas, resultando em uma mensagem de erro', () => {
        let resultado = Calculadora.mediaFinal(5, 9, -7, 10)
        expect(resultado).to.be.eq("ERRO: Insira um VALOR entre 0 a 10")
    })

    //Usando um número maior que 10
    it('Tendo um valor fora do intervalo 0 e 10 entre as notas, resultando em uma mensagem de erro', () => {
        let resultado = Calculadora.mediaFinal(6, 8, 7, 11)
        expect(resultado).to.be.eq("ERRO: Insira um VALOR entre 0 a 10")
    })

    //APÓS A VALIDAÇÃO
    //Confirmar se o cálculo está sendo realizado corretamente
    it('Valores 5, 2, 3, 6 resultando na média 4', () => {
        let resultado = Calculadora.mediaFinal(5, 2, 3, 6)
        expect(resultado).to.be.eq(4)
    })

    it.only('Tendo os valores 10, 10, 10, 10, 10 e 10 resultando na média 10', () => {
        let resultado = Calculadora.mediaFinal(10, 10, 10, 10, 10, 10)
        expect(resultado).to.be.eq(10)
    })

//USANDO A FUNÇÃO APROV
    //Verificar se a validação da função mediaFinal funciona aqui também
    it.only('Tendo os valores "cinco", 7, 8 e 8 a média não poderá ser calculada, resultando em uma mensagem de erro pois foi inserida uma string', () => {
        let resultado = Calculadora.aprov('cinco', 7, 8, 8)
        expect(resultado).to.be.eq('ERRO: Insira um NÚMERO entre 0 e 10')
    })

    it('Valores 5, 2, 3, 6 resultando na média 4 com o aluno reprovado', () => {
        let resultado = Calculadora.aprov(5,2,3,6)
        expect(resultado).to.be.eq('Reprovado')
    })

    it('Tendo as notas 2, 3, 7 e 8 a média é 5, resultando em "Reprovado"', () => {
        let resultado = Calculadora.aprov(2, 3, 7, 8)
        expect(resultado).to.be.eq('Reprovado')
    })

    it('Tendo as notas 6, 7, 9 e 10, a média é ' + Calculadora.mediaFinal(6, 7, 9, 10, 4) + ', resultando em "' + Calculadora.aprov(6, 7, 9, 10, 4) + '"', () => {
        let resultado = Calculadora.aprov(6, 7, 9, 10, 4)
        expect(resultado).to.be.eq('Aprovado')
    })
/*    it('Confirmação da aprovação', () => {
        let resultado = Calculadora.aprove(Calculadora.mediaFinal(5, 2, 3, 6))
        expect(resultado).to.be.eq('Reprovado')
    })*/
})
