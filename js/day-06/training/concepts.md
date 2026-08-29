# Objects & JSON

## 1. Concept Explanation
If an Array is a *list* of data, an **Object** is a *dictionary* of data. 
Objects allow you to group related variables together into a single package using "Key-Value" pairs.

## 2. Syntax
```javascript
// Creating an object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isAdmin: false
};

// Accessing properties (Dot Notation)
console.log(user.firstName); // "John"

// Modifying properties
user.age = 31;
```

## 3. Explanation of Syntax
- `{}`: Curly braces define an object.
- `firstName`: This is the **Key** (the property name).
- `"John"`: This is the **Value**.
- Keys and values are separated by a colon `:`, and properties are separated by commas `,`.

## 4. Examples

### Practical Example (Array of Objects)
This is how data looks in 99% of web applications.
```javascript
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
];

// Loop through the array, access the object properties!
products.forEach(product => {
    console.log(`${product.name} costs $${product.price}`);
});
```

### JSON (JavaScript Object Notation)
JSON is a text format used to send data across the internet. It looks exactly like JS Objects, except **all keys must be in double quotes**.
```json
{
    "name": "John",
    "age": 30
}
```
You can convert JSON text into a real JS object using `JSON.parse(data)`.

## 5. Common Mistakes
- **Forgetting the comma**: If you forget the comma at the end of a property line, JS will throw a Syntax Error.
- **Using `=` instead of `:`**: Inside an object, you define properties with a colon `name: "John"`. You only use `=` when defining the variable itself `const user = {...}`.

## 6. Best Practices
- Keep your object keys in camelCase, just like standard variables.

## 7. Trainer Notes
- Emphasize that while arrays use numbers (indexes) to find data, objects use names (keys) to find data. You don't need to know *where* the age is in the object, you just ask for `user.age`.

## 8. Quick Revision
- `{}` creates an object.
- Stores data in `key: value` pairs.
- Access data using `object.key`.
- JSON is the text-based version of objects used for web APIs.
