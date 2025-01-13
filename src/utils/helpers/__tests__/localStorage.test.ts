import { getFromLocalStorage, setToLocalStorage } from "../localStorage";
describe("Local Storage Functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("setToLocalStorage", () => {
    it("should set an item in local storage", () => {
      setToLocalStorage("testKey", { name: "test" });
      const result = localStorage.getItem("testKey");
      expect(result).toBe(JSON.stringify({ name: "test" }));
    });
  });

  describe("getFromLocalStorage", () => {
    it("should return parsed value from local storage", () => {
      localStorage.setItem("testKey", JSON.stringify({ name: "test" }));
      const result = getFromLocalStorage("testKey");
      expect(result).toEqual({ name: "test" });
    });

    it("should return null if the item does not exist", () => {
      const result = getFromLocalStorage("nonExistentKey");
      expect(result).toBeNull();
    });
  });
});
