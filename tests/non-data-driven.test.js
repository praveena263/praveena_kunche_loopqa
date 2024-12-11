const { test, expect } = require("../utils/fixture");

test.describe("Login Automation", () => {

  test("Test Case 1", async ({ logIn }) => {
    await logIn
      .getByRole("button", { name: "Web Application Main web" })
      .dblclick();
    const todo_in_web_app = logIn.locator(".w-80").first();
    await expect(
      todo_in_web_app.getByText("Implement user authentication")
    ).toBeVisible();
    await expect(todo_in_web_app.getByText("Feature")).toBeVisible();
    await expect(todo_in_web_app.getByText("High Priority")).toBeVisible();
  });

  test(`Test Case 2`, async ({ logIn }) => {
    await logIn
      .getByRole("button", { name: "Web Application Main web" })
      .dblclick();
    const todo_in_web_app = logIn.locator(".w-80").first();
    await expect(
      todo_in_web_app.locator(".mb-2").getByText("Fix navigation bug")
    ).toBeVisible();
    const bugTag = todo_in_web_app.locator("span", { hasText: "Bug" });
    await expect(bugTag).toBeVisible();
  });

  test(`Test Case 3`, async ({ logIn }) => {
    await logIn
      .getByRole("button", { name: "Web Application Main web" })
      .dblclick();
    const in_progress_in_web_app = logIn.locator(".w-80").nth(1);
    await expect(
      in_progress_in_web_app.getByText("Design system updates")
    ).toBeVisible();
    const bugTag = in_progress_in_web_app.locator("span", {
      hasText: "Design",
    });
    await expect(bugTag).toBeVisible();
  });


  test(`Test Case 4`, async ({ logIn }) => {
    await logIn
      .getByRole("button", { name: "Mobile Application Native" })
      .click();
    const newPage = logIn.locator(".w-80").first();
    await newPage.waitFor();
    const header = newPage.locator("h3", {
      hasText: "Push notification system",
    });
    await expect(header).toBeVisible();
    const bugTag = newPage.locator("span", { hasText: "Feature" });
    await expect(bugTag).toBeVisible();
  });

  test(`Test Case 5`, async ({ logIn }) => {
    await logIn
      .getByRole("button", { name: "Mobile Application Native" })
      .click();
    const newPage = logIn.locator(".w-80").nth(1);
    await newPage.waitFor();
    const header = newPage.locator("h3", { hasText: "Offline mode" });
    await expect(header).toBeVisible();
    const highPriorityTag = newPage.locator("span", {
      hasText: "High Priority",
    });
    await expect(highPriorityTag).toContainText("High Priority");
    const featureTag = newPage.locator("span", { hasText: "Feature" });
    await expect(featureTag).toBeVisible();
  });

  
  test(`Test Case 6`, async ({ logIn }) => {
    await logIn
      .getByRole("button", { name: "Mobile Application Native" })
      .click();
    const newPage = logIn.locator(".w-80").nth(3);
    await newPage.waitFor();
    const header = newPage.locator("h3", { hasText: "App icon design" });
    await expect(header).toBeVisible();
    const designTag = newPage.locator("span", { hasText: "Design" });
    await expect(designTag).toBeVisible();
  });
});
