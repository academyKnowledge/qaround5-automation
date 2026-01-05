/// <reference types="cypress"/>
describe('Http requests', () => {
    it('types of requests', () => {
        cy.request("https://jsonplaceholder.typicode.com/posts")
        cy.request("GET","https://jsonplaceholder.typicode.com/posts/10").then((resp)=>{
            cy.log(resp.body.id)
            cy.request("PUT",`https://jsonplaceholder.typicode.com/posts/${resp.body.id}`,{"title":"this is my new title"})
            cy.request("DELETE",`https://jsonplaceholder.typicode.com/posts/${resp.body.id}`)
        })
        cy.request("PUT","https://jsonplaceholder.typicode.com/posts/11",{"title":"this is my new title"})
        cy.request("POST","https://jsonplaceholder.typicode.com/posts",
            {'userId':10,'id':101,"title":"This is my post","body":"this is my post body"})
        cy.request("DELETE","https://jsonplaceholder.typicode.com/users/9")
    });

    it.only('testing api', () => {
        cy.request("https://jsonplaceholder.typicode.com/users/2").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.contain("Ervin")
            expect(response.body.email).to.eq("Shanna@melissa.tv")
            expect(response.body.address.street).to.eq("Victor Plains")
        })
    });



});