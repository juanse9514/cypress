// Given a user visits https://example.cypress.io
// When they click the link labeled type
// And they type "fake@email.com" into the .action-email input
// Then the URL should include /commands/actions
// And the .action-email input has "fake@email.com" as its value


describe('Cookie clicker', () => {
  beforeEach(()=>{
    cy.visit('https://www.google.com/')
  })
  it('Search cookie clicker game and click on cookie', () => {
    let clicks = 100;
    let searchInput = 'body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'

    cy.contains('input','Buscar con Google')
    cy.get(searchInput).type('cookie clicker')
    cy.get('form').submit()
    cy.contains('a','Classic').click()

    
      // cy.title().should('include', 'Kitchen Sink') //the title of the website must include the phrase 'Kitchen Sink'
      // cy.pause() // this tool is for debug, you can do a pause in the execution and start it again later
      // cy.contains('type').click()
      // cy.url().should('include', '/commands/actions') //the url must include the extension '/commands/actions'
      // cy.get('.action-email')
      // .type('fake@email.com') //to write in a cell
      // .should('have.value', 'fake@email.com') //to assert what i recently type in the cell
  })

})
