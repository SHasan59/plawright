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

test("Page Playwright test", async ({ page }) => {


  await page.goto("https://google.com");
  //get page title then assertion

  console.log(await page.title());
  await expect(page).toHaveTitle("Google")
  
});

test.only("Main test", async ({ page }) => {


  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  
  //css, xpath 
    //
    

   //id tag#name or #name
    //class tag.class or .class
    //attribute [attribute='value']
   //xpath //tag[@attribute='value']

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('[name="password"]').fill('learning');
  await page.locator('//span[@class="checkmark"]').click;
  await page.locator('input[name="terms"]').click;
 // await page.locator('input.btn btn-info btn-md').click; (below is easier)
  await page.locator('#signInBtn').click;

  });
// npx playwright test