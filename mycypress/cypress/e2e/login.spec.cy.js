/// <reference types="cypress" />
context('Funcionalidade Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('heliordf@hotmail.com')
        cy.get('#password').type('killer17')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')


    })


    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('heliordf@hotmail.com')
        cy.get('#password').type('killer177')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail heliordf@hotmail.com está incorreta. Perdeu a senha?')
    })

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('heliordff@hotmail.com')
        cy.get('#password').type('killer17')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })



})


