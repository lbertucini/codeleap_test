/// <reference types="cypress" />

describe('Crud testing for CodeLeap', () => {
  beforeEach(() => {
    cy.login('Marlene')
  })

  it('Should create a post', () => {
    cy.createPost()
  })

  it('Should edit a post', () => {
    cy.editPost()
  })

  it('Should delete a post', () => {
    cy.deletePost()
  })

})