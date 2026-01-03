class sharedAssertions{
    checkCurrentURLIsEqual(url){
        cy.url().should('eq',url)
        return this
    }
}
export default sharedAssertions