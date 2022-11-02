// Given a user visits https://example.cypress.io
// When they click the link labeled type
// And they type "fake@email.com" into the .action-email input
// Then the URL should include /commands/actions
// And the .action-email input has "fake@email.com" as its value


describe('Probar calculadora', () => {
  beforeEach(()=>{
    cy.visit('https://www.google.com/')
  })
  it('Probar funcionalida de suma', () => {
    let searchInput =' body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'
    cy.contains('input','Buscar con Google')
    cy.get(searchInput).type('Calculadora')
    cy.get('form').submit()
    cy.get('#rso > div:nth-child(1) > div > div > div.card-section > div > div > div.SKWP2e > div > table.ElumCf > tbody > tr:nth-child(4) > td:nth-child(1) > div > div').click()
    cy.get('#rso > div:nth-child(1) > div > div > div.card-section > div > div > div.SKWP2e > div > table.ElumCf > tbody > tr:nth-child(5) > td:nth-child(4) > div > div').click()
    cy.get('#rso > div:nth-child(1) > div > div > div.card-section > div > div > div.SKWP2e > div > table.ElumCf > tbody > tr:nth-child(4) > td:nth-child(3) > div > div').click()
    cy.get('#rso > div:nth-child(1) > div > div > div.card-section > div > div > div.SKWP2e > div > table.ElumCf > tbody > tr:nth-child(5) > td:nth-child(3) > div > div').click()

      // cy.title().should('include', 'Kitchen Sink') //the title of the website must include the phrase 'Kitchen Sink'
      // cy.pause() // this tool is for debug, you can do a pause in the execution and start it again later
      // cy.contains('type').click()
      // cy.url().should('include', '/commands/actions') //the url must include the extension '/commands/actions'
      // cy.get('.action-email')
      // .type('fake@email.com') //to write in a cell
      // .should('have.value', 'fake@email.com') //to assert what i recently type in the cell
  })
})
