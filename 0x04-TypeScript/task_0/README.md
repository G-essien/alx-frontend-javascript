# TypeScript Setup and Student Table Project

## Overview
This project demonstrates how to set up TypeScript in a Visual Studio Code (VSCode) environment and use it to create a simple student management application. The application involves rendering a table with student information using TypeScript and Vanilla JavaScript. 

## Features
- TypeScript integration for type safety.
- Webpack configuration for module bundling.
- ESLint for maintaining code quality.
- Rendering a dynamic table displaying student details using TypeScript and Vanilla JavaScript.

## File Structure
```
project-directory/
├── task_0/
│   ├── js/
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc.js
│   ├── webpack.config.js
│   └── dist/
│       └── bundle.js
└── README.md
```

## Configuration Files
### 1. **package.json**
Manages project dependencies and scripts for building, running, and testing the application.
```json
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

### 2. **tsconfig.json**
Specifies TypeScript compiler options.
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}
```

### 3. **.eslintrc.js**
Configures ESLint for TypeScript.
```javascript
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

### 4. **webpack.config.js**
Defines Webpack settings for bundling and development.
```javascript
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

## Steps to Run the Project
1. Clone the repository and navigate to the `task_0` directory:
   ```bash
   git clone <repository-url>
   cd task_0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start-dev
   ```

4. Open the project in your browser at `http://localhost:8080`.

## Project Code Example
### **Interface Definition**
Defines the `Student` interface and sample data.
```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];
```

### **Table Rendering**
Renders a dynamic HTML table using Vanilla JavaScript.
```typescript
const table = document.createElement('table');
studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);
```

## Conclusion
This project illustrates the basics of setting up TypeScript with VSCode and building a simple web application. The integration of Webpack, ESLint, and TypeScript ensures a robust and maintainable development workflow.
