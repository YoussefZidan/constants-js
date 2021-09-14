const languages = [
  { code: "ab", name: "Abkhazian" },
  { code: "aa", name: "Afar" },
  { code: "af", name: "Afrikaans" },
  { code: "ak", name: "Akan" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "an", name: "Aragonese" },
  { code: "hy", name: "Armenian" },
  { code: "as", name: "Assamese" },
  { code: "av", name: "Avaric" },
  { code: "ae", name: "Avestan" },
  { code: "ay", name: "Aymara" },
  { code: "az", name: "Azerbaijani" },
  { code: "bm", name: "Bambara" },
  { code: "ba", name: "Bashkir" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bh", name: "Bihari languages" },
  { code: "bi", name: "Bislama" },
  { code: "bs", name: "Bosnian" },
  { code: "br", name: "Breton" },
  { code: "bg", name: "Bulgarian" },
  { code: "my", name: "Burmese" },
  { code: "ca", name: "Catalan, Valencian" },
  { code: "km", name: "Central Khmer" },
  { code: "ch", name: "Chamorro" },
  { code: "ce", name: "Chechen" },
  { code: "ny", name: "Chichewa, Chewa, Nyanja" },
  { code: "zh", name: "Chinese" },
  { code: "cu", name: "Church Slavonic, Old Bulgarian, Old Church Slavonic" },
  { code: "cv", name: "Chuvash" },
  { code: "kw", name: "Cornish" },
  { code: "co", name: "Corsican" },
  { code: "cr", name: "Cree" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "dv", name: "Divehi, Dhivehi, Maldivian" },
  { code: "nl", name: "Dutch, Flemish" },
  { code: "dz", name: "Dzongkha" },
  { code: "en", name: "English" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "ee", name: "Ewe" },
  { code: "fo", name: "Faroese" },
  { code: "fj", name: "Fijian" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "ff", name: "Fulah" },
  { code: "gd", name: "Gaelic, Scottish Gaelic" },
  { code: "gl", name: "Galician" },
  { code: "lg", name: "Ganda" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "ki", name: "Gikuyu, Kikuyu" },
  { code: "el", name: "Greek (Modern)" },
  { code: "kl", name: "Greenlandic, Kalaallisut" },
  { code: "gn", name: "Guarani" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian, Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "he", name: "Hebrew" },
  { code: "hz", name: "Herero" },
  { code: "hi", name: "Hindi" },
  { code: "ho", name: "Hiri Motu" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "io", name: "Ido" },
  { code: "ig", name: "Igbo" },
  { code: "id", name: "Indonesian" },
  {
    code: "ia",
    name: "Interlingua (International Auxiliary Language Association)",
  },
  { code: "ie", name: "Interlingue" },
  { code: "iu", name: "Inuktitut" },
  { code: "ik", name: "Inupiaq" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jv", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kr", name: "Kanuri" },
  { code: "ks", name: "Kashmiri" },
  { code: "kk", name: "Kazakh" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "kv", name: "Komi" },
  { code: "kg", name: "Kongo" },
  { code: "ko", name: "Korean" },
  { code: "kj", name: "Kwanyama, Kuanyama" },
  { code: "ku", name: "Kurdish" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "lb", name: "Letzeburgesch, Luxembourgish" },
  { code: "li", name: "Limburgish, Limburgan, Limburger" },
  { code: "ln", name: "Lingala" },
  { code: "lt", name: "Lithuanian" },
  { code: "lu", name: "Luba-Katanga" },
  { code: "mk", name: "Macedonian" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "gv", name: "Manx" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mh", name: "Marshallese" },
  { code: "ro", name: "Moldovan, Moldavian, Romanian" },
  { code: "mn", name: "Mongolian" },
  { code: "na", name: "Nauru" },
  { code: "nv", name: "Navajo, Navaho" },
  { code: "nd", name: "Northern Ndebele" },
  { code: "ng", name: "Ndonga" },
  { code: "ne", name: "Nepali" },
  { code: "se", name: "Northern Sami" },
  { code: "no", name: "Norwegian" },
  { code: "nb", name: "Norwegian Bokmål" },
  { code: "nn", name: "Norwegian Nynorsk" },
  { code: "ii", name: "Nuosu, Sichuan Yi" },
  { code: "oc", name: "Occitan (post 1500)" },
  { code: "oj", name: "Ojibwa" },
  { code: "or", name: "Oriya" },
  { code: "om", name: "Oromo" },
  { code: "os", name: "Ossetian, Ossetic" },
  { code: "pi", name: "Pali" },
  { code: "pa", name: "Panjabi, Punjabi" },
  { code: "ps", name: "Pashto, Pushto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "qu", name: "Quechua" },
  { code: "rm", name: "Romansh" },
  { code: "rn", name: "Rundi" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "sg", name: "Sango" },
  { code: "sa", name: "Sanskrit" },
  { code: "sc", name: "Sardinian" },
  { code: "sr", name: "Serbian" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala, Sinhalese" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "st", name: "Sotho, Southern" },
  { code: "nr", name: "South Ndebele" },
  { code: "es", name: "Spanish, Castilian" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "ss", name: "Swati" },
  { code: "sv", name: "Swedish" },
  { code: "tl", name: "Tagalog" },
  { code: "ty", name: "Tahitian" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "tt", name: "Tatar" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "bo", name: "Tibetan" },
  { code: "ti", name: "Tigrinya" },
  { code: "to", name: "Tonga (Tonga Islands)" },
  { code: "ts", name: "Tsonga" },
  { code: "tn", name: "Tswana" },
  { code: "tr", name: "Turkish" },
  { code: "tk", name: "Turkmen" },
  { code: "tw", name: "Twi" },
  { code: "ug", name: "Uighur, Uyghur" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "uz", name: "Uzbek" },
  { code: "ve", name: "Venda" },
  { code: "vi", name: "Vietnamese" },
  { code: "vo", name: "Volap_k" },
  { code: "wa", name: "Walloon" },
  { code: "cy", name: "Welsh" },
  { code: "fy", name: "Western Frisian" },
  { code: "wo", name: "Wolof" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "za", name: "Zhuang, Chuang" },
  { code: "zu", name: "Zulu" },
];

const countries = [
  { name: "Afghanistan", dial_code: "+93", code: "AF" },
  { name: "Albania", dial_code: "+355", code: "AL" },
  { name: "Algeria", dial_code: "+213", code: "DZ" },
  { name: "AmericanSamoa", dial_code: "+1 684", code: "AS" },
  { name: "Andorra", dial_code: "+376", code: "AD" },
  { name: "Angola", dial_code: "+244", code: "AO" },
  { name: "Anguilla", dial_code: "+1 264", code: "AI" },
  { name: "Antarctica", dial_code: "+672", code: "AQ" },
  { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG" },
  { name: "Argentina", dial_code: "+54", code: "AR" },
  { name: "Armenia", dial_code: "+374", code: "AM" },
  { name: "Aruba", dial_code: "+297", code: "AW" },
  { name: "Australia", dial_code: "+61", code: "AU" },
  { name: "Austria", dial_code: "+43", code: "AT" },
  { name: "Azerbaijan", dial_code: "+994", code: "AZ" },
  { name: "Bahamas", dial_code: "+1 242", code: "BS" },
  { name: "Bahrain", dial_code: "+973", code: "BH" },
  { name: "Bangladesh", dial_code: "+880", code: "BD" },
  { name: "Barbados", dial_code: "+1 246", code: "BB" },
  { name: "Belarus", dial_code: "+375", code: "BY" },
  { name: "Belgium", dial_code: "+32", code: "BE" },
  { name: "Belize", dial_code: "+501", code: "BZ" },
  { name: "Benin", dial_code: "+229", code: "BJ" },
  { name: "Bermuda", dial_code: "+1 441", code: "BM" },
  { name: "Bhutan", dial_code: "+975", code: "BT" },
  {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO",
  },
  { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA" },
  { name: "Botswana", dial_code: "+267", code: "BW" },
  { name: "Brazil", dial_code: "+55", code: "BR" },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  { name: "Brunei Darussalam", dial_code: "+673", code: "BN" },
  { name: "Bulgaria", dial_code: "+359", code: "BG" },
  { name: "Burkina Faso", dial_code: "+226", code: "BF" },
  { name: "Burundi", dial_code: "+257", code: "BI" },
  { name: "Cambodia", dial_code: "+855", code: "KH" },
  { name: "Cameroon", dial_code: "+237", code: "CM" },
  { name: "Canada", dial_code: "+1", code: "CA" },
  { name: "Cape Verde", dial_code: "+238", code: "CV" },
  { name: "Cayman Islands", dial_code: "+ 345", code: "KY" },
  { name: "Central African Republic", dial_code: "+236", code: "CF" },
  { name: "Chad", dial_code: "+235", code: "TD" },
  { name: "Chile", dial_code: "+56", code: "CL" },
  { name: "China", dial_code: "+86", code: "CN" },
  { name: "Christmas Island", dial_code: "+61", code: "CX" },
  { name: "Cocos (Keeling) Islands", dial_code: "+61", code: "CC" },
  { name: "Colombia", dial_code: "+57", code: "CO" },
  { name: "Comoros", dial_code: "+269", code: "KM" },
  { name: "Congo", dial_code: "+242", code: "CG" },
  {
    name: "Congo, The Democratic Republic of the",
    dial_code: "+243",
    code: "CD",
  },
  { name: "Cook Islands", dial_code: "+682", code: "CK" },
  { name: "Costa Rica", dial_code: "+506", code: "CR" },
  { name: "Cote d'Ivoire", dial_code: "+225", code: "CI" },
  { name: "Croatia", dial_code: "+385", code: "HR" },
  { name: "Cuba", dial_code: "+53", code: "CU" },
  { name: "Cyprus", dial_code: "+537", code: "CY" },
  { name: "Czech Republic", dial_code: "+420", code: "CZ" },
  { name: "Denmark", dial_code: "+45", code: "DK" },
  { name: "Djibouti", dial_code: "+253", code: "DJ" },
  { name: "Dominica", dial_code: "+1 767", code: "DM" },
  { name: "Dominican Republic", dial_code: "+1 849", code: "DO" },
  { name: "Ecuador", dial_code: "+593", code: "EC" },
  { name: "Egypt", dial_code: "+20", code: "EG" },
  { name: "El Salvador", dial_code: "+503", code: "SV" },
  { name: "Equatorial Guinea", dial_code: "+240", code: "GQ" },
  { name: "Eritrea", dial_code: "+291", code: "ER" },
  { name: "Estonia", dial_code: "+372", code: "EE" },
  { name: "Ethiopia", dial_code: "+251", code: "ET" },
  { name: "Falkland Islands (Malvinas)", dial_code: "+500", code: "FK" },
  { name: "Faroe Islands", dial_code: "+298", code: "FO" },
  { name: "Fiji", dial_code: "+679", code: "FJ" },
  { name: "Finland", dial_code: "+358", code: "FI" },
  { name: "France", dial_code: "+33", code: "FR" },
  { name: "French Guiana", dial_code: "+594", code: "GF" },
  { name: "French Polynesia", dial_code: "+689", code: "PF" },
  { name: "Gabon", dial_code: "+241", code: "GA" },
  { name: "Gambia", dial_code: "+220", code: "GM" },
  { name: "Georgia", dial_code: "+995", code: "GE" },
  { name: "Germany", dial_code: "+49", code: "DE" },
  { name: "Ghana", dial_code: "+233", code: "GH" },
  { name: "Gibraltar", dial_code: "+350", code: "GI" },
  { name: "Greece", dial_code: "+30", code: "GR" },
  { name: "Greenland", dial_code: "+299", code: "GL" },
  { name: "Grenada", dial_code: "+1 473", code: "GD" },
  { name: "Guadeloupe", dial_code: "+590", code: "GP" },
  { name: "Guam", dial_code: "+1 671", code: "GU" },
  { name: "Guatemala", dial_code: "+502", code: "GT" },
  { name: "Guernsey", dial_code: "+44", code: "GG" },
  { name: "Guinea", dial_code: "+224", code: "GN" },
  { name: "Guinea-Bissau", dial_code: "+245", code: "GW" },
  { name: "Guyana", dial_code: "+595", code: "GY" },
  { name: "Haiti", dial_code: "+509", code: "HT" },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  { name: "Honduras", dial_code: "+504", code: "HN" },
  { name: "Hong Kong", dial_code: "+852", code: "HK" },
  { name: "Hungary", dial_code: "+36", code: "HU" },
  { name: "Iceland", dial_code: "+354", code: "IS" },
  { name: "India", dial_code: "+91", code: "IN" },
  { name: "Indonesia", dial_code: "+62", code: "ID" },
  { name: "Iran, Islamic Republic of", dial_code: "+98", code: "IR" },
  { name: "Iraq", dial_code: "+964", code: "IQ" },
  { name: "Ireland", dial_code: "+353", code: "IE" },
  { name: "Isle of Man", dial_code: "+44", code: "IM" },
  { name: "Israel", dial_code: "+972", code: "IL" },
  { name: "Italy", dial_code: "+39", code: "IT" },
  { name: "Jamaica", dial_code: "+1 876", code: "JM" },
  { name: "Japan", dial_code: "+81", code: "JP" },
  { name: "Jersey", dial_code: "+44", code: "JE" },
  { name: "Jordan", dial_code: "+962", code: "JO" },
  { name: "Kazakhstan", dial_code: "+7 7", code: "KZ" },
  { name: "Kenya", dial_code: "+254", code: "KE" },
  { name: "Kiribati", dial_code: "+686", code: "KI" },
  {
    name: "Korea, Democratic People's Republic of",
    dial_code: "+850",
    code: "KP",
  },
  { name: "Korea, Republic of", dial_code: "+82", code: "KR" },
  { name: "Kuwait", dial_code: "+965", code: "KW" },
  { name: "Kyrgyzstan", dial_code: "+996", code: "KG" },
  {
    name: "Lao People's Democratic Republic",
    dial_code: "+856",
    code: "LA",
  },
  { name: "Latvia", dial_code: "+371", code: "LV" },
  { name: "Lebanon", dial_code: "+961", code: "LB" },
  { name: "Lesotho", dial_code: "+266", code: "LS" },
  { name: "Liberia", dial_code: "+231", code: "LR" },
  { name: "Libyan Arab Jamahiriya", dial_code: "+218", code: "LY" },
  { name: "Liechtenstein", dial_code: "+423", code: "LI" },
  { name: "Lithuania", dial_code: "+370", code: "LT" },
  { name: "Luxembourg", dial_code: "+352", code: "LU" },
  { name: "Macao", dial_code: "+853", code: "MO" },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    dial_code: "+389",
    code: "MK",
  },
  { name: "Madagascar", dial_code: "+261", code: "MG" },
  { name: "Malawi", dial_code: "+265", code: "MW" },
  { name: "Malaysia", dial_code: "+60", code: "MY" },
  { name: "Maldives", dial_code: "+960", code: "MV" },
  { name: "Mali", dial_code: "+223", code: "ML" },
  { name: "Malta", dial_code: "+356", code: "MT" },
  { name: "Marshall Islands", dial_code: "+692", code: "MH" },
  { name: "Martinique", dial_code: "+596", code: "MQ" },
  { name: "Mauritania", dial_code: "+222", code: "MR" },
  { name: "Mauritius", dial_code: "+230", code: "MU" },
  { name: "Mayotte", dial_code: "+262", code: "YT" },
  { name: "Mexico", dial_code: "+52", code: "MX" },
  {
    name: "Micronesia, Federated States of",
    dial_code: "+691",
    code: "FM",
  },
  { name: "Moldova, Republic of", dial_code: "+373", code: "MD" },
  { name: "Monaco", dial_code: "+377", code: "MC" },
  { name: "Mongolia", dial_code: "+976", code: "MN" },
  { name: "Montenegro", dial_code: "+382", code: "ME" },
  { name: "Montserrat", dial_code: "+1664", code: "MS" },
  { name: "Morocco", dial_code: "+212", code: "MA" },
  { name: "Mozambique", dial_code: "+258", code: "MZ" },
  { name: "Myanmar", dial_code: "+95", code: "MM" },
  { name: "Namibia", dial_code: "+264", code: "NA" },
  { name: "Nauru", dial_code: "+674", code: "NR" },
  { name: "Nepal", dial_code: "+977", code: "NP" },
  { name: "Netherlands", dial_code: "+31", code: "NL" },
  { name: "Netherlands Antilles", dial_code: "+599", code: "AN" },
  { name: "New Caledonia", dial_code: "+687", code: "NC" },
  { name: "New Zealand", dial_code: "+64", code: "NZ" },
  { name: "Nicaragua", dial_code: "+505", code: "NI" },
  { name: "Niger", dial_code: "+227", code: "NE" },
  { name: "Nigeria", dial_code: "+234", code: "NG" },
  { name: "Niue", dial_code: "+683", code: "NU" },
  { name: "Norfolk Island", dial_code: "+672", code: "NF" },
  { name: "Northern Mariana Islands", dial_code: "+1 670", code: "MP" },
  { name: "Norway", dial_code: "+47", code: "NO" },
  { name: "Oman", dial_code: "+968", code: "OM" },
  { name: "Pakistan", dial_code: "+92", code: "PK" },
  { name: "Palau", dial_code: "+680", code: "PW" },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  { name: "Panama", dial_code: "+507", code: "PA" },
  { name: "Papua New Guinea", dial_code: "+675", code: "PG" },
  { name: "Paraguay", dial_code: "+595", code: "PY" },
  { name: "Peru", dial_code: "+51", code: "PE" },
  { name: "Philippines", dial_code: "+63", code: "PH" },
  { name: "Pitcairn", dial_code: "+872", code: "PN" },
  { name: "Poland", dial_code: "+48", code: "PL" },
  { name: "Portugal", dial_code: "+351", code: "PT" },
  { name: "Puerto Rico", dial_code: "+1 939", code: "PR" },
  { name: "Qatar", dial_code: "+974", code: "QA" },
  { name: "Romania", dial_code: "+40", code: "RO" },
  { name: "Russia", dial_code: "+7", code: "RU" },
  { name: "Rwanda", dial_code: "+250", code: "RW" },
  { name: "Réunion", dial_code: "+262", code: "RE" },
  { name: "Saint Barthélemy", dial_code: "+590", code: "BL" },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  { name: "Saint Kitts and Nevis", dial_code: "+1 869", code: "KN" },
  { name: "Saint Lucia", dial_code: "+1 758", code: "LC" },
  { name: "Saint Martin", dial_code: "+590", code: "MF" },
  { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM" },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1 784",
    code: "VC",
  },
  { name: "Samoa", dial_code: "+685", code: "WS" },
  { name: "San Marino", dial_code: "+378", code: "SM" },
  { name: "Sao Tome and Principe", dial_code: "+239", code: "ST" },
  { name: "Saudi Arabia", dial_code: "+966", code: "SA" },
  { name: "Senegal", dial_code: "+221", code: "SN" },
  { name: "Serbia", dial_code: "+381", code: "RS" },
  { name: "Seychelles", dial_code: "+248", code: "SC" },
  { name: "Sierra Leone", dial_code: "+232", code: "SL" },
  { name: "Singapore", dial_code: "+65", code: "SG" },
  { name: "Slovakia", dial_code: "+421", code: "SK" },
  { name: "Slovenia", dial_code: "+386", code: "SI" },
  { name: "Solomon Islands", dial_code: "+677", code: "SB" },
  { name: "Somalia", dial_code: "+252", code: "SO" },
  { name: "South Africa", dial_code: "+27", code: "ZA" },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  { name: "Spain", dial_code: "+34", code: "ES" },
  { name: "Sri Lanka", dial_code: "+94", code: "LK" },
  { name: "Sudan", dial_code: "+249", code: "SD" },
  { name: "Suriname", dial_code: "+597", code: "SR" },
  { name: "Svalbard and Jan Mayen", dial_code: "+47", code: "SJ" },
  { name: "Swaziland", dial_code: "+268", code: "SZ" },
  { name: "Sweden", dial_code: "+46", code: "SE" },
  { name: "Switzerland", dial_code: "+41", code: "CH" },
  { name: "Syrian Arab Republic", dial_code: "+963", code: "SY" },
  { name: "Taiwan, Province of China", dial_code: "+886", code: "TW" },
  { name: "Tajikistan", dial_code: "+992", code: "TJ" },
  { name: "Tanzania, United Republic of", dial_code: "+255", code: "TZ" },
  { name: "Thailand", dial_code: "+66", code: "TH" },
  { name: "Timor-Leste", dial_code: "+670", code: "TL" },
  { name: "Togo", dial_code: "+228", code: "TG" },
  { name: "Tokelau", dial_code: "+690", code: "TK" },
  { name: "Tonga", dial_code: "+676", code: "TO" },
  { name: "Trinidad and Tobago", dial_code: "+1 868", code: "TT" },
  { name: "Tunisia", dial_code: "+216", code: "TN" },
  { name: "Turkey", dial_code: "+90", code: "TR" },
  { name: "Turkmenistan", dial_code: "+993", code: "TM" },
  { name: "Turks and Caicos Islands", dial_code: "+1 649", code: "TC" },
  { name: "Tuvalu", dial_code: "+688", code: "TV" },
  { name: "Uganda", dial_code: "+256", code: "UG" },
  { name: "Ukraine", dial_code: "+380", code: "UA" },
  { name: "United Arab Emirates", dial_code: "+971", code: "AE" },
  { name: "United Kingdom", dial_code: "+44", code: "GB" },
  { name: "United States", dial_code: "+1", code: "US" },
  { name: "Uruguay", dial_code: "+598", code: "UY" },
  { name: "Uzbekistan", dial_code: "+998", code: "UZ" },
  { name: "Vanuatu", dial_code: "+678", code: "VU" },
  {
    name: "Venezuela, Bolivarian Republic of",
    dial_code: "+58",
    code: "VE",
  },
  { name: "Viet Nam", dial_code: "+84", code: "VN" },
  { name: "Virgin Islands, British", dial_code: "+1 284", code: "VG" },
  { name: "Virgin Islands, U.S.", dial_code: "+1 340", code: "VI" },
  { name: "Wallis and Futuna", dial_code: "+681", code: "WF" },
  { name: "Yemen", dial_code: "+967", code: "YE" },
  { name: "Zambia", dial_code: "+260", code: "ZM" },
  { name: "Zimbabwe", dial_code: "+263", code: "ZW" },
  { name: "Åland Islands", dial_code: "+358", code: "AX" },
];

const duration = {
  day: 8.64e7,
  week: 6.048e8,
  month: 2.592e9,
  year: 3.154e10,
};

const status = {
  continue: 100,
  switching_protocols: 101,
  processing: 102,
  ok: 200,
  created: 201,
  accepted: 202,
  non_authoritative_information: 203,
  no_content: 204,
  reset_content: 205,
  partial_content: 206,
  multi_status: 207,
  already_reported: 208,
  im_used: 226,
  multiple_choices: 300,
  moved_permanently: 301,
  found: 302,
  see_other: 303,
  not_modified: 304,
  use_proxy: 305,
  temporary_redirect: 307,
  permanent_redirect: 308,
  bad_request: 400,
  unauthorized: 401,
  payment_required: 402,
  forbidden: 403,
  not_found: 404,
  method_not_allowed: 405,
  not_acceptable: 406,
  proxy_authentication_required: 407,
  request_timeout: 408,
  conflict: 409,
  gone: 410,
  length_required: 411,
  precondition_failed: 412,
  payload_too_large: 413,
  request_uri_too_long: 414,
  unsupported_media_type: 415,
  requested_range_not_satisfiable: 416,
  expectation_failed: 417,
  misdirected_request: 421,
  unprocessable_entity: 422,
  locked: 423,
  failed_dependency: 424,
  upgrade_required: 426,
  precondition_required: 428,
  too_many_requests: 429,
  request_header_fields_too_large: 431,
  connection_closed_without_response: 444,
  unavailable_for_legal_reasons: 451,
  client_closed_request: 499,
  internal_server_error: 500,
  not_implemented: 501,
  bad_gateway: 502,
  service_unavailable: 503,
  gateway_timeout: 504,
  http_version_not_supported: 505,
  variant_also_negotiates: 506,
  insufficient_storage: 507,
  loop_detected: 508,
  not_extended: 510,
  network_authentication_required: 511,
  network_connect_timeout_error: 599,
};

const weekDays = {
  sunday: { label: "Sunday", value: 0 },
  monday: { label: "Monday", value: 1 },
  tuesday: { label: "Tuesday", value: 2 },
  wednesday: { label: "Wednesday", value: 3 },
  thursday: { label: "Thursday", value: 4 },
  friday: { label: "Friday", value: 5 },
  saturday: { label: "Saturday", value: 6 },
};

const months = {
  january: { label: "January", value: 0 },
  february: { label: "February", value: 1 },
  march: { label: "March", value: 2 },
  april: { label: "April", value: 3 },
  may: { label: "May", value: 4 },
  june: { label: "June", value: 5 },
  july: { label: "July", value: 6 },
  august: { label: "August", value: 7 },
  september: { label: "September", value: 8 },
  october: { label: "October", value: 9 },
  november: { label: "November", value: 00 },
  december: { label: "December", value: 11 },
};

const islamicMonths = {
  alMuharram: { label_en: "al-Muharram", label_ar: "ٱلْمُحَرَّم", value: 0 },
  safar: { label_en: "Safar", label_ar: "صَفَر", value: 1 },
  rabiaAlAwwal: {
    label_en: "Rabia al-Awwal",
    label_ar: "رَبِيع ٱلْأَوَّل",
    value: 2,
  },
  rabiaAlThani: {
    label_en: "Rabia al-Thani",
    label_ar: "رَبِيع ٱلثَّانِ",
    value: 3,
  },
  jumadaAlAwwal: {
    label_en: "Jumada al-Awwal",
    label_ar: "جُمَادَىٰ ٱلْأُولَ",
    value: 4,
  },
  jumadaAlThani: {
    label_en: "Jumada al-Thani",
    label_ar: "جُمَادَىٰ ٱلثَّانِ",
    value: 5,
  },
  rajab: { label_en: "Rajab", label_ar: "رَجَب", value: 6 },
  shaaban: { label_en: "Shaaban", label_ar: "شَعْبَان", value: 7 },
  ramadan: { label_en: "Ramadan", label_ar: "رَمَضَان", value: 8 },
  shawwal: { label_en: "Shawwal", label_ar: "شَوَّال", value: 9 },
  zuAlQaida: { label_en: "Zu Al-Qaida", label_ar: "ذُو ٱلْقَعْدَة", value: 10 },
  zuAlHijja: { label_en: "Zu Al-Hijja", label_ar: "ذُو ٱلْحِجَّة", value: 11 },
};

const continents = {
  africa: { label: "Africa", code: "AF" },
  northAmerica: { label: "North America", code: "NA" },
  oceania: { label: "Oceania", code: "AF" },
  antarctica: { label: "Antarctica", code: "AN" },
  europe: { label: "Europe", code: "EU" },
  southAmerica: { label: "South America", code: "SA" },
};

module.exports = {
  languages,
  countries,
  duration,
  status,
  weekDays,
  months,
  islamicMonths,
  continents,
};
