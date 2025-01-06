function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user));

let userSingle = "Jane Doe";
console.log(greeter(userSingle));