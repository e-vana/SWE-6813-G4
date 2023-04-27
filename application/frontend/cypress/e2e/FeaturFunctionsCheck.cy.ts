describe('Get to home page', () => {
  before(() => {
      cy.visit('https://hammerhead-app-adu3m.ondigitalocean.app') 
    })

    beforeEach(() => {
           //Enter email and password.  
      cy.get('.MuiButtonBase-root').contains('Login')
      .click()
      cy.url().should('include', '/login')

      cy.get('.MuiFormControl-root').eq(0).contains("Email Address")

      cy.get('.MuiFormControl-root').eq(0).type('faketest@email.com')

      cy.get('.MuiFormControl-root').eq(1).type('testuser123')

      //submit form
    cy.get('.MuiButtonBase-root').click()
    cy.url().should('include', '/home')  
               
    })
      
      

    
     
     it ('select game', () => {
    //select and a game  
          
       
      }) 
})

  
