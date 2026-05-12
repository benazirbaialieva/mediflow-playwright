import { test, Page, Locator, expect } from '@playwright/test'

test ('practice checkboxes and radiobuttons', async ( { page } ) => {

    /*
        1. navigate to https://rahulshettyacademy.com/AutomationPractice/
        2. select all checkboxes
        3. select radiobutton #2
    */

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#checkBoxOption1').check();
    await page.locator('#checkBoxOption2').check();
    await page.locator('#checkBoxOption3').check();

    const radio2 = page.locator('input[value=radio2]');
    await radio2.check();
    await expect(radio2).toBeChecked();

}
)


test ('practice drag and drop', async ({ page }) => {
    /*
        1. go to https://practice.expandtesting.com/drag-and-drop
        2. drag A to B's place
    */
    await page.goto('https://practice.expandtesting.com/drag-and-drop');

    const dropBoxA = page.locator('#column-a');
    const dropBoxB = page.locator('#column-b');

    await dropBoxA.dragTo(dropBoxB);

    /*
        3. go to https://practice.expandtesting.com/drag-and-drop-circles
        4. drag and drop red, green and blue circles
    */

            await page.goto('https://practice.expandtesting.com/drag-and-drop-circles');

    const redCircle = page.locator('.red');
    const greenCircle = page.locator('.green');
    const blueCircle = page.locator('.blue');

    const target = page.locator('#target');
   

    await redCircle.dragTo(target);
    await greenCircle.dragTo(target);
    await blueCircle.dragTo(target);
}
)


test ('file upload and download', async ({ page }) =>{
/*  
    1. go to https://practice.expandtesting.com/upload
    2. upload some file
    3. go to https://practice.expandtesting.com/download
    4. donwload the file
*/

    await page.goto('https://practice.expandtesting.com/upload');
    await page.getByTestId('file-input').setInputFiles('package.json');
    console.log();
    await page.getByTestId('file-input').setInputFiles([]); // remove uploaded file
    console.log();

    await page.goto('https://practice.expandtesting.com/download');
    await page.getByTestId('1778593863734_small.txt').click();
}
)


test ('select from dropdown', async ({ page }) =>{
/*
    1. go to https://rahulshettyacademy.com/AutomationPractice/
    2. select option2 from dropdown
*/
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#dropdown-class-example').selectOption('option2')
}
)


test ('hover over', async ({ page }) => {
/*
    1. https://rahulshettyacademy.com/AutomationPractice/
    2. hover over "Mouse Hover" blue button
    3. click on Reload
*/

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#mousehover').hover();
    await page.getByRole('link', { name: 'Reload' }).click();
    console.log();
}
)


test ('login practice press sequentially', async ({ page }) => {
    /*
    1. go to https://rahulshettyacademy.com/loginpagePractise/
    2. fill out the form and sign in
    */


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    await page.locator('#username').pressSequentially('rahulshettyacademy');

    await page.locator('#password').pressSequentially('Learning@830$3mK2');

    await page.getByLabel('Admin').check();

    await page.locator('select.form-control').selectOption('consult');

    await page.locator('#terms').check();

    await page.locator('#signInBtn').click();

    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');


}
)