describe('LOGIN IN TO APP', () => { 
  beforeEach(() => {
    cy.visit('https://hammerhead-app-adu3m.ondigitalocean.app') 
  
        it(' Login Page', () => {
       
      cy.get('.MuiButtonBase-root').contains('Login')
        .click()
        cy.url().should('include', '/login')
            
        })

      })

     it ('Enter user Email and Password and Click Login', () => {
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
  
  
  
  })