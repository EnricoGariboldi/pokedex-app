describe('E2E Tests list', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    //cy.request("https://pokeapi.co/api/v2/pokemon?limit=500")
  })


  context("Checking correct initial situation", () => {
    it('Check that the service is working', () => {
      cy.request("https://pokeapi.co/api/v2/pokemon?limit=500")
      .its('status')
      .should('equal', 200);
    })

    it('Check that search bar is empty', () => {
      cy.getByExactMatch('search-bar').should('have.value', '')
    })

  })

  context("Checking pokemon existence", () => {

    it('Check Bulbasaur on load', () => {
      cy.contains('bulbasaur').click();
    })


    it('Search pikachu and visit its page, then go back to homepage', () => {
      cy.getByExactMatch('search-bar').type('pikachu')
      cy.getByExactMatch('search-bar').should('have.value', 'pikachu')
      cy.contains('pikachu').click();
      cy.url().should('include', '/PokemonSpecs')
      cy.getByExactMatch('back-to-home').click()
    })

    it('Checking random name', () => {
      cy.contains('raitu').click();
    })

    it('Search for magikarp, if it exists open his page, and then check if has splash and rattled as abilities', () => {
      cy.getByExactMatch('search-bar').type('magikarp')
      cy.getByExactMatch('search-bar').should('not.have.value', '')
      cy.contains('magikarp').click();
      cy.url().should('include', '/PokemonSpecs')
      cy.getByExactMatch('specs').contains('rattled')
      cy.getByExactMatch('specs').contains('splash')
    })
  })
})
