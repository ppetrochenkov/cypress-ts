export class MainMenuComponent {

    public elements = {
        homePageLink: () => cy.xpath("//a[@href='/' and .//text()=' Home']"),
        signUpLoginButton: () => cy.xpath("//a[@href='/login']"),
        productsLink: () => cy.xpath("//a[@href='/products']"),
        logoutLink: () => cy.xpath("//a[@href='/logout']"),
    }

    public navigateToHomePage(): void {
        cy.log(`Navigating to Home page`);
        this.elements.homePageLink().click();
    }

    public navigateToLoginSignupPage(): void {
        cy.log(`Navigating to Login / Sign-up page`);
        this.elements.signUpLoginButton().click();
    }

    public navigateToProducts(): void {
        cy.log(`Navigating to Products page`);
        this.elements.productsLink().click();
    }

    public logout(): void {
        cy.log(`Logging out`);
        this.elements.logoutLink().click();
    }
}