const Intern = require("../lib/intern");

//test if it adds the school name
test("Add school name", () => {
    const School = "XYZ School";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", School);
    expect(employeeInstance.school).toBe(School);
});

//test if it returns the school name
test("Testing school name will return School", () => {
    const School = "XYZ School";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", School);
    expect(employeeInstance.getSchool()).toBe(School);
});

//testing if the role is intern
test("Testing role", () => {
    const role = "Intern";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", "XYZ School");
    expect(employeeInstance.getRole()).toBe(role);
});