import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  expect(getFullYear()).toBe(currentYear); // Compare with the current year
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});

