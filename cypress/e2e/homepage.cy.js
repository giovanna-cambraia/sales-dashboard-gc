describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('giovannacambraia8@gmail.com', 'Giovanna1!')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () => {
    cy.get('#total-sales').should('be.visible')
    
  })

  it('should display month goals', () => {
    cy.get('#month-goal').should('be.visible')
    
  })

  it('should display total leads', () => {
    cy.get('#total-leads').should('be.visible')
    
  })

  it('should display month sales chart', () => {
    cy.get('#month-sales-chart').should('be.visible')
    
  })

  it('should display sales stars', () => {
    cy.get('#sales-stars').should('be.visible')
    
  })

  it('should display news', () => {
    cy.get('#news').should('be.visible')
    
  })

  it('should display year sales chart', () => {
    cy.get('#news').should('be.visible')
    
  })

})


