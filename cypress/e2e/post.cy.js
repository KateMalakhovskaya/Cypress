describe('First Test', 
{
    "viewportWidth": 1280,
    "viewportHeight": 720,
},

() => {
  
    it('Login screen testing', () => {
      cy.visit('https://www.post.at/en')
      cy.contains('Yes, accept cookies').click()
      cy.contains('Sign in / sign up').click()
  
      // Should be on a new URL which
      // includes signup text
      cy.url().should('include', 'signup_signin')
  
      // Get an input, type into it
      cy.get('input[type="email"]').type('fake@email.com')
  
      //  Verify that the value has been updated
      cy.get('input[type="email"]').should('have.value', 'fake@email.com')
    })
  })