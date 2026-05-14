import { expect, test } from '@playwright/test'

test ('find my location', async ({ browser }) => {

    const context = await browser.newContext({
        geolocation: { latitude: 40.7128, longitude: -74.0060 },  // ✓ Mock NYC coordinates
        permissions: ['geolocation']  // ✓ Grant permission (can also use grantPermissions)
    });

    await context.grantPermissions(['geolocation'],{
        origin : 'https://whatmylocation.com'
    });
    const page = await context.newPage();

    await page.goto('https://whatmylocation.com');

    const permissionState = await page.evaluate(async () => {
        const result = await navigator.permissions.query({name : 'geolocation'});
        return result.state;
    }
    
    );
    expect(permissionState).toBe('granted');


    const lat = page.locator('#latitude');
    console.log('HERE IS LATITUDE: ' + await lat.textContent());

}
)



test ('test mic permissions', async ({ page })=> {
    /*
        1. go to https://mictests.com/
        2. click on "Test microphone"
        3. verify this text is displayed 'Please say “Hello” or make some noise.'
    */

        await page.goto('https://mictests.com/');
        const testMicButton = page.getByRole('button', { name : 'Test my mic'});
        await testMicButton.click();

        const expectedText = page.locator("li[class='notice-info info_sayHello']");
        await expect(expectedText).toBeVisible();

})

test ('test camera permissions', async ({ page }) => {
/*
    1. go to https://webcamtests.com/
    2. click on "Test camera"
    3. verify the camera is working
*/
    await page.goto('https://webcamtests.com/')
    const testCamButton = page.getByRole('button', {name : 'Test my cam'})
    await testCamButton.click();

    const expectedText = page.locator("li[class='notice-loading loading_testingWebcamera']");
    await expect(expectedText).toBeVisible();
}
)