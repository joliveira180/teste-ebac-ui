/// <reference types="cypress" />
import enderecoPage from '../support/pages-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)

        })

    });

    it('Deve fazer o cadastro do endereço de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturmento('Joana', 'Oliveira', 'Google', 'Brasil', 'Av Kennedy', '1000', 'São Paulo', 'São Paulo', '01000000', '11989999999', 'email@dominio.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer o cadastro do endereço de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturmento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer o cadastro do endereço de entrega com sucesso', () => {
        enderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    });
