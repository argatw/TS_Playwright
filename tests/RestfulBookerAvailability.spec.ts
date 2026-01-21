import { test, expect } from "@playwright/test";

test("Restful Booker - availability search (async API wait)", async ({ page }) => {
  await page.goto("https://automationintesting.online/");

  const checkBtn = page.getByRole("button", { name: /check availability/i });
  await expect(checkBtn).toBeVisible();

  // Scope to the container that has the button
  const bookingSection = page.locator("section, div").filter({ has: checkBtn });

  const checkIn = bookingSection.getByRole("textbox").nth(0);
  const checkOut = bookingSection.getByRole("textbox").nth(1);

  // Fill in DD/MM/YYYY format
  await checkIn.click();
  await checkIn.fill("10/02/2026");
  await checkIn.press("Enter");

  await checkOut.click();
  await checkOut.fill("11/02/2026");
  await checkOut.press("Enter");

  // Click + wait for API response that drives availability/rooms
  const [resp] = await Promise.all([
    page.waitForResponse(res =>
      res.url().includes("/api/room") &&
      res.url().includes("checkin=") &&
      res.url().includes("checkout=") &&
      res.status() === 200
    ),
    checkBtn.click(),
  ]);

  console.log("Availability API:", resp.url());


  // Assert UI updated
  await expect(page.getByRole("heading", { name: /our rooms/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /book now/i }).first()).toBeVisible();
});
