describe('Lista test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  context("Checking pokemon existence", () => {

  it('Check Bulbasaur on load', () => {
  cy.contains('bulbasaur').click();
  })

  it('Checking random name', () => {

    cy.contains('raitu').click();
    })


    it('Search pikachu and visit its page, then go back to homepage', () => {
      cy.getByExactMatch('search-bar').type('pikachu')
      cy.getByExactMatch('search-bar').should('have.value','pikachu')
      cy.contains('pikachu').click();
      cy.url().should('include', '/PokemonSpecs')
      cy.getByExactMatch('back-to-home').click()
      })

})


/*
  context("Categoria 1 test", () => {

      it('clicking "type" navigates to a new url', () => {
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@email.com')

    cy.get('.action-email').should('have.value', 'fake@email.com')
  })

  it('Test due', () => {

    cy.contains('prova').click()
  
  })
  })
*/
})
