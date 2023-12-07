import {BasePage} from "@page-objects/base-page";
import {User} from "@models/user";

class LoginSignupPage extends BasePage {

    public elements = {
        loginEmailInput: () => cy.byDataQa("login-email"),
        loginPasswordInput: () => cy.byDataQa("login-password"),
        loginButton: () => cy.byDataQa("login-button"),
        loginError: () => cy.xpath("//form[@action='/login']/p"),

        newUserSignUpLabel: () => cy.xpath("//h2[text()='New User Signup!']"),
        signUpNameInput: () => cy.byDataQa("signup-name"),
        signUpEmailInput: () => cy.byDataQa("signup-email"),
        signUpButton: () => cy.byDataQa("signup-button"),
        signUpError: () => cy.xpath("//form[@action='/signup']/p"),
    }

    public login(user: User): void {
        cy.log(`Logging with user ${user.email} / ${user.password}`);
        this.elements.loginEmailInput().type(user.email);
        this.elements.loginPasswordInput().type(user.password);
        this.elements.loginButton().click();
    }

    public signUp(user: User): void {
        cy.log(`Signing-up with name: ${user.name}, email: ${user.email}`);
        this.elements.signUpNameInput().type(user.name);
        this.elements.signUpEmailInput().type(user.email);
        this.elements.signUpButton().click();
    }
}

export let loginSignupPage: LoginSignupPage = new LoginSignupPage();