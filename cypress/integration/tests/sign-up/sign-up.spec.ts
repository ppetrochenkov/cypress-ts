import {accountCreatedPage} from "@page-objects/account/account-created-page";
import {initialAccountSetupPage} from "@page-objects/account/initial-account-setup-page";
import {deletedAccountPage} from "@page-objects/account/deleted-account-page";
import {User} from "@models/user";
import {userSignUpData} from "@fixtures/userSignUpData";
import {homePage} from "@page-objects/home/home-page";
import {loginSignupPage} from "@page-objects/account/login-signup-page";

describe('Sign-up', function () {

    beforeEach(function () {
        homePage.open();
        homePage.mainMenu.navigateToLoginSignupPage();
    });


    it('Register User', function () {
        loginSignupPage.elements.newUserSignUpLabel().should("be.visible");
        loginSignupPage.signUp(userSignUpData);

        initialAccountSetupPage.elements.enterAccountInformationLabel().should("be.visible");
        initialAccountSetupPage.fillAccountInformation(userSignUpData);

        accountCreatedPage.elements.accountCreatedLabel().should("be.visible");
        accountCreatedPage.elements.continueButton().click();

        homePage.elements.loggedAsLabel().should("contain.text", userSignUpData.addressInfo.firstName);

        homePage.elements.deleteAccountButton().click();
        deletedAccountPage.elements.accountDeletedLabel().should("be.visible");
    });

    it('Register User with existing email', function () {
        let existingUser: User = Cypress.env("existingUser");
        loginSignupPage.signUp(existingUser);

        loginSignupPage.elements.signUpError()
            .should("be.visible")
            .and("contain.text", "Email Address already exist!");
    });

    it('Failed test', function () {
        let existingUser: User = Cypress.env("existingUser");
        loginSignupPage.signUp(existingUser);
        initialAccountSetupPage.elements.enterAccountInformationLabel().should("be.visible");
    });
});