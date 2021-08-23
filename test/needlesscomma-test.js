const { expect } = require("chai");
const { needlessComma } = require("../needlesscomma.js");

describe("needlessComma", function () {
  it("Should throw an error if not given a string input", () => {
    const invalidInput = needlessComma.bind(null, 42);
    const validInput = needlessComma.bind(null, "A cat knocked over my glass.");
    expect(invalidInput).to.throw();
    expect(validInput).to.not.throw();
  });

  it("Should return a string", () => {
    const validReturnString = needlessComma("A cat knocked over my glass.");
    expect(typeof validReturnString).to.equal("string");
  });

  it("Should always return a comma for sentences with two or more words", () => {
    const simpleSentence = "A cat.";
    let invalidResult = false;

    for (let idx = 0; idx < 50; idx += 1) {
      if (needlessComma(simpleSentence).indexOf(",") === -1) {
        invalidResult = true;
      }
    }
    expect(invalidResult).to.equal(false);
  });

  it("Should complain if the sentence is less than two words,", () => {
    const complaint = `Sentence too, short. Please enter, two or, more words.`;
    let shortSentence = needlessComma("Cat!");
    expect(shortSentence).to.equal(complaint);
  });
});
