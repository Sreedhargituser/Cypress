describe('template spec',() => {
  it('passes', () => {
    
    cy.visit('https://www.leafground.com/dashboard.xhtml')

    cy.get('.pi-server').click();

    cy.get('li[id="menuform:m_input"]').click();

    //entering text in to a text field
    cy.get('input[id="j_idt88:name"]').type("Sreedhar").should("have.value", "Sreedhar");

    //verifying text 
    cy.get('form[id="j_idt88"] h5:nth-child(2)').then((element)=>{
      let elementText = element.text();
      assert.equal(elementText, "Type your name", "Text over input");

    })

    //dealing with multiple elements and only visible elements
    cy.get('#j_idt88 h5').each((ele, ind, list)=>{
       console.log(ele.text());
       console.log("the indexis***********", ind);
    })
  })
})