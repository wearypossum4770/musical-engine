import { readFileSync, writeFile, writeFileSync } from "fs";

let openSpan = /\<span.*\"\>/gm;
let closeSpan = /\<\/span\>/gm;
let openDiv = /\<div.*\"\>/gm;
let closeDiv = /\<\/div\>/gm;
let doc = readFileSync("./chapter.html", "utf-8");
doc = doc.replaceAll(openSpan, "");
doc = doc.replaceAll(closeSpan, "");
doc = doc.replaceAll(openDiv, "");
doc = doc.replaceAll(closeDiv, "");
writeFileSync("./parsed_chapter.html", doc);
let firstname = "Genryūsai";
console.log(firstname.match(/\w+/));
let unicode = [
  "\u00c4",
  "\u00e4",
  "\u00d6",
  "\u00f6",
  "\u00dc",
  "\u00fc",
  "\u00df",
];
const unicodeToChar = text => text.toString(16);
const charToUnicode = text => text.charCodeAt();
let blah = "Ö".charCodeAt();
console.log(blah);
console.log(unicodeToChar(unicode[0]));
console.log(unicode[0].toString(16));
console.log(charToUnicode("Ö"));
