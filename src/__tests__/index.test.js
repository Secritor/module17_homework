import { multiply } from "../index.js";

xdescribe("test multiply", () => {
  it("multiply 1 * 0 to equal 0", () => {
    const res = multiply(1, 0);
    expect(res).toBe(0);
  }),
    it("multiply 1 * 1 to equal 1", () => {
      const res = multiply(1, 1);
      expect(res).toBe(1);
    });
});
