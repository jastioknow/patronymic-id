import { describe, it, expect } from "vitest";
import { parsePatronymic } from "./parse-patronymic";

describe("parsePatronymic enterprise engine", () => {
  it("should parse standard male patronymics", () => {
    expect(parsePatronymic("Петрович").fatherName).toBe("Петр");
    expect(parsePatronymic("Александрович").fatherName).toBe("Александр");
    expect(parsePatronymic("Андреевич").fatherName).toBe("Андрей");
    expect(parsePatronymic("Алексеевич").fatherName).toBe("Алексей");
    expect(parsePatronymic("Сергеевич").fatherName).toBe("Сергей");
    expect(parsePatronymic("Матвеевич").fatherName).toBe("Матвей");
  });

  it("should parse standard female patronymics", () => {
    expect(parsePatronymic("Ивановна").fatherName).toBe("Иван");
    expect(parsePatronymic("Андреевна").fatherName).toBe("Андрей");
    expect(parsePatronymic("Сергеевна").fatherName).toBe("Сергей");
    expect(parsePatronymic("Матвеевна").fatherName).toBe("Матвей");
  });

  it("should resolve complex edge cases correctly", () => {
    expect(parsePatronymic("Ильич").fatherName).toBe("Илья");
    expect(parsePatronymic("Львовна").fatherName).toBe("Лев");
    expect(parsePatronymic("Павлович").fatherName).toBe("Павел");
  });
});
