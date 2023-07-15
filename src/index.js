// export function multiply(a, b) {
//   return a * b;
// }

// function reverseString(str) {
//   if (typeof str === "string") {
//     return str.split("").reverse().join("");
//   } else {
//     console.log("isn`t string!");
//   }
// }

export function countDown(n) {
  if (n === Number.MAX_VALUE) {
    console.log("are you insane? stop attacking immediately!");
    return Number.MAX_VALUE;
  } else if (n === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }

  for (n; n >= 0; n--) {
    console.log(n);
  }
}
