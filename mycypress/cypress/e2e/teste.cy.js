/// <reference types="cypress" />
context('Funcionalidade Login', () => {

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('heliordff@hotmail.com')
        cy.get('#password').type('killer17')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
      
    })


})


