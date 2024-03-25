Cypress.Commands.add('getByExactMatch', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
  })

  Cypress.Commands.add('getAllContainingSelector', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
  })