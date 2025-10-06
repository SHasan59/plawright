const { test, expect } = require("@playwright/test"); //declare to start tests

test("Browser Context test", async ({ browser }) => {
  // function() same as ()=>
  //js is async (doesn't go in order like java)
  // need to put async on function for await

  //opening new browser tab
  const context = await browser.newContext();
  const page = await context.newPage();
  // can use page in function decleration (if you don't have cookies)

  await page.goto(
    "https://www.google.com/search?q=f1&rlz=1C1ONGR_enUS999US999&oq=f1&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyCggCEC4YsQMYgAQyDAgDECMYJxiABBiKBTIKCAQQABixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzY1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
  );
});

test("Page Playwright test", async ({ page }) => {
  await page.goto("https://google.com");
  //get page title then assertion

  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});

test("Main test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");

  const cardTitles = page.locator(".card-body a");

  //css, xpath
  //

  //id tag#name or #name
  //class tag.class or .class
  //attribute [attribute='value']
  //xpath //tag[@attribute='value']

  //css from parent to child
  // parenttagname space childtagname

  await userName.fill("rahulshetty");
  await page.locator('[name="password"]').fill("learning");
  await page.locator('//span[@class="checkmark"]').click;
  await page.locator('input[name="terms"]').click;
  // await page.locator('input.btn btn-info btn-md').click; (below is easier)
  await signIn.click();
  console.log(await page.locator("[style*='block']").textContent()); //extracts error message that appears (* used to filter for anything with)
  await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //assert error message is correct

  await userName.fill(""); //clears text
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  //console.log(await cardTitles.nth(1).textContent()); // parent to child css & get first index
  console.log(await cardTitles.first().textContent());

  const allTitles = await cardTitles.allTextContents(); //alltextcontents method will not wait for page to load
  console.log(allTitles);
});

test.only("Practice Login Automation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/auth/login");

  const userName = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const signIn = page.locator("#login");

  await userName.fill("hasan.samith@gmail.com");
  await password.fill("Test@1234");
  await signIn.click();

  // await page.waitForLoadState('networkidle'); //wait for all api calls are complete

  const titles = page.locator(".card-body b");
  await titles.first().waitFor(); //waits for element to load
  const titleresult = await titles.allTextContents();
  console.log(titleresult);
});
// npx playwright test
// npx playwright test tests/UiBasics.spec.js
