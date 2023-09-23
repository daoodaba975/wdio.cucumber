import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

Given(/^user is on login page$/, async () => {
  await browser.url("https://the-internet.herokuapp.com/login");
});

When(/^user enters (.*) and (.*)$/, async (username, password) => {
  await $("#username").setValue(username);
  await $("#password").setValue(password);
});

When(/^clicks on login button$/, async () => {
  await $('button[type="submit"]').click();
});

Then(/^this (.*) is displayed$/, async (message) => {
  await expect($("#flash")).toHaveTextContaining(message);
});
