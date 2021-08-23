function needlessComma(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid, input. Please enter, a string.");
  }

  const wordsArray = str.split(" ");

  if (wordsArray.length < 2) {
    return `Sentence too, short. Please enter, two or, more words.`;
  }

  let commaInserted = false;
  let result;

  while (!commaInserted) {
    result = wordsArray
      .map((word, idx) => {
        if (idx === wordsArray.length - 1) {
          return word;
        }

        const rand = Math.floor(Math.random() * 2);

        if (rand && !commaInserted) commaInserted = true;

        return rand ? word + "," : word;
      })
      .join(" ");
  }

  return result;
}

module.exports = { needlessComma };
