import {BasePage} from "@page-objects/base-page";

class AccountCreatedPage extends BasePage {

    public elements = {
        accountCreatedLabel: () => cy.byDataQa("account-created"),
        continueButton: () => cy.byDataQa("continue-button"),
    }
}

export let accountCreatedPage: AccountCreatedPage = new AccountCreatedPage();