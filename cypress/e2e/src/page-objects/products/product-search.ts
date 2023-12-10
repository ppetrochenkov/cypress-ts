export class ProductSearch {

    public elements = {
        searchInput: () => cy.get("input#search_product"),
        searchSubmitButton: () => cy.get("button#submit_search"),
    }

    public search(productName: string): void {
        cy.log(`Searching product ${productName}`);
        this.elements.searchInput().type(productName);
        this.elements.searchSubmitButton().click();
    }
}