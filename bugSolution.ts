function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result will be 8
result = subtract(10, 4); // result will be 6

//This is not an error, but could cause unexpected behavior.
//The following function uses optional chaining to check for null or undefined before accessing the property. 
//If the value is undefined or null, it will return undefined.
function printLength(value: string | null | undefined): void {
  console.log(value?.length);
}

//This code will now run without error
printLength(null); // logs 'undefined'
printLength("hello"); //logs 5