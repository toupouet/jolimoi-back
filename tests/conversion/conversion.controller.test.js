const request = require("supertest");
const app = require("../../src/server");

describe("/POST", () => {
  it("should succeed for the post method", async () => {
    await request(app).post("/convert-number").send({ number: 10 }).expect(200);
  });
});
