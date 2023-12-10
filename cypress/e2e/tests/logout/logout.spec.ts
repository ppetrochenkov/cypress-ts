import {homePage} from "@page-objects/home/home-page";
import {User} from "@models/user";
import {loginSignupPage} from "@page-objects/account/login-signup-page";

describe('Logout', function () {


    it('Logout User', function () {
        homePage.open();
        homePage.mainMenu.navigateToLoginSignupPage();
        let validUser: User = Cypress.env("existingUser");
        loginSignupPage.login(validUser);
        homePage.mainMenu.logout();

        loginSignupPage.elements.loginEmailInput().should("be.visible");
        loginSignupPage.elements.loginPasswordInput().should("be.visible");
    });
});