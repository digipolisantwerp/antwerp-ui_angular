import { toUpperCase } from "./to-uppercase";

describe("toUppercase", () => {
    it("should uppercase the input string", () => {
        expect(toUpperCase("test")).toEqual("TEST");
    });
});