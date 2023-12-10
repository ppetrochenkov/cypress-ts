/// <reference types='cypress-xpath' />
import {MainMenuComponent} from "@page-objects/main-menu-component";

export abstract class BasePage  {

    public mainMenu: MainMenuComponent = new MainMenuComponent();


}