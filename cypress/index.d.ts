/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        byDataQa<E extends Node = HTMLElement>(selector: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<E>>,
        containsValue<E extends Node = HTMLElement>(value: string): Chainable<JQuery<E>>,
    }
}