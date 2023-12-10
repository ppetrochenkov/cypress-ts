import {BasePage} from "@page-objects/base-page";

class HomePage extends BasePage {

    public elements = {
        loggedAsLabel: () => cy.xpath("//a[.//@class='fa fa-user']//b"),
        deleteAccountButton: () => cy.xpath("//a[contains(@href, 'delete')]"),
    }

    public open(): void {
        cy.log(`Opening URL: ${Cypress.config().baseUrl}`);
        cy.visit("/");
    }
}

export let homePage: HomePage = new HomePage();