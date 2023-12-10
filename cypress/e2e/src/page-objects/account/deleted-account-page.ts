import {BasePage} from "@page-objects/base-page";

class DeletedAccountPage extends BasePage {

    public elements = {
        accountDeletedLabel: () => cy.byDataQa("account-deleted"),
    }
}

export let deletedAccountPage: DeletedAccountPage = new DeletedAccountPage();