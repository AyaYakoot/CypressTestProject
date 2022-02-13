//<refrence types ="Cypress"/>
describe('Business Information', function() {

before( () => {cy.log('Run to the server locally');})
after( () => {cy.log('kill the server');})
beforeEach( () => {cy.log('Navigate to login page');})
    
    it('Test case 1', function() {        
        //cy.visit('cypress/htmlFile')
        //Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        cy.log('Website should java to the correct url');
        
    });
    it('Test case 2', function() {       
        
        cy.log('Fill the username and password');
        
    });
    
  
   
  });