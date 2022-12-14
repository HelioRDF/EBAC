            #language: pt

            Funcionalidade: Tela de Login
            Como usuário do sistema
            Quero me autenticar
            Para acessar as funcionalidades do sistema.

            Contexto:
            Dado que eu acesso o sistema XPTO


            Esquema do Cenário: Usuário válido
            Quando informar o email <email>
            E a senha <senha>
            Então devo acessar a home

            Exemplos:
            | email              | senha          |
            | "xpto@hotmail.com" | "passoword123" |


