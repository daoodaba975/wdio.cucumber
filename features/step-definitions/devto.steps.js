import { Given, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

// Given(/^launch the DevTo home page$/, async () => {
//   await browser.url("https://dev.to");
// });

Then(/^check that the DevTo home page is displayed$/, async () => {
  await expect($("//input[@placeholder='Search...']")).toBeDisplayed();
});

Given(/^lancer la page "(.*)"$/, async (urlPage) => {
  await browser.url(urlPage);
});
