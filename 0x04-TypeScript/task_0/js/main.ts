// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Create and render the table
  const body = document.querySelector("body");
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableHeaderRow = document.createElement("tr");
  
  // Create table headers
  const header1 = document.createElement("th");
  header1.textContent = "First Name";
  const header2 = document.createElement("th");
  header2.textContent = "Location";
  tableHeaderRow.appendChild(header1);
  tableHeaderRow.appendChild(header2);
  tableHead.appendChild(tableHeaderRow);
  table.appendChild(tableHead);
  
  // Create table rows for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const cell1 = document.createElement("td");
    cell1.textContent = student.firstName;
  
    const cell2 = document.createElement("td");
    cell2.textContent = student.location;
  
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
  });
  
  // Append the table to the body
  body?.appendChild(table);
  