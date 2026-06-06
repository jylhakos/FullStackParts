describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    //cy.visit('http://localhost:8081')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokemon', function() {
  it('pokemon page can be opened', function() {
    cy.visit('http://localhost:5000', { timeout: 45000 })
    cy.get('a[href*="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})