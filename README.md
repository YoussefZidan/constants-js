## Constants.js <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Available Constants](#available-constants)

## Installation

```
npm i constants-js
```

## Usage

```js
// ES6
import { languages } from "constants-js";

console.log(languages);
```

## Available Constants

| Name                  | Variable Name | Type   | Example Output                                                                     |
| --------------------- | ------------- | ------ | ---------------------------------------------------------------------------------- |
| Continents            | continents    | Array  | [{ africa: { label: "Africa", code: "AF" },... ]                                   |
| Countries             | countries     | Array  | [{ name: "Afghanistan", dial_code: "+93", code: "AF" }, ...]                       |
| Duration              | duration      | Array  | [ { label: "day", value: 8.64e7 },... ]                                            |
| Islamic Months        | islamicMonths | Array  | [ { label_en: "al-Muharram", label_ar: "ٱلْمُحَرَّم", value: 0 },...]                  |
| Languages             | languages     | Array  | [{ code: "ab", name: "Abkhazian" }, ...]                                           |
| Lower Case Characters | lowerCases    | Array  | ["a", "b", "c",...]                                                                |
| Months                | months        | Array  | [{ label: "January", value: 0 }, ... ]                                             |
| Numbers               | numbers       | Array  | ["0", "1", "2",...]                                                                |
| special Characters    | specialChars  | Array  | ['!', '"', '#',...]                                                                |
| Upper Case Characters | upperCases    | Array  | ["A", "B", "C",...]                                                                |
| Week Days             | weekDays      | Array  | [{ label: "Sunday", value: 0 }, ... ]                                              |
| Status                | status        | Object | { continue: 100, switching_protocols: 101, processing: 102 }                       |
