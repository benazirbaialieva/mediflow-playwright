import { Page, Locator, test, expect } from '@playwright/test'

test ('practice alert', async ( { page } ) => {
/*
    1. go to https://rahulshettyacademy.com/AutomationPractice/
    2. provide name in alert input field
    3. click on Alert
    4. accept Alert
*/
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // await page.locator('#name').fill('Benazir')

    // page.on('dialog', async (dialog) => {
    //     await dialog.accept();
        
    // })
    // await page.locator('#alertbtn').click()


    /*
        5. enter name
        6. click confirm
        7. print message from the alert
        8. dismiss the alert

    */

    

    page.on('dialog', async (dialog) =>{
        console.log(dialog.message());
        expect(dialog.type()).toBe('confirm');
        await dialog.dismiss();
    })
    const nameInput = page.getByPlaceholder("Enter Your Name");
    nameInput.fill("Elima");

    const confirmButton = page.locator("#confirmbtn");
    await confirmButton.click();

}
)


test ('practice one dialog', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByText('Click for JS Alert').click();
    let result = await page.locator('#result').textContent()!;
    console.log(result);

    await page.getByText('Click for JS Confirm').click();
    result = await page.locator('#result').textContent()!;
    console.log(result);

    await page.getByText('Click for JS Prompt').click();
    result = await page.locator('#result').textContent()!;
    console.log(result);

}
)