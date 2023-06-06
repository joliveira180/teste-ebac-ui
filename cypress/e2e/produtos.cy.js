/// <reference types='cypress' />

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() -- pega o primeiro item da lista
            //.last() -- pega o último item da lista
            //.eq(3) -- pega um item de uma posição específica (o índice começa em 0)
            .contains('Ariel Roll Sleeve Sweatshirt') // pega um item com um nome específico desde de que o nome seja clicável
            .click()
    });

    it.only('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 4

        cy.get('[class="product-block grid"]')
            .contains('Atlas Fitness Tank') 
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    });
});