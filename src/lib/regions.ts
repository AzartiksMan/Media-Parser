export interface Region {
  id: string;
  name: string;
  language: string;
  languageCode: string;
  flag: string;
}

export const REGIONS: Region[] = [
  // North America
  { id: "us", name: "USA", language: "English", languageCode: "en", flag: "US" },
  { id: "ca", name: "Canada", language: "English/French", languageCode: "en", flag: "CA" },
  { id: "mx", name: "Mexico", language: "Spanish", languageCode: "es", flag: "MX" },

  // Europe — Western
  { id: "uk", name: "UK", language: "English", languageCode: "en", flag: "GB" },
  { id: "ie", name: "Ireland", language: "English", languageCode: "en", flag: "IE" },
  { id: "fr", name: "France", language: "French", languageCode: "fr", flag: "FR" },
  { id: "de", name: "Germany", language: "German", languageCode: "de", flag: "DE" },
  { id: "at", name: "Austria", language: "German", languageCode: "de", flag: "AT" },
  { id: "ch", name: "Switzerland", language: "German/French", languageCode: "de", flag: "CH" },
  { id: "nl", name: "Netherlands", language: "Dutch", languageCode: "nl", flag: "NL" },
  { id: "be", name: "Belgium", language: "Dutch/French", languageCode: "nl", flag: "BE" },
  { id: "lu", name: "Luxembourg", language: "French", languageCode: "fr", flag: "LU" },

  // Europe — Southern
  { id: "es", name: "Spain", language: "Spanish", languageCode: "es", flag: "ES" },
  { id: "pt", name: "Portugal", language: "Portuguese", languageCode: "pt", flag: "PT" },
  { id: "it", name: "Italy", language: "Italian", languageCode: "it", flag: "IT" },
  { id: "gr", name: "Greece", language: "Greek", languageCode: "el", flag: "GR" },
  { id: "cy", name: "Cyprus", language: "Greek", languageCode: "el", flag: "CY" },
  { id: "mt", name: "Malta", language: "English", languageCode: "en", flag: "MT" },

  // Europe — Northern
  { id: "se", name: "Sweden", language: "Swedish", languageCode: "sv", flag: "SE" },
  { id: "no", name: "Norway", language: "Norwegian", languageCode: "no", flag: "NO" },
  { id: "dk", name: "Denmark", language: "Danish", languageCode: "da", flag: "DK" },
  { id: "fi", name: "Finland", language: "Finnish", languageCode: "fi", flag: "FI" },
  { id: "is", name: "Iceland", language: "Icelandic", languageCode: "is", flag: "IS" },

  // Europe — Eastern
  { id: "pl", name: "Poland", language: "Polish", languageCode: "pl", flag: "PL" },
  { id: "cz", name: "Czech Republic", language: "Czech", languageCode: "cs", flag: "CZ" },
  { id: "sk", name: "Slovakia", language: "Slovak", languageCode: "sk", flag: "SK" },
  { id: "hu", name: "Hungary", language: "Hungarian", languageCode: "hu", flag: "HU" },
  { id: "ro", name: "Romania", language: "Romanian", languageCode: "ro", flag: "RO" },
  { id: "bg", name: "Bulgaria", language: "Bulgarian", languageCode: "bg", flag: "BG" },
  { id: "hr", name: "Croatia", language: "Croatian", languageCode: "hr", flag: "HR" },
  { id: "rs", name: "Serbia", language: "Serbian", languageCode: "sr", flag: "RS" },
  { id: "si", name: "Slovenia", language: "Slovenian", languageCode: "sl", flag: "SI" },
  { id: "ba", name: "Bosnia", language: "Bosnian", languageCode: "bs", flag: "BA" },
  { id: "al", name: "Albania", language: "Albanian", languageCode: "sq", flag: "AL" },
  { id: "mk", name: "North Macedonia", language: "Macedonian", languageCode: "mk", flag: "MK" },
  { id: "me", name: "Montenegro", language: "Serbian", languageCode: "sr", flag: "ME" },
  { id: "xk", name: "Kosovo", language: "Albanian", languageCode: "sq", flag: "XK" },

  // Europe — Baltic
  { id: "lt", name: "Lithuania", language: "Lithuanian", languageCode: "lt", flag: "LT" },
  { id: "lv", name: "Latvia", language: "Latvian", languageCode: "lv", flag: "LV" },
  { id: "ee", name: "Estonia", language: "Estonian", languageCode: "et", flag: "EE" },

  // CIS
  { id: "ua", name: "Ukraine", language: "Ukrainian", languageCode: "uk", flag: "UA" },
  { id: "ru", name: "Russia", language: "Russian", languageCode: "ru", flag: "RU" },
  { id: "by", name: "Belarus", language: "Russian", languageCode: "ru", flag: "BY" },
  { id: "md", name: "Moldova", language: "Romanian", languageCode: "ro", flag: "MD" },
  { id: "ge", name: "Georgia", language: "Georgian", languageCode: "ka", flag: "GE" },
  { id: "am", name: "Armenia", language: "Armenian", languageCode: "hy", flag: "AM" },
  { id: "az", name: "Azerbaijan", language: "Azerbaijani", languageCode: "az", flag: "AZ" },
  { id: "kz", name: "Kazakhstan", language: "Russian/Kazakh", languageCode: "ru", flag: "KZ" },
  { id: "uz", name: "Uzbekistan", language: "Uzbek", languageCode: "uz", flag: "UZ" },

  // Middle East
  { id: "il", name: "Israel", language: "Hebrew", languageCode: "he", flag: "IL" },
  { id: "ae", name: "UAE", language: "Arabic", languageCode: "ar", flag: "AE" },
  { id: "sa", name: "Saudi Arabia", language: "Arabic", languageCode: "ar", flag: "SA" },
  { id: "qa", name: "Qatar", language: "Arabic", languageCode: "ar", flag: "QA" },
  { id: "kw", name: "Kuwait", language: "Arabic", languageCode: "ar", flag: "KW" },
  { id: "bh", name: "Bahrain", language: "Arabic", languageCode: "ar", flag: "BH" },
  { id: "om", name: "Oman", language: "Arabic", languageCode: "ar", flag: "OM" },
  { id: "jo", name: "Jordan", language: "Arabic", languageCode: "ar", flag: "JO" },
  { id: "lb", name: "Lebanon", language: "Arabic", languageCode: "ar", flag: "LB" },
  { id: "iq", name: "Iraq", language: "Arabic", languageCode: "ar", flag: "IQ" },
  { id: "ir", name: "Iran", language: "Persian", languageCode: "fa", flag: "IR" },

  // North Africa
  { id: "ma", name: "Morocco", language: "Arabic/French", languageCode: "ar", flag: "MA" },
  { id: "dz", name: "Algeria", language: "Arabic/French", languageCode: "ar", flag: "DZ" },
  { id: "tn", name: "Tunisia", language: "Arabic/French", languageCode: "ar", flag: "TN" },
  { id: "eg", name: "Egypt", language: "Arabic", languageCode: "ar", flag: "EG" },
  { id: "ly", name: "Libya", language: "Arabic", languageCode: "ar", flag: "LY" },

  // Sub-Saharan Africa
  { id: "ng", name: "Nigeria", language: "English", languageCode: "en", flag: "NG" },
  { id: "za", name: "South Africa", language: "English", languageCode: "en", flag: "ZA" },
  { id: "ke", name: "Kenya", language: "English", languageCode: "en", flag: "KE" },
  { id: "gh", name: "Ghana", language: "English", languageCode: "en", flag: "GH" },
  { id: "sn", name: "Senegal", language: "French", languageCode: "fr", flag: "SN" },
  { id: "ci", name: "Ivory Coast", language: "French", languageCode: "fr", flag: "CI" },

  // Turkey
  { id: "tr", name: "Turkey", language: "Turkish", languageCode: "tr", flag: "TR" },

  // South Asia
  { id: "in", name: "India", language: "Hindi", languageCode: "hi", flag: "IN" },
  { id: "pk", name: "Pakistan", language: "Urdu", languageCode: "ur", flag: "PK" },
  { id: "bd", name: "Bangladesh", language: "Bengali", languageCode: "bn", flag: "BD" },
  { id: "lk", name: "Sri Lanka", language: "Sinhala", languageCode: "si", flag: "LK" },

  // Southeast Asia
  { id: "th", name: "Thailand", language: "Thai", languageCode: "th", flag: "TH" },
  { id: "vn", name: "Vietnam", language: "Vietnamese", languageCode: "vi", flag: "VN" },
  { id: "id", name: "Indonesia", language: "Indonesian", languageCode: "id", flag: "ID" },
  { id: "my", name: "Malaysia", language: "Malay", languageCode: "ms", flag: "MY" },
  { id: "ph", name: "Philippines", language: "Filipino/English", languageCode: "en", flag: "PH" },
  { id: "sg", name: "Singapore", language: "English", languageCode: "en", flag: "SG" },

  // East Asia
  { id: "jp", name: "Japan", language: "Japanese", languageCode: "ja", flag: "JP" },
  { id: "kr", name: "South Korea", language: "Korean", languageCode: "ko", flag: "KR" },
  { id: "cn", name: "China", language: "Chinese", languageCode: "zh", flag: "CN" },
  { id: "tw", name: "Taiwan", language: "Chinese", languageCode: "zh", flag: "TW" },
  { id: "hk", name: "Hong Kong", language: "Chinese", languageCode: "zh", flag: "HK" },

  // Latin America
  { id: "br", name: "Brazil", language: "Portuguese", languageCode: "pt", flag: "BR" },
  { id: "ar", name: "Argentina", language: "Spanish", languageCode: "es", flag: "AR" },
  { id: "cl", name: "Chile", language: "Spanish", languageCode: "es", flag: "CL" },
  { id: "co", name: "Colombia", language: "Spanish", languageCode: "es", flag: "CO" },
  { id: "pe", name: "Peru", language: "Spanish", languageCode: "es", flag: "PE" },
  { id: "ve", name: "Venezuela", language: "Spanish", languageCode: "es", flag: "VE" },
  { id: "ec", name: "Ecuador", language: "Spanish", languageCode: "es", flag: "EC" },

  // Oceania
  { id: "au", name: "Australia", language: "English", languageCode: "en", flag: "AU" },
  { id: "nz", name: "New Zealand", language: "English", languageCode: "en", flag: "NZ" },
];
