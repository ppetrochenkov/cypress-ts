import {User} from "@models/user";

export interface UserSignUp extends User {
    name: string,
    title: Gender,
    dateOfBirth: Date,
    signUpNewsLetter: boolean,
    addressInfo: {
        firstName: string,
        lastName: string,
        company: string,
        address: string,
        country: string,
        state: string,
        city: string,
        zipCode: string,
        mobileNumber: string
    }
}

export enum Gender {
    MALE = 'Mr',
    FEMALE = 'Mrs'
}