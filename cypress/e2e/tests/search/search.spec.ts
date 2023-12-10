import {homePage} from "@page-objects/home/home-page";
import {productsPage} from "@page-objects/products/products-page";
import {productDetailPage} from "@page-objects/products/product-detail-page";

describe('Search', function () {


    beforeEach(function () {
        homePage.open();
        homePage.mainMenu.navigateToProducts();
    });

    it('Search Product', function () {
        productsPage.elements.allProductsLabel().should("contain.text", "All Products");
        let searchValue: string = "Men Tshirt";
        productsPage.searchComponent.search(searchValue);
        productsPage.elements.allProductsLabel().should("contain.text", "Searched Products");
        productsPage.getProduct(searchValue)
            .should("be.visible");
    });

    it('Verify All Products and product detail page', function () {
        let searchValue: string = "Men Tshirt";
        productsPage.viewProduct(searchValue);
        productDetailPage.elements.productNameLabel()
            .should("have.text", searchValue);
        productDetailPage.elements.categoryLabel()
            .should("contain.text", "Men > Tshirts");
    });
});