// Given a user visits https://example.cypress.io
// When they click the link labeled type
// And they type "fake@email.com" into the .action-email input
// Then the URL should include /commands/actions
// And the .action-email input has "fake@email.com" as its value

describe('My First successfully Test', () => {
    it('Makes different types of tests', () => {
        cy.visit('https://example.cypress.io')
        cy.title().should('include', 'Kitchen Sink') //the title of the website must include the phrase 'Kitchen Sink'
        cy.pause() // this tool is for debug, you can do a pause in the execution and start it again later
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions') //the url must include the extension '/commands/actions'
        cy.get('.action-email')
        .type('fake@email.com') //to write in a cell
        .should('have.value', 'fake@email.com') //to assert what i recently type in the cell
    })
  })

  describe('My First failling Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })