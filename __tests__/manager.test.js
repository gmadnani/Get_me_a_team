const Manager = require("../lib/manager");

test("Add office number.", () => {
    const testNumber = 5;
    const employeeInstance = new Manager("Girish", 1 , "girishmadnani05@gmail.com", testNumber);
    expect(employeeInstance.officeNumber).toBe(testNumber);
});

test("Testing officeNumber will return the test number.", () => {
    const testNumber = 5;
    const employeeInstance = new Manager("Girish", 1 , "girishmadnani05@gmail.com", testNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testNumber);
});

test("Testing role.", () => {
    const role = "Manager";
    const employeeInstance = new Manager("Girish", 1, "girishmadnani05@gmail.com", 5);
    expect(employeeInstance.getRole()).toBe(role);
});