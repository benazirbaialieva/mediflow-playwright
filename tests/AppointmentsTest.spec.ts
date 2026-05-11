import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AppointmentsPage } from '../pages/AppointmentsPage';

test ('create appontment', async ({ page }) => {
    await page.goto('/login');

    const loginPage = new LoginPage(page);

    await loginPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);
    await page.goto('/appointments');

    const appontmentsPage = new AppointmentsPage(page);
    await appontmentsPage.scheduleAppointment();

} )