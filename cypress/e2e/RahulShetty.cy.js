///<reference types="cypress-iframe" />
describe("Other Demos", ()=>{
    it("More features", ()=>{
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Radio buttons
        cy.get('[for="radio1"] > .radioButton').check().should('be.checked');

        //Checkboxes
        cy.get('div#checkbox-example input').eq(1).check().should('be.checked');
        cy.get('div#checkbox-example input').eq(1).check().should('be.checked');
       

        //alisasing
        cy.get("h1").as("heading");
        cy.get("@heading").then((ele)=>{
            console.log("*************"+ele.text()+"*********************");
            
        })

        //alerts
       
        cy.get("input#alertbtn").click();
        //to verify text in alert box
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Hello');
         })

         // Handling multiple tabs
         cy.get("a#opentab").eq(0).then((ele)=>{
            expect(ele.attr('target')).to.equal("_blank");
         })
        //  cy.get("a#opentab").eq(0).invoke("removeAttr", "target").click();
         

         //iframe
         cy.frameLoaded('iframe[id="courses-iframe"]');
         cy.iframe().find('li[class="current"]:visible').should('be.visible').click()
        



    })
    
    
  
    
})