Cypress.Commands.add('login', (username) => {
    cy.visit('/')
    cy.get('.standard-form')
    .should('be.visible')
    .should('contain', 'Welcome to CodeLeap network!')
    cy.get('.standard-form input')
    .type(username)
    cy.get('.standard-form button')
    .click()
})

Cypress.Commands.add('createPost',() => {
    cy.get('.standard-form')
    .should('be.visible')
    .should('contain', "What's on your mind?")
    .should('contain', "Title")
    .should('contain', "Content")
    cy.get('.standard-form input')
    .type('Automation Testing for Marlene')
    cy.get('.standard-form textarea')
    .type('Automation testing for codeleap')
    cy.get('.btn-fill')
    .click()
    cy.get('[aria-label="Edit your post Automation Testing for Marlene"]')
})

Cypress.Commands.add('editPost',() => {
    cy.get('[aria-label="Edit your post Automation Testing for Marlene"]')
    .scrollIntoView()
    .click()
    cy.get('[value="Automation Testing for Marlene"]')
    .type(' Edit')
    cy.get('[name="content"]')
    .contains('Automation testing for codeleap')
    .type(' Edit')
    cy.get('[class="btn-fill btn-upper"]')
    .contains('Save')
    .click()
})

Cypress.Commands.add('deletePost',() => {
    cy.get('[aria-label="Delete your post Automation Testing for Marlene"]')
    .click()
})