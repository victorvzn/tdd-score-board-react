/// <reference types="cypress" />

describe('template spec', () => {
  it('Score Board component should work as expected', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Score Board')

    cy.get('input[name="homeTeamName"]').type('Peru')
    cy.get('input[name="homeTeamScore"]').clear().type("10")
    cy.get('input[name="awayTeamName"]').type('Canada')
    cy.get('input[name="awayTeamScore"]').clear().type("2")
    cy.get('form').contains('Finish Game').click()

    cy.get('input[name="homeTeamName"]').type('Uruguay')
    cy.get('input[name="homeTeamScore"]').clear().type("6")
    cy.get('input[name="awayTeamName"]').type('Italy')
    cy.get('input[name="awayTeamScore"]').clear().type("6")
    cy.get('form').contains('Finish Game').click()

    cy.get('input[name="homeTeamName"]').type('Argentina')
    cy.get('input[name="homeTeamScore"]').clear().type("2")
    cy.get('input[name="awayTeamName"]').type('Spain')
    cy.get('input[name="awayTeamScore"]').clear().type("3")
    cy.get('form').contains('Finish Game').click()

    cy.contains('Uruguay')
      .parent('tr')
      .within(() => {
        cy.get('button').click()
        cy.get('input[name="homeTeamScore"]').clear().type("55")
        cy.get('input[name="awayTeamScore"]').clear().type("77")
        cy.get('button').click()
      })
    
    cy.contains('Uruguay 55 - Italy 77')

    // Success E2E
  })
})