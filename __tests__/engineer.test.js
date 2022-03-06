const Engineer = require("../lib/engineer");

//test if it adds the username
test("Add github username", () => {
    const username = "gmadnani";
    const employeeInstance = new Engineer("Girish", 1, "girishmadnani05@gmail.com", username);
    expect(employeeInstance.github).toBe(username);
});

//test if it returns the Github username
test("Testing getGithub will return username", () => {
    const username = "gmadnani";
    const employeeInstance = new Engineer("Girish", 1, "girishmadnani05@gmail.com", username);
    expect(employeeInstance.getGithub()).toBe(username);
});

//testing if the role is engineer
test("Testing role", () => {
    const role = "Engineer";
    const employeeInstance = new Engineer("Girish", 1, "girishmadnani05@gmail.com", "gmadnani");
    expect(employeeInstance.getRole()).toBe(role);
});