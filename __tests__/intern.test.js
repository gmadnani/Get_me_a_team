const Intern = require("../lib/intern");

test("Can create school.", () => {
    const testSchool = "XYZ School";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "XYZ School";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const role = "Intern";
    const employeeInstance = new Intern("Girish", 1, "girishmadnani05@gmail.com", "XYZ School");
    expect(employeeInstance.getRole()).toBe(role);
});