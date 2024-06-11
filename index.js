#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Class representing a student with a name property
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
// Class representing a person with a list of students
class Person {
    students = [];
    //Method to add a student to the list
    addStudent(obj) {
        this.students.push(obj);
    }
}
// Creating an instance of the Person class
const person = new Person();
// Function to start the program
const programStart = async (person) => {
    console.log(chalk.bold(`\t\t=========================================================`));
    console.log(chalk.redBright.bold("\n\t\t          My OOP Project"));
    console.log(chalk.bold.blue.bold("\n\t\t           Welcome guest!  \n"));
    console.log(chalk.bold(`\t\t===========================================================`));
    do {
        // Asking user which person to talk to
        const { select } = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Would you like to take?",
            choices: ["Tea", "coffee", "Exit"]
        });
        if (select === "Tea") {
            console.log(chalk.green(`You like tea`));
            console.log(chalk.yellow("Hello! Hope you are doing well!"));
        }
        // If user chooses Student
        if (select === "coffee") {
            const { student } = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which person do you want to call?"
            });
            // Finding the student
            let selectedStudent = person.students.find((value) => value.name === student);
            // If student not found, add new student to the list
            if (!selectedStudent) {
                selectedStudent = new Student(student);
                person.addStudent(selectedStudent);
                console.log(chalk.yellow(`Hi, I am ${chalk.bold.cyan(selectedStudent.name)}, and I'm good.`));
            }
            else {
                console.log(chalk.yellow(`I am ${chalk.bold.green(selectedStudent.name)}, and I'm doing well.`));
            }
        }
        // If user chooses Exit
        if (select === "Exit") {
            console.log(chalk.bold.magenta("Goodbye!"));
            process.exit();
        }
    } while (true);
};
programStart(person);
