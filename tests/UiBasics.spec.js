const { test, expect } = require("@playwright/test"); //declare to start tests

test("Browser Context test", async ({ browser, page }) => {
  // function() same as ()=>
  //js is async (doesn't go in order like java)
  // need to put async on function for await

  //opening new browser tab
  //const context = await browser.newContext();
  // const page = await context.newPage();
  // can use page in function decleration (if you don't have cookies)

  await page.goto(
    "https://www.google.com/search?q=f1&rlz=1C1ONGR_enUS999US999&oq=f1&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyCggCEC4YsQMYgAQyDAgDECMYJxiABBiKBTIKCAQQABixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzY1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
  );
});

test.only("Page Playwright test", async ({ page }) => {


  await page.goto("https://google.com");
  //get page title then assertion

  console.log(await page.title());
  await expect(page).toHaveTitle("Google")
  
});
