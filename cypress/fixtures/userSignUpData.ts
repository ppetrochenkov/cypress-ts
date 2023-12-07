import {UserSignUp, Gender} from "../integration/src/models/user-sign-up";

export let userSignUpData: UserSignUp = {
    name: 'TestUser',
    email: `test_user_temp${Math.floor(Math.random() * 90000) + 10000}@yopmail.com`,
    title: Gender.MALE,
    password: "qwerty123",
    dateOfBirth: new Date("01.01.1990"),
    signUpNewsLetter: true,
    addressInfo: {
        firstName: "Test",
        lastName: "User",
        company: "TestCompany",
        address: "Address1",
        country: "India",
        state: "Test",
        city: "Test",
        zipCode: "123123",
        mobileNumber: "+762241516"
    }
}