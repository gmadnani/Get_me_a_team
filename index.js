const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const inquirer = require("inquirer");

membersArray = []


function generateQuestions() {
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

          default:
            generateTeam();
        }
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Manager's name:",
        },

        {
          type: "input",
          name: "managerId",
          message: "Manager's employee ID number:",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "Manager's email address:",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Manager's office number:",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        membersArray.push(manager);
        whichRole();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Engineer's name:",
        },

        {
          type: "input",
          name: "engineerId",
          message: "Engineer's employee ID number:",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "Engineer's email address:",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "Engineer's GitHub username:",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        membersArray.push(engineer);
        whichRole();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Intern's name:",
        },

        {
          type: "number",
          name: "internId",
          message: "Intern's employee ID number:",
        },

        {
          type: "input",
          name: "internEmail",
          message: "Intern's email address:",
        },

        {
          type: "input",
          name: "internSchool",
          message: "Intern attend:",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        membersArray.push(intern);
        whichRole();
      });
  }

  function generateTeam() {
    console.log("Team created!");
  }

whichRole();
}

generateQuestions();
