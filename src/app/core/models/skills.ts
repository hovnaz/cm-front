export interface SkillsElem {
  name: string;
  iconPath: string;
  rating: number;
  text?: string;
}

export interface LanguageElem {
  language: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | false;
  selected: boolean;
}
