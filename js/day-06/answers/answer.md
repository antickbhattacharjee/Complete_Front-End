# Day 06 Answer

## Explanation
We combine Arrays (lists) with Objects (dictionaries). This is the standard data structure for modern software. We use Array methods (`forEach`, `filter`) and inside those methods, we access the Object properties (`employee.name`, `employee.department`).

## Complete Solution (Assignment 3)

### `script.js`
```javascript
// Database of Employees (Array of Objects)
const employees = [
    { name: "Alice", department: "IT", salary: 75000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 80000 }
];

// 1. Loop and print badges
console.log("--- Employee Badges ---");
employees.forEach((emp) => {
    console.log(`${emp.name} works in ${emp.department} and makes $${emp.salary}.`);
});

// 2. Filter for IT Department
const itDepartment = employees.filter((emp) => {
    return emp.department === "IT";
});

console.log("--- IT Department Roster ---");
console.log(itDepartment);
```

## Expected Output (in Console)
```text
--- Employee Badges ---
Alice works in IT and makes $75000.
Bob works in HR and makes $50000.
Charlie works in IT and makes $80000.
--- IT Department Roster ---
[{name: "Alice"...}, {name: "Charlie"...}]
```
