function needlessComma(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid, input. Please enter, a string.");
  }

  const wordsArray = str.split(" ");
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

function insertComma(word) {}

console.log(needlessComma("A cat."));
