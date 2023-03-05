const expect = require("chai").expect;

const {
  ABOUT_ZERO,
  CAN_ONLY_CONVERT_NUMBER,
  CONVERT_NUMBER_GAP,
} = require("../../src/conversion/conversion.message");
const {
  MISSING_PROPERTY,
} = require("../../src/helpers/messages/common-error.message");
const conversionService = require("../../src/conversion/conversion.service");

describe("convert to number", () => {
  it("should fail if the property <number> is missing", () => {
    expect(() => conversionService.convertNumber({})).throws(
      `${MISSING_PROPERTY} number`
    );
  });

  it("should fail if the number is not a valid number", () => {
    expect(() => conversionService.convertNumber({ number: "90G" })).throws(
      CAN_ONLY_CONVERT_NUMBER
    );
  });

  it("should fail if the number is under 0", () => {
    expect(() => conversionService.convertNumber({ number: -10 })).throws(
      CONVERT_NUMBER_GAP
    );
  });

  it("should fail if the number is above 100", () => {
    expect(() => conversionService.convertNumber({ number: 101 })).throws(
      CONVERT_NUMBER_GAP
    );
  });

  it("should succeed with a special message if the number is 0", () => {
    expect(conversionService.convertNumber({ number: 0 })).to.be.equal(
      ABOUT_ZERO
    );
  });

  it("should succeed if the number is a valid number", () => {
    expect(conversionService.convertNumber({ number: 90 })).to.be.equal("XC");
  });

  it("should succeed if the number is a valid number", () => {
    expect(conversionService.convertNumber({ number: 12 })).to.be.equal("XII");
  });

  it("should succeed if the number is a valid number", () => {
    expect(conversionService.convertNumber({ number: 49 })).to.be.equal("XLIX");
  });
});
