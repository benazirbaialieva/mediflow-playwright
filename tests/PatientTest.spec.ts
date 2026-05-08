import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { PatientPage } from '../pages/PatientPage';
import { fa, faker } from '@faker-js/faker';


test ( 'create new patient successfully', async ( {page} ) => {
    await page.goto('/login');
    
    const loginPage = new LoginPage(page);
    console.log(process.env.TEST_USER_EMAIL);
    console.log(process.env.TEST_USER_PASSWORD);
    await loginPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);

    await page.goto('/patients');

    const patientPage = new PatientPage(page);
    await patientPage.createPatient(faker.person.firstName(), faker.person.lastName(), faker.date.past().toISOString().split('T')[0] ,
        'Male', faker.phone.number(), faker.internet.email(), faker.location.streetAddress());

}
)