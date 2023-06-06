/// <reference types="cypress" />

context('Funcinalidade login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao insrir um usuário inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('lalala@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido')
        
    })

    it('Deve exibir uma mensagem de erro ao insrir uma senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@te')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain','Perdeu a senha?')
    })
})