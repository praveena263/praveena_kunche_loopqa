const { test, expect } = require("../utils/fixture");
const testData = require("../utils/data.json");

test.describe("Login Automation - Data Driven", () => {
  testData.testCases.forEach((testCase, index) => {
    test(`Test Case ${index + 1}`, async ({ logIn }) => {
      // Click the button to load content
      await logIn.getByRole("button", { name: testCase.buttonName }).dblclick();

      for (const selector of testCase.selectors) {
        let element;
        // Determine selector type
        if (selector.type === "first") {
          element = logIn.locator(selector.locator).first();
        } else if (selector.type === "nth") {
          element = logIn.locator(selector.locator).nth(selector.index);
        }

        await element.waitFor(); // Wait for the element to load

        // Perform validations
        for (const validation of selector.validations) {
          if (validation.locatorType === "text") {
            await expect(element.getByText(validation.locatorValue)).toBeVisible();
          } else if (validation.locatorType === "nestedText") {
            const nestedElement = element.locator(validation.locator);
            await expect(nestedElement.getByText(validation.locatorValue)).toBeVisible();
          } else if (validation.locatorType === "tag") {
            const tagElement = element.locator(validation.locator, { hasText: validation.locatorValue });
            await expect(tagElement).toBeVisible();
          }
        }
      }
    });
  });
});
