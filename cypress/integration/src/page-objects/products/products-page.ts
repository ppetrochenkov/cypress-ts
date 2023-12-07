import {BasePage} from "@page-objects/base-page";
import Chainable = Cypress.Chainable;
import {ProductSearch} from "@page-objects/products/product-search";

class ProductsPage extends BasePage {

    public searchComponent: ProductSearch = new ProductSearch();

    public elements = {
        allProductsLabel: () => cy.get("h2.title"),
        products: () => cy.get("div.product-image-wrapper"),
    }

    public getProduct(productName: string): Chainable {
        return this.elements.products().filter(`:contains("${productName}")`);
    }

    public viewProduct(productName: string): void {
        cy.log(`Clicking view product for ${productName}`);
        this.getProduct(productName).contains("View Product").click();
    }
}

export let productsPage: ProductsPage = new ProductsPage();