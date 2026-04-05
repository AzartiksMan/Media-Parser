export interface Region {
  id: string;
  name: string;
  language: string;
  languageCode: string;
  flag: string;
}

export const REGIONS: Region[] = [
  { id: "us", name: "USA", language: "English", languageCode: "en", flag: "US" },
  { id: "uk", name: "UK", language: "English", languageCode: "en", flag: "GB" },
  { id: "ua", name: "Ukraine", language: "Ukrainian", languageCode: "uk", flag: "UA" },
  { id: "il", name: "Israel", language: "Hebrew", languageCode: "he", flag: "IL" },
  { id: "cy", name: "Cyprus", language: "Greek", languageCode: "el", flag: "CY" },
  { id: "ae", name: "UAE", language: "Arabic", languageCode: "ar", flag: "AE" },
  { id: "de", name: "Germany", language: "German", languageCode: "de", flag: "DE" },
  { id: "fr", name: "France", language: "French", languageCode: "fr", flag: "FR" },
  { id: "es", name: "Spain", language: "Spanish", languageCode: "es", flag: "ES" },
  { id: "it", name: "Italy", language: "Italian", languageCode: "it", flag: "IT" },
  { id: "br", name: "Brazil", language: "Portuguese", languageCode: "pt", flag: "BR" },
  { id: "tr", name: "Turkey", language: "Turkish", languageCode: "tr", flag: "TR" },
  { id: "in", name: "India", language: "Hindi", languageCode: "hi", flag: "IN" },
  { id: "ru", name: "Russia", language: "Russian", languageCode: "ru", flag: "RU" },
  { id: "pl", name: "Poland", language: "Polish", languageCode: "pl", flag: "PL" },
  { id: "ma", name: "Morocco", language: "French/Arabic", languageCode: "fr", flag: "MA" },
  { id: "ca", name: "Canada", language: "English/French", languageCode: "en", flag: "CA" },
];
