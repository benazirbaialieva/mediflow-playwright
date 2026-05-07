import { Page, Locator, expect} from '@playwright/test';

export class LoginPage{

    readonly page : Page;
    readonly email : Locator;
    readonly password : Locator;
    readonly signInButton : Locator;

    constructor(page : Page) {
        this.page = page;

        this.email = page.getByPlaceholder('doctor@mediflow.com');
        this.password = page.getByPlaceholder('Enter password');
        this.signInButton = page.getByRole('button', {name: 'Sign In'})
    }


    async login(email : string, password : string){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
    }


}