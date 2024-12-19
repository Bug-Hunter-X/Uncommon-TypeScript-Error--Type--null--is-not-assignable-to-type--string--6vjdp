# Uncommon TypeScript Error: Type 'null' is not assignable to type 'string'

This repository demonstrates an uncommon TypeScript error that can be difficult to detect. The error arises when a type guard is used to check for null or undefined values before accessing a property, but the type guard is not strict enough to prevent all possible null or undefined values.  This could lead to runtime exceptions, which TypeScript's type system is intended to help prevent.

## The Problem

The `printLength` function in `bug.ts` demonstrates the issue. While it checks for null or undefined, it doesn't completely handle scenarios where the function receives null or undefined. This can cause the program to throw a runtime error.

## The Solution

The `bugSolution.ts` file provides a corrected version of `printLength`.  The solution uses optional chaining (?.) to safely access the length property, avoiding the runtime error.  The optional chaining operator short-circuits the property access if the value is null or undefined.  Alternatively, a more robust type guard could be implemented, checking the typeof value to ensure it's indeed a string.