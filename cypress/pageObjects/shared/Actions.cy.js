class sharedActions {

    takeScreenshot(){
        cy.screenshot()
        return this
    }
}
export default sharedActions