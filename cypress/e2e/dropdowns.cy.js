describe("Other actions", {defaultCommandTimeout: 5000},()=>{
    it("leafground examples",{defaultCommandTimeout: 5000}, ()=>{
        cy.visit('https://www.leafground.com/dashboard.xhtml')

        cy.get('.pi-server').click();
        

        // Drop downs

        //static dropdown
        cy.get('#menuform', {timeout: 10000}).contains('Dropdown').click();
        cy.get('select[class="ui-selectonemenu"]').select(3).should('have.value', "Puppeteer");
        
        //dynamic dropdown
        cy.get('div[class="ui-autocomplete ui-autocomplete-multiple"] input').type('rea');
        cy.get('ul.ui-autocomplete-list li').each((ele, ind, list)=>{
            cy.log(ele.text());
            if(ele.text() == 'ReactJs'){
                ele.click();
            }
        })

       



    })
})