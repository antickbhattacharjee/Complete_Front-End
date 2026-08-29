const employees = [
    { name: "Alice", department: "IT", salary: 75000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 80000 }
];

console.log("--- Employee Badges ---");
employees.forEach((emp) => {
    console.log(`${emp.name} works in ${emp.department} and makes $${emp.salary}.`);
});

const itDepartment = employees.filter((emp) => {
    return emp.department === "IT";
});

console.log("--- IT Department Roster ---");
console.log(itDepartment);
