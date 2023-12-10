import {homePage} from "@page-objects/home/home-page";
import {loginSignupPage} from "@page-objects/account/login-signup-page";
import {User} from "@models/user";

describe('Login', function () {

    beforeEach(function () {
        homePage.open();
        homePage.mainMenu.navigateToLoginSignupPage();
    });


    it('Login User with correct email and password', function () {
        let validUser: User = Cypress.env("existingUser");
        loginSignupPage.login(validUser);
        homePage.elements.loggedAsLabel().should("contain.text", validUser.name);
    });

    it('Login User with incorrect email and password', function () {
        let invalidUser: User = Cypress.env("existingUser");
        invalidUser.email = `mail112213123@mail.com`;
        loginSignupPage.login(invalidUser);
        loginSignupPage.elements.loginError()
            .should("be.visible")
            .and("contain.text", "Your email or password is incorrect!");
    });

    it('Failed test', function () {
        let invalidUser: User = Cypress.env("existingUser");
        invalidUser.email = `mail112213123@mail.com`;
        loginSignupPage.login(invalidUser);
        homePage.elements.loggedAsLabel().should("contain.text", invalidUser.name);
    });
});