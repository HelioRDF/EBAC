Feature: Tela de Login
Como usuário do sistema
Quero me autenticar
Para acessar as funcionalidades do sistema

  Background: 
    Given que eu acesso o sistema XPTO

  Scenario Outline: Usuário válido
    When informar o email <email>
    And a senha <senha>
    Then devo acessar a home

    Examples: 
      | email              | senha          |
      | "xpto@hotmail.com" | "passoword123" |
