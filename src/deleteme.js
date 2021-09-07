let firstname="Genryūsai"
console.log(firstname.match(/\w+/))
let unicode = ["\u00c4", "\u00e4", "\u00d6", "\u00f6","\u00dc", "\u00fc" ,"\u00df"]
const unicodeToChar = text =>text.toString(16)
const charToUnicode = text =>text.charCodeAt()
let blah = "Ö".charCodeAt()
console.log(blah)
console.log(unicodeToChar(unicode[0]))
console.log(unicode[0].toString(16))
console.log(charToUnicode("Ö"))