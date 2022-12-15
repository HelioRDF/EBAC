/// <reference types="cypress" />

context('Funcionalidade Login', () => {
    before(() => {
        //Antes de iniciar os testes
    });
    beforeEach(() => {
        //Antes de cada teste
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('heliordf@hotmail.com')
        cy.get('#password').type('killer17')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('heliordf@hotmail.com')
        cy.get('#password').type('killer177')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail heliordf@hotmail.com está incorreta. Perdeu a senha?')
    })

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('heliordff@hotmail.com')
        cy.get('#password').type('killer17')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })
})


