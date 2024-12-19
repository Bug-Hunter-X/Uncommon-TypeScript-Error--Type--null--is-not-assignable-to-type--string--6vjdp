function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result will be 8
result = subtract(10, 4); // result will be 6

//This is not an error, but could cause unexpected behavior.
//The following function uses a type guard to check for null or undefined before accessing the property. However, if the value is undefined or null, it will not be caught by this guard.
function printLength(value: string | null | undefined): void {
  if (value != null) {
    console.log(value.length);
  }
}

//This is an uncommon error in typescript which could be very difficult to detect.
//This error is a type error because the function printLength is trying to access the length property of value which is possibly null or undefined.
//To fix this error, we need to use a more strict type guard or check the value of the variable before accessing its properties.
printLength(null);