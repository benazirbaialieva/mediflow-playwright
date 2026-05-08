import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test ( 'login successfully',
    async ({ page }) => {
        await page.goto('https://codewise-clinic-portal.lovable.app/login');

        const loginPage = new LoginPage(page);
        await loginPage.login('dr.chen@mediflow.com', 'Test@1234');
        
        await expect(page).toHaveURL('https://codewise-clinic-portal.lovable.app/');
    }
)


test ( 'invalid password',
    async ( {page} ) => {
        await page.goto('https://codewise-clinic-portal.lovable.app/login');

        const loginPage = new LoginPage(page);
        await loginPage.login('dr.chen@mediflow.com', 'invalid@1234');

        // verify Invalid email or password banner
        await expect(loginPage.loginError).toBeVisible();

    }
)