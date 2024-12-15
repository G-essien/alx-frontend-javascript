// Directory: task_1
// Files: package.json, tsconfig.json, webpack.config.js

// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties of any type
}

// adding teacher example
const teacher1: Teacher={
  firstName: 'John',
  lastName: 'Akrugu',
  fullTimeEmployee: true,
  location: 'UK',
  contract: false
}
console.log(teacher1);

// Define the Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Define the printTeacher function interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of the printTeacher function
console.log(printTeacher("John", "Doe")); // Expected output: "J. Doe"

// Define the constructor interface for the Student class
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for the StudentClass
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of the StudentClass
const student = new StudentClass("Jane", "Smith");
console.log(student.displayName()); // Expected output: "Jane"
console.log(student.workOnHomework()); // Expected output: "Currently working"
