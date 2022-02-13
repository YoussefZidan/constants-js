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
// Node
const { languages } = require("constants-js");

// ES6
import { languages } from "constants-js";

console.log(languages);
```

## Available Constants

| Name                  | Variable Name | Type   | Example Output                                               |
| --------------------- | ------------- | ------ | ------------------------------------------------------------ |
| Continents            | continents    | Object | { africa: { label: "Africa", code: "AF" },... }              |
| Countries             | countries     | Array  | [{ name: "Afghanistan", dial_code: "+93", code: "AF" }, ...] |
| Duration              | duration      | Object | { day: 8.64e7,... }                                          |
| Islamic Months        | islamicMonths | Object | { day: 8.64e7,... }                                          |
| Languages             | languages     | Array  | [{ code: "ab", name: "Abkhazian" }, ...]                     |
| Lower Case Characters | lowerCases    | Array  | ["a", "b", "c",...]                                          |
| Months                | months        | Object | { january: { label: "January", value: 0 }, ... }             |
| Numbers               | numbers       | Array  | ["0", "1", "2",...]                                          |
| special Characters    | specialChars  | Array  | ['!', '"', '#',...]                                          |
| Status                | status        | Object | { continue: 100, switching_protocols: 101, processing: 102 } |
| Upper Case Characters | upperCases    | Array  | ["a", "b", "c",...]                                          |
| Week Days             | weekDays      | Object | { sunday: { label: "Sunday", value: 0 }, ... }               |
