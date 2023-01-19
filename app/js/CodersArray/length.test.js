import CodersArray from "./CodersArray";

describe("Given the constructor method of the CodersArray class", () => {
  describe("When it receives 1, 2, 'words', true", () => {
    test("Then it should construct { '0': 1, '1': 2, '2': 'words', '3': true, 'length': 4 }", () => {
      const element1 = 1;
      const element2 = 2;
      const element3 = "words";
      const element4 = true;
      const expectedObject = { 0: 1, 1: 2, 2: "words", 3: true, length: 4 };

      const object = new CodersArray(element1, element2, element3, element4);

      expect(object).toEqual(expectedObject);
    });
  });
});
