/// <reference types="Cypress" />
it('Login_IncorrectUserNameAndPassord', function() {
  
});

/* describe('Login Screen', function() {
   
      it('Login_IncorrectUserNameAndPassord', function() {
        cy.visit('https://dashboard.cypress.io/login/email')
        cy.get('#email').type('test@test.com');
        cy.get('#password').type('test');
      //  cy.get('.btn btn-primary').click(); // Get selector by class
       // cy.get('[class="btn btn-primary"]').click(); // Get selector by class
        cy.get('[type="submit"]').click();
      });
    
  }); */

/// Coterie
  describe('Business Information', function() {
   
    it('BusinessInformation', function() {
      cy.visit('https://quote-test.coterieinsurance.com/getquote/businessinfo')
      cy.get('[data-cy="industry-input"]').type('a');    
      cy.get('ul li h3').contains('Insurance agencies').click();
      cy.get('[data-cy="submit"]').click();
      cy.get('[data-cy="business-name"]').type('Bussiness Name');
      cy.get('[data-cy="biz-age-middle"]').click();
     // cy.get('[data-cy="multi-button-10-or-fewer"]').click(); //Windows Mode
     // cy.get('[button]').contains(2).click(); //Windows Mode
      cy.get('#numEmployeesInput').type(7); // Mobile Mode
      cy.get('.css-1hwfws3').click();
      cy.get('div').contains('AL').click();
      cy.get('[data-cy="zip-input"]').type('123456');
      cy.get('[data-cy="yes-previous-loss"]').click();
      cy.get('[data-cy="claim-amount"]').type('10');
      cy.get('[data-cy="claim-description-input"]').type('Description');
      cy.get('[data-cy="save-claim-button"]').click();
      cy.get('[data-cy="claim-amount"]').type('10');
      cy.get('[data-cy="claim-description-input"]').type('claim description');
      cy.get('[data-cy="submit"]').click();

    });
  
});

describe('Business Information', function() {

  it('Test case 1', function() {
      cy.log('Test Case 1');
      
  })
  

 
});