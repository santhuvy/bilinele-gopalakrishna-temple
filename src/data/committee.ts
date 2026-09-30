export type Person = {
  role?: "president" | "secretary" | "member";
  kn: string;
  en: string;
  place?: string;
  placeEn?: string;
  phone: string;
};

export const committeeYear = "2025";

export const officers: Person[] = [
  {
    role: "president",
    kn: "ಶ್ರೀ ಹರಿಶ್ಚಂದ್ರ ಕಳಿಗೆ",
    en: "Sri Harishchandra Kalige",
    phone: "9481331022",
  },
  {
    role: "secretary",
    kn: "ಶ್ರೀ ಮನೋಜ್ ಕುಮಾರ್ ಎಸ್.",
    en: "Sri Manoj Kumar S",
    place: "ಮದೇಶ್ವರ",
    placeEn: "Madheshwara",
    phone: "9632958742",
  },
];

export const members: Person[] = [
  { kn: "ಶ್ರೀ ವೆಂಕಟೇಶ ಭಟ್ ಅರ್ಚಕರು", en: "Sri Venkatesh Bhat Archakaru", phone: "9449334568" },
  { kn: "ಶ್ರೀ ಧರ್ಮಪಾಲ ಗೌಡ ನಡ್ತೋಟ", en: "Sri Dharmapala Gowda Nadthota", phone: "9483298816" },
  { kn: "ಶ್ರೀ ಗುಡುಪ್ಪ ಗೌಡ ಅಮೈ", en: "Sri Guduppa Gowda Amai", phone: "9880925631" },
  { kn: "ಶ್ರೀ ಭೋಜಪ್ಪ ಗೌಡ ಮದೇಪರ್ಲ", en: "Sri Bhojappa Gowda Madheparla", phone: "9880048493" },
  { kn: "ಶ್ರೀ ಉಮೇಶ್ ನಾಯ್ಕ ಸನ್ನಾರ", en: "Sri Umesh Naik Sannara", phone: "9611637018" },
  { kn: "ಶ್ರೀ ಮತ್ತಿ ಶ್ರೀಕಲಾ ಸಂತೋಷ್ ನೆಟ್ಟಣ", en: "Sri Mathi Shrikala Santhosh Nettana", phone: "9901452902" },
  { kn: "ಶ್ರೀ ಮತ್ತಿ ಭವ್ಯ ಸಂತೋಷ್ ಚಿಡ್ಗಲ್", en: "Sri Mathi Bhavya Santhosh Chidgal", phone: "7019321029" },
];

export function phoneHref(phone: string) {
  return `tel:${phone}`;
}
