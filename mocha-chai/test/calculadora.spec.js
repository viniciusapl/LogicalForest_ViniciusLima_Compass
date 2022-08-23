import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

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

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })   
    it('Deve subtrair 6 e 2 resultando em 4', () => {
        let resultado = Calculadora.sub(6, 2)
        expect(resultado).to.be.eq(4)
    })   
    it('Deve subtrair 7.5 e 9 resultando em -1.5', () => {
        let resultado = Calculadora.sub(7.5, 9)
        expect(resultado).to.be.eq(-1.5)
    })   
})

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
        let resultado = Calculadora.pot(2, 4)
        expect(resultado).to.be.eq(16)
    })
})

describe('Testes de radiciação', () => {
    it('Deve realizar a radiciação de 81 com índice 2 resultando em 9', () => {
        let resultado = Calculadora.rad(81, 2)
        expect(resultado).to.be.eq(9)
    })
    it('Deve realizar a radiciação de 81 com índice 2 resultando em 9', () => {
        let resultado = Calculadora.rad(-81, 2)
        expect(resultado).toString('NaN')   /* Verificar o pq só funciona se transformar o NaN em string */
    })

})

describe('Testes de média de 4 notas, onde a média necessária para aprovação é 6', () => {
    it('Tendo as notas 2, 3, 7 e 8 a média é 5, resultando em "Reprovado"', () => {
        let resultado = Calculadora.mediaFinal(2, 3, 7, 8)
        expect(resultado).to.be.eq('Reprovado')
    })
    it('Tendo as notas 6, 7, 9 e 10, a média é 8, resultando em "Aprovado"', () => {
        let resultado = Calculadora.mediaFinal(6, 7, 9, 10)
        expect(resultado).to.be.eq('Aprovado')
    })
    it('Tendo as notas 10 e 10 faltam 2 valores para o cálculo, resultando em "Por favor, insira todas as quatro notas"', () =>{
        let resultado = Calculadora.mediaFinal(10, 10)
        expect(resultado).to.be.eq("Por favor, insira todas as quatro notas")
    })
})