const Employee = require("../lib/Employee");

test("Add a new employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name", () => {
    const name = "Girish";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const ID = 1;
    const employeeInstance = new Employee("Girish", ID);
    expect(employeeInstance.id).toBe(ID);
})

test("Testing email", () => {
    const email = "girishmadnani05@gmail.com";
    const employeeInstance = new Employee("Girish", 2, email);
    expect(employeeInstance.email).toBe(email);
})
    

test("getName method returns name", () => {
    const name = "Girish";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.getName()).toBe(name);
})

test("getID method returns ID", () => {
    const ID = 1;
    const employeeInstance = new Employee("Girish", ID);
    expect(employeeInstance.getId()).toBe(ID);
})

test("getEmail method returns email", () => {
    const email = "girishmadnani05@gmail.com";
    const employeeInstance = new Employee("Girish", 1, email);
    expect(employeeInstance.getEmail()).toBe(email);
})

test("Testing role", () => {
    const role = "Employee";
    const employeeInstance = new Employee("Girish", 1, "girishmadnani05@gmail.com");
    expect(employeeInstance.getRole()).toBe(role);
})