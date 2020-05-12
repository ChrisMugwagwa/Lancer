describe('First Test', ()=>{
    
    it('Does something',()=>{
        expect(true).to.equal(true)

        cy.visit('/')
        //cy.pause() // lets us go through the test step by step and manually procceed through it
        cy.contains('Login').click().contains('Logout')
        cy.contains('Memoisation').click()
        cy.url().should('include','/memo')
        cy.contains('Logged In Successfully:')
        
        cy.exec('echo "ran a command successfully"')
        cy.request('GET', '/register')
        //expect(cy.contains('Logged In Successfully:')).to.equal(true)

    /*
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    */
        
    })

    

})