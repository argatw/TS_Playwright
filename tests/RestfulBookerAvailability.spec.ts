import { test, expect } from "@playwright/test";

test("Restful Booker1", async ({ page }) => {
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
//   await expect(page.getByRole("heading", { name: /our rooms/i })).toBeVisible();
//   await expect(page.getByRole('link', { name: /book now/i }).first()).toBeVisible();
  const firstRoomCard = page.locator('.room-card').first();
  await expect(firstRoomCard).toBeVisible();
  await expect(firstRoomCard.getByRole('link', { name: /book now/i })).toBeVisible();
});


test("Restful Booker - room availability search (async API wait)", async ({ page }) => {

  await test.step("Open Restful Booker site", async () => {
    await page.goto("https://automationintesting.online/");
  });

  const checkBtn = page.getByRole("button", { name: /check availability/i });

  await test.step("Fill check-in and check-out dates", async () => {
    await expect(checkBtn).toBeVisible();

    // Scope to the container that owns the availability form
    const bookingSection = page.locator("section, div").filter({ has: checkBtn });

    const checkIn = bookingSection.getByRole("textbox").nth(0);
    const checkOut = bookingSection.getByRole("textbox").nth(1);

    await checkIn.click();
    await checkIn.fill("10/02/2026");
    await checkIn.press("Enter");

    await checkOut.click();
    await checkOut.fill("11/02/2026");
    await checkOut.press("Enter");
  });

  let response;
  let rooms;
  

  await test.step("Trigger availability search and wait for API response/payload validation", async () => {
    [response] = await Promise.all([
      page.waitForResponse(res =>
        res.url().includes("/api/room") &&
        res.url().includes("checkin=") &&
        res.url().includes("checkout=") &&
        res.status() === 200
      ),
      checkBtn.click(),
    ]);

    console.log("Availability API:", response.url());

    rooms = await response.json();

    // 🔑 Safe logging regardless of payload shape
    // console.log(
    //   "Rooms returned:",
    //   Array.isArray(rooms) ? rooms.length : rooms
    // );
    console.log("Rooms returned:", rooms);
    expect(rooms).toBeTruthy();
  });

  await test.step("Verify rooms are displayed in UI", async () => {
    // await expect(
    //   page.getByRole("link", { name: /book now/i }).first()
    // ).toBeVisible();

    const firstRoomCard = page.locator('.room-card').first();
    await expect(firstRoomCard).toBeVisible();
    await expect(firstRoomCard.getByRole('link', { name: /book now/i })).toBeVisible();
  });
});

