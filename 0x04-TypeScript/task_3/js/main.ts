// main.ts

/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Creating a new row
const obj: RowElement = { firstName: "Guillaume", lastName: "Salva" };

// Inserting the row
const newRowID: RowID = CRUD.insertRow(obj);
console.log(`Inserted Row ID: ${newRowID}`);

// Updating the row with an age
const updatedRow: RowElement = { ...obj, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID ${newRowID}`, updatedRow);

// Deleting the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID ${newRowID}`);
