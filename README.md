# Type 'string[]' is not assignable to type 'string'
This TypeScript code demonstrates a common type error: assigning an array of strings to a variable expecting a single string.
The function `greeter` expects a single string argument, but the code attempts to pass it an array of strings.  This results in a type error because TypeScript's type system correctly identifies the mismatch.
The solution involves either modifying the function to accept an array or modifying the input to provide a single string.