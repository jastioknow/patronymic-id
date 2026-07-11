import { test, expect } from "@playwright/test";

test.describe("PatronymicID™ End-to-End Enterprise Flow", () => {
  test("should successfully analyze patronymic and display father card", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toContainText("PatronymicID™");

    const input = page.getByPlaceholder(/пример/i);
    await input.fill("Евгеньевна");

    await page.click("button:has-text('Инициировать анализ')");

    const fatherNameResult = page.locator("text=Евгений");
    await expect(fatherNameResult).toBeVisible({ timeout: 5000 });

    await expect(
      page.locator("text=Паттерны суффиксального кодирования успешно дешифрованы"),
    ).toBeVisible();
  });
});
