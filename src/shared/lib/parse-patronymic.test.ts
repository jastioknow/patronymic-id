import { describe, it, expect } from "vitest";
import { parsePatronymic } from "./parse-patronymic";

describe("parsePatronymic enterprise engine", () => {
  it("should parse standard male patronymics", () => {
    expect(parsePatronymic("Петрович").fatherName).toBe("Петр");
    expect(parsePatronymic("Александрович").fatherName).toBe("Александр");
  });

  it("should parse standard female patronymics", () => {
    expect(parsePatronymic("Ивановна").fatherName).toBe("Иван");
  });

  it("should resolve complex edge cases correctly", () => {
    expect(parsePatronymic("Ильич").fatherName).toBe("Илья");
    expect(parsePatronymic("Львовна").fatherName).toBe("Лев");
    expect(parsePatronymic("Павлович").fatherName).toBe("Павел");
  });
});
