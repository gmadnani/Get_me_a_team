const Manager = require("../lib/manager");

test("Can create an office number.", () => {
    const testNumber = 5;
    const employeeInstance = new Manager("Girish", 1 , "girishmadnani05@gmail.com", testNumber);
    expect(employeeInstance.officeNumber).toBe(testNumber);
});

test("Testing officeNumber will return office number.", () => {
    const returnNumber = 5;
    const employeeInstance = new Manager("Girish", 1 , "girishmadnani05@gmail.com", returnNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(returnNumber);
});

test("Testing role.", () => {
    const role = "Manager";
    const employeeInstance = new Manager("Girish", 1, "girishmadnani05@gmail.com", 5);
    expect(employeeInstance.getRole()).toBe(role);
});