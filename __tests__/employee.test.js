const Employee = require("../lib/Employee");

//test for adding an employee 
test("Add a new employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

//test if name is added
test("Testing name", () => {
    const name = "Girish";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

//test if ID is added 
test("Testing ID.", () => {
    const ID = 1;
    const employeeInstance = new Employee("Girish", ID);
    expect(employeeInstance.id).toBe(ID);
})

//test if email is added 
test("Testing email", () => {
    const email = "girishmadnani05@gmail.com";
    const employeeInstance = new Employee("Girish", 2, email);
    expect(employeeInstance.email).toBe(email);
})
    
//test if it return the name
test("getName method returns name", () => {
    const name = "Girish";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.getName()).toBe(name);
})

//test if it return the ID
test("getID method returns ID", () => {
    const ID = 1;
    const employeeInstance = new Employee("Girish", ID);
    expect(employeeInstance.getId()).toBe(ID);
})

//test if it return the email
test("getEmail method returns email", () => {
    const email = "girishmadnani05@gmail.com";
    const employeeInstance = new Employee("Girish", 1, email);
    expect(employeeInstance.getEmail()).toBe(email);
})

//test if it return the role of the employee
test("Testing role", () => {
    const role = "Employee";
    const employeeInstance = new Employee("Girish", 1, "girishmadnani05@gmail.com");
    expect(employeeInstance.getRole()).toBe(role);
})