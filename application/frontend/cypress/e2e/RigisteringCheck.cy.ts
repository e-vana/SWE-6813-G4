describe('REGISTER E2E', () => { 
  beforeEach(() => {
    cy.visit('https://hammerhead-app-adu3m.ondigitalocean.app/') })

  it('Text and features are present on home page', () => {
    cy.get('.css-69i1ev').contains('MatchMate')
    cy.get('.MuiTypography-h2').contains(
      "Find your squad for any game you're playing" )
    
      cy.get('.MuiTypography-h5').contains("How it works" )
    }) 
 it('Clicks GET STARTED Button and Goes to Registar page', () => {    
    //click Get started button
    cy.get('.css-elxzps >.MuiButtonBase-root')
        .click()
      //make sure page is register page
      cy.url().should('include', '/register')
      cy.contains("Register")
      .should('exist')


    })

    it(' Rigister valid email and Password', () => {
            
      cy.get('.css-elxzps >.MuiButtonBase-root')
        .click()
      cy.url().should('include', '/register')
      cy.contains("Register").should('exist')

      //Get email input and type email
      cy.get('.MuiFormControl-root').eq(0)
      .contains("Email Address")

      cy.get('.MuiFormControl-root').eq(0).type('faketestemail.com')

      cy.get('.MuiFormControl-root').eq(1).type('testuser123')
      cy.get('.MuiFormControl-root').eq(2).type('testuser123')

      //submit form
      cy.get('.MuiButtonBase-root').click()
      cy.url().should('exist')
      
         

    })
    it(' Login Page', () => {
       
      cy.get('.MuiButtonBase-root').contains('Login')
        .click()
        cy.url().should('include', '/login')
            
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
      cy.url().should('exist')    })
      


})