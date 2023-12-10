// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Contact Form', () => {
  test('should allow me to successfuly submit the form', async ({ page }) => {
    // Fill in the form
    await page.getByTestId('ContactName').fill('Test Name');
    await page.getByTestId("ContactEmail").fill('testemail@test.com');
    await page.getByTestId("ContactPhone").fill('00000000000');
    await page.getByTestId("ContactSubject").fill('Test Subject');
    await page.getByTestId("ContactDescription").fill('Hello, this is a test message');

    // Submit Form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assertions
    await expect(page.locator('#root')).toContainText('Thanks for getting in touch Test Name!');
    await expect(page.getByText('Test Subject')).toBeVisible();
  });

  test('should not allow an empty contact name', async ({ page }) => {
    // Fill in the form
    await page.getByTestId("ContactEmail").fill('testemail@test.com');
    await page.getByTestId("ContactPhone").fill('00000000000');
    await page.getByTestId("ContactSubject").fill('Test Subject');
    await page.getByTestId("ContactDescription").fill('Hello, this is a test message');

    // Submit Form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assertions
    await expect(page.locator('form')).toContainText('Name may not be blank');
  });

  test('should not allow a message less than 20 characters', async ({ page }) => {
    // Fill in the form
    await page.getByTestId('ContactName').fill('Test Name');
    await page.getByTestId("ContactEmail").fill('testemail@test.com');
    await page.getByTestId("ContactPhone").fill('00000000000');
    await page.getByTestId("ContactSubject").fill('Test Subject');
    await page.getByTestId("ContactDescription").fill('Hello');

    // Submit Form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assertions
    await expect(page.locator('form')).toContainText('Message must be between 20 and 2000 characters.');
  });

  test('should not allow an invalid email', async ({ page }) => {
    // Fill in the form
    await page.getByTestId('ContactName').fill('Test Name');
    await page.getByTestId("ContactEmail").fill('testemailtest.com');
    await page.getByTestId("ContactPhone").fill('00000000000');
    await page.getByTestId("ContactSubject").fill('Test Subject');
    await page.getByTestId("ContactDescription").fill('Hello, this is a test message');

    // Submit Form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assertions
    await expect(page.locator('form')).toContainText('must be a well-formed email address');
  });
});