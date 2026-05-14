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

test('practice multiple tabs', async ({page, context}) => {
    /**
     * 1. go to https://the-internet.herokuapp.com/windows
     * 2. click on "Click Here"
     * 3. print title of new window
     * 4. print the url of the main window
     */
    const mainPage = page;
    await mainPage.goto('https://the-internet.herokuapp.com/windows');
    const clickHereLink = mainPage.locator('a', { hasText: 'Click Here' });
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await clickHereLink.click()
    ]);
    const newPageTitle = await newPage.title();
    console.log('New page Title: ' + newPageTitle);
    console.log('Main page URL: ' + mainPage.url());


}
)


test('practice closing the tab', async ({page, context}) => {
    /**
     * 1. go to https://practice.expandtesting.com/windows
     * 2. click on "Click Here"
     * 3. on new page, verify text is displayed "Example of a new window page for Automation Testing Practice"
     * 4. print the url of the main window
     * 5. close new page
     */
    const mainPage = page;
    await mainPage.goto('https://practice.expandtesting.com/windows');
    const clickHereLink = mainPage.locator('a', { hasText: 'Click Here' });
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await clickHereLink.click()
    ]);
    
    const text = newPage.getByText('Example of a new window page for Automation Testing Practice');
    await expect(text).toBeVisible();

    console.log(page.url()); // main window
    await newPage.close();


}
)

test ('practice alert handling', async ({page}) => {
/**
 * 1. go to https://practice.expandtesting.com/js-dialogs
 * 2. set up listener for alerts
 * 3. click on JS Alert, print the text of alert and press Ok
 * 4. click on JS confirm, print the text of alert and cancel the alert
 * 5. click on JS prompt, print the text of alert, enter your name and press ok
 */

await page.goto('https://practice.expandtesting.com/js-dialogs');
 page.on('dialog', async (dialog)=> {
    console.log(dialog.message());

    if (dialog.type() === 'alert'){
        await dialog.accept();
    }else if (dialog.type() === 'confirm'){
        await dialog.dismiss();
    }else if (dialog.type() === 'prompt'){
        await dialog.accept('Bena');
    }
})

  await page.getByRole("button", { name: "Js Alert" }).click();
  await page.getByRole("button", { name: "Js Confirm" }).click();
  await page.getByRole("button", { name: "Js Prompt" }).click();
}
)
