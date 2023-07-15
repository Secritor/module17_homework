import { multiply, countDown } from "../index.js";

// xdescribe("test multiply", () => {
//   it("multiply 1 * 0 to equal 0", () => {
//     const res = multiply(1, 0);
//     expect(res).toBe(0);
//   }),
//     it("multiply 1 * 1 to equal 1", () => {
//       const res = multiply(1, 1);
//       expect(res).toBe(1);
//     });
// });

// xdescribe("test reverseString function", () => {
//   it("ECMAscript2018 equeal reverse versions, add save UpperCase `ECMA`", () => {
//     const value = reverseString("ECMAscript2018");
//     expect(value).toBe("8102tpircsAMCE");
//   });

//   it("some number dont equeal string", () => {
//     const value = reverseString(1234);
//     expect(value).toBe("isn`t string!");
//   });

//   it("some boolean dont equeal string", () => {
//     const value = reverseString(true);
//     expect(value).toBe(undefined);
//   });
// });

describe("test countDown", () => {
  it("output in console, numbers 10 to 0", () => {
    const value = countDown(5);
    expect(value).toBe(console.log());
  });
  it("output in console, input boolean", () => {
    const value = countDown(5);
    expect(value).toBe(0);
  });
  //corner cases
  it("return negative num, input negative number 10", () => {
    const value = countDown(-10);
    expect(value).toBe(console.log(-20));
  });
  it("output in console, number 0", () => {
    const value = countDown(0);
    expect(value).toBe(0);
  });
  it("output in console, max_value", () => {
    const value = countDown(Number.MAX_VALUE);
    expect(value).toBe(Number.MAX_VALUE);
  });
});
