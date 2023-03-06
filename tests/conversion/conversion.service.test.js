const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

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
  it("should fail if the property <number> is missing", async () => {
    await expect(conversionService.convertNumber({})).to.be.rejectedWith(
      `${MISSING_PROPERTY} number`
    );
  });

  it("should fail if the number is not a valid number", async () => {
    await expect(
      conversionService.convertNumber({ number: "90G" })
    ).to.be.rejectedWith(`${CAN_ONLY_CONVERT_NUMBER}`);
  });

  it("should fail if the number is under 0", async () => {
    await expect(
      conversionService.convertNumber({ number: -10 })
    ).to.be.rejectedWith(`${CONVERT_NUMBER_GAP}`);
  });

  it("should fail if the number is above 100", async () => {
    await expect(
      conversionService.convertNumber({ number: 101 })
    ).to.be.rejectedWith(`${CONVERT_NUMBER_GAP}`);
  });

  it("should succeed with a special message if the number is 0", async () => {
    const message = await expect(conversionService.convertNumber({ number: 0 }))
      .to.be.fulfilled;
    expect(message).to.eql(ABOUT_ZERO);
  });

  it("should succeed if the number is a valid number", async () => {
    const convertedNumber = await expect(
      conversionService.convertNumber({ number: 90 })
    ).to.be.fulfilled;

    expect(convertedNumber).to.eql("XC");
  });

  it("should succeed if the number is a valid number", async () => {
    const convertedNumber = await expect(
      conversionService.convertNumber({ number: 12 })
    ).to.be.fulfilled;

    expect(convertedNumber).to.eql("XII");
  });

  it("should succeed if the number is a valid number", async () => {
    const convertedNumber = await expect(
      conversionService.convertNumber({ number: 49 })
    ).to.be.fulfilled;

    expect(convertedNumber).to.eql("XLIX");
  });
});
