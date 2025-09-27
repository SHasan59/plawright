const { test } = require("@playwright/test"); //declare to start tests

test("Browser Context test", async ({browser, page}) => {
  // function() same as ()=>
  //js is async (doesn't go in order like java)
  // need to put async on function for await

   //opening new browser tab
   //const context = await browser.newContext();
  // const page = await context.newPage();
  // can use page in function decleration (if you don't have cookies)

   await  page.goto("https://google.com");

});


test("Page Playwright test", async ({page}) => {
 
   await  page.goto("https://google.com");

});
