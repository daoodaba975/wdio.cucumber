import { Given, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

// Given(/^launch the DevTo home page$/, async () => {
//   await browser.url("https://dev.to");
// });

Given(/^lancer la page "(.*)"$/, async (urlPage) => {
  await browser.url(urlPage);
});

Then(/^check that the DevTo home page is displayed$/, async () => {
  await expect($("//input[@placeholder='Search...']")).toBeDisplayed();
});

Then(/^verifie le bouton se connecter$/, async () => {
  await expect($("//a[@href='/login']")).toBeDisplayed();
});

Then(/^verifie le lien Insta$/, async () => {
  await expect(browser).toHaveUrl("https://www.instagram.com/");
});

Then(/^verifie le bouton play$/, async () => {
  await expect($("//button[@aria-label='Play']")).toBePresent();
});
