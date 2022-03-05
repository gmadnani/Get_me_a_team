const Intern = require("../lib/intern");

test("Add school name", () => {
    const School = "XYZ School";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", School);
    expect(employeeInstance.school).toBe(School);
});

test("Testing school name will return School", () => {
    const School = "XYZ School";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", School);
    expect(employeeInstance.getSchool()).toBe(School);
});

test("Testing role.", () => {
    const role = "Intern";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", "XYZ School");
    expect(employeeInstance.getRole()).toBe(role);
});