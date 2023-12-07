import {BasePage} from "@page-objects/base-page";

class ProductDetailPage extends BasePage {

    public elements = {
        productNameLabel: () => cy.get("div.product-information h2"),
        categoryLabel: () => cy.get("div.product-information").contains("Category"),
    }
}

export let productDetailPage: ProductDetailPage = new ProductDetailPage();