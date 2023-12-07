import {BasePage} from "@page-objects/base-page";
import {UserSignUp} from "@models/user-sign-up";
import {DateUtils} from "@utils/date-utils";

class InitialAccountSetupPage extends BasePage {

    public elements = {
        enterAccountInformationLabel: () => cy.xpath("//*[text()='Enter Account Information']"),
        titleRadios: () => cy.byDataQa("title"),
        passwordInput: () => cy.byDataQa("password"),
        daysDropdown: () => cy.byDataQa("days"),
        monthDropdown: () => cy.byDataQa("months"),
        yearDropdown: () => cy.byDataQa("years"),
        signUpNewsLetterCheckbox: () => cy.xpath("//input[@id='newsletter']"),
        firstNameInput: () => cy.byDataQa("first_name"),
        lastNameInput: () => cy.byDataQa("last_name"),
        companyInput: () => cy.byDataQa("company"),
        addressInput: () => cy.byDataQa("address"),
        countryDropdown: () => cy.byDataQa("country"),
        stateInput: () => cy.byDataQa("state"),
        cityInput: () => cy.byDataQa("city"),
        zipCodeInput: () => cy.byDataQa("zipcode"),
        mobileNumberInput: () => cy.byDataQa("mobile_number"),
        createAccountButton: () => cy.byDataQa("create-account"),
    }

    public fillAccountInformation(testData: UserSignUp): void {
        cy.log(`Starting account creation`);
        this.elements.titleRadios().find("input").containsValue(testData.title).click();
        this.elements.passwordInput().type(testData.password);
        this.elements.daysDropdown().select(DateUtils.getDay(testData.dateOfBirth));
        this.elements.monthDropdown().select(DateUtils.getMonth(testData.dateOfBirth));
        this.elements.yearDropdown().select(DateUtils.getYear(testData.dateOfBirth));

        if(testData.signUpNewsLetter) {
            this.elements.signUpNewsLetterCheckbox().check();
        }

        this.elements.firstNameInput().type(testData.addressInfo.firstName);
        this.elements.lastNameInput().type(testData.addressInfo.lastName);
        this.elements.companyInput().type(testData.addressInfo.company);
        this.elements.addressInput().type(testData.addressInfo.address);
        this.elements.countryDropdown().select(testData.addressInfo.country);
        this.elements.stateInput().type(testData.addressInfo.state);
        this.elements.cityInput().type(testData.addressInfo.city);
        this.elements.zipCodeInput().type(testData.addressInfo.zipCode);
        this.elements.mobileNumberInput().type(testData.addressInfo.mobileNumber);

        this.elements.createAccountButton().click();
        cy.log(`Account successfully created`);
    }
}

export let initialAccountSetupPage: InitialAccountSetupPage = new InitialAccountSetupPage();