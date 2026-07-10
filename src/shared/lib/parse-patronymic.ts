export interface ParsingResult {
  fatherName: string;
  gender: "male" | "female" | "unknown";
  confidence: number;
}

const EXCELECTIONS: Record<string, string> = {
  павлович: "Павел",
  павловна: "Павел",
  львович: "Лев",
  львовна: "Лев",
  яковлевич: "Яков",
  яковлевна: "Яков",
  ильич: "Илья",
  ильинична: "Илья",
  никитич: "Никита",
  никитична: "Никита",
  саввич: "Савва",
  саввична: "Савва",
};

export function parsePatronymic(patronymic: string): ParsingResult {
  const clean = patronymic.trim().toLowerCase();

  if (!clean) {
    return { fatherName: "", gender: "unknown", confidence: 0 };
  }

  if (EXCELECTIONS[clean]) {
    const isMale = clean.endsWith("ич") && !clean.endsWith("ична");
    return {
      fatherName: EXCELECTIONS[clean],
      gender: isMale ? "male" : "female",
      confidence: 1,
    };
  }

  if (clean.endsWith("ович") || clean.endsWith("евич")) {
    const base = clean.slice(0, -4);
    let name = base.charAt(0).toUpperCase() + base.slice(1);

    if (clean.endsWith("евич") && !name.endsWith("й") && !name.endsWith("ь")) {
      if (["игор", "лазар"].includes(base)) {
        name += "ь";
      } else if (clean.endsWith("еевич")) {
        name += "й";
      } else if (name.endsWith("е")) {
        name = name.slice(0, -1) + "й";
      }
    }
    return { fatherName: name, gender: "male", confidence: 0.95 };
  }

  if (clean.endsWith("овна") || clean.endsWith("евна")) {
    const base = clean.slice(0, -4);
    let name = base.charAt(0).toUpperCase() + base.slice(1);

    if (clean.endsWith("евна") && !name.endsWith("й") && !name.endsWith("ь")) {
      if (["игор", "лазар"].includes(base)) {
        name += "ь";
      } else if (clean.endsWith("еевна")) {
        name += "й";
      } else if (name.endsWith("е")) {
        name = name.slice(0, -1) + "й";
      }
    }
    return { fatherName: name, gender: "female", confidence: 0.95 };
  }

  return { fatherName: patronymic, gender: "unknown", confidence: 0.1 };
}
