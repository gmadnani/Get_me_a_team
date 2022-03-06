const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const fs = require("fs");
const inquirer = require("inquirer");
const emailValidator = require("email-validator");

const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");
const buildTeam = require("./src/generateTeam.js");

membersArray = [];

function generateQuestions() {
  //function to check the role
  function whichRole() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee do you want to add",
          name: "addEmployeePrompt",
          choices: ["Manager", "Engineer", "Intern", "finish building team"],
        },
      ])
      .then(function (userInput) {
        //switch case for roles
        switch (userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          //when default is selected go the generateTeam function
          default:
            generateTeam();
        }
      });
  }

  //function to add a manager to the array
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Manager's name:",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Please enter manager's name.";
            }
          },
        },

        {
          type: "input",
          name: "managerId",
          message: "Manager's employee ID number:",
          validate: (value) => {
            if (value && !isNaN(value)) {
              return true;
            } else {
              return "Please enter manager's id number.";
            }
          },
        },

        {
          type: "input",
          name: "managerEmail",
          message: "Manager's email address:",
          validate: (value) => {
            if (emailValidator.validate(value)) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Manager's office number:",
          validate: (value) => {
            if (value && !isNaN(value)) {
              return true;
            } else {
              return "Please enter manager's office number.";
            }
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );

        //pushing it to the array
        membersArray.push(manager);

        //re-run the function
        whichRole();
      });
  }

  //function to add an engineer to the array
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Engineer's name:",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Please enter engineer's name.";
            }
          },
        },

        {
          type: "input",
          name: "engineerId",
          message: "Engineer's employee ID number:",
          validate: (value) => {
            if (value && !isNaN(value)) {
              return true;
            } else {
              return "Please enter engineer's id number.";
            }
          },
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "Engineer's email address:",
          validate: (value) => {
            if (emailValidator.validate(value)) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "Engineer's GitHub username:",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Please enter engineer's GitHub.";
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );

        //pushing it to the array
        membersArray.push(engineer);

        //re-run the function
        whichRole();
      });
  }

  //function to add an intern to the array
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Intern's name:",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Please enter intern's name.";
            }
          },
        },

        {
          type: "input",
          name: "internId",
          message: "Intern's employee ID number:",
          validate: (value) => {
            if (value && !isNaN(value)) {
              return true;
            } else {
              return "Please enter intern's id number.";
            }
          },
        },

        {
          type: "input",
          name: "internEmail",
          message: "Intern's email address:",
          validate: (value) => {
            if (emailValidator.validate(value)) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },

        {
          type: "input",
          name: "internSchool",
          message: "Intern attend:",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return "Please enter the name of school.";
            }
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );

        //pushing it to the array
        membersArray.push(intern);

        //re-run the function
        whichRole();
      });
  }

  //function to write to the file
  function generateTeam() {
    console.log("Team Done!");
    fs.writeFileSync(outputPath, buildTeam(membersArray));
  }

  //run function first time
  whichRole();
}

generateQuestions();
