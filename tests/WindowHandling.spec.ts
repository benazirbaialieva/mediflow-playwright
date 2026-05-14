import { test, Page, Locator, expect } from '@playwright/test'

test('test multiple tabs', async ({ page, context }) =>{
    /**
     * 1. navigate to https://rahulshettyacademy.com/AutomationPractice/
     * 2. click on "Open Tab"
     * 3. print url of the new page
     * 4. verify .Consulting text is displayed
     * 5. print url of the main page
     * 6. on main page, select checkbox 2
     * 7. on second page, print title "Foundations of Modern Higher Education"
     */

    const mainPage = page;
    await mainPage.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    const newTabButton = mainPage.getByRole('link', {name : 'Open Tab'});

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // listener waiting for event - new page
        await newTabButton.click() //action that triggers the event
    ]);

    console.log(newPage.url());

    const consultingText = newPage.getByRole('heading', {name : '.Consulting'}).first();
    await expect(consultingText).toBeVisible();

    console.log(mainPage.url());

    await mainPage.locator('#checkBoxOption2').check();

    const textToVerify = await newPage.getByText('Foundations of Modern Higher Education').textContent();
    console.log(textToVerify);

}
)
