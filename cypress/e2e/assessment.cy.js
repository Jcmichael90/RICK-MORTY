let el

describe('RICK AND MORTY', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.get('h1').should('contain', 'Favorite Characters')
    cy.fixture('example').then((sel)=>{
      el=sel
  })
})

it('Verify user is able to search character by first name',()=>{
  cy.get(el.characterName).type(el.firstName)
  cy.get(el.container).should('be.visible')
  
 
  

})

it('Verify user is able to search character by last name',()=>{
  cy.get(el.characterName).type(el.lastName)
  cy.get(el.container).should('be.visible')

})

it('Verify user cannot get result when search with an invalid character name',()=>{
  cy.get(el.characterName).type(el.invalidName)

})

it('Verify user is able to filter character by location',()=>{
  cy.get(el.location).select('Citadel of Ricks')

})

it('Verify character is moved to favorites when clicked on it',()=>{
  cy.get(el.characterName).type(el.firstName)
  cy.get(el.beth).click()
  cy.get(el.favorites).click()

})

it('Verify character on the favorite list is no more in the main list after added to favorites',()=>{
  cy.get(el.characterName).type(el.firstName)
  cy.get(el.beth).click()
  cy.get(el.favorites).click()
  cy.get(el.list).click()

})

it('Verify user is able to add multiple characters to favorites',()=>{
  cy.get(el.characterName).type(el.firstName)
  cy.get(el.beth).click()
  cy.get(el.sanchez).click()
  cy.get(el.mytholog).click()
  cy.get(el.smith).click()
  cy.get(el.favorites).click()
  cy.get(el.container).should('be.visible')


})


})