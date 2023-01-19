const { default: CodersArray } = require("./CodersArray");

describe("Given the push method of the CodersArray class", () => {
  describe("When it receives 10", () => {
    test("Then it should add a property with value 10 to an object instance of the CodersArray class", () => {
      const codersArrayObjectInstance = new CodersArray();
      const argument = 10;
      const expectedObject = { 0: argument, length: 1 };

      codersArrayObjectInstance.push(argument);

      expect(codersArrayObjectInstance).toEqual(expectedObject);
    });
  });
});