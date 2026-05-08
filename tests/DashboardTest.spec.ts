import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test ( 'verify all navigation tabs', async ( {page} ) => {
    await page.goto('https://codewise-clinic-portal.lovable.app/login');

    const loginPage = new LoginPage(page);
    await loginPage.login('dr.chen@mediflow.com', 'Test@1234');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyNavigatation(dashboardPage.appointments, '/appointments');
    await dashboardPage.verifyNavigatation(dashboardPage.mySchedule, '/my-schedule');
    await dashboardPage.verifyNavigatation(dashboardPage.patients, '/patients');
    await dashboardPage.verifyNavigatation(dashboardPage.prescriptions, '/prescriptions');
        
}
)