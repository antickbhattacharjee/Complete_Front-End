# Local Storage & Fetch API

## 1. Concept Explanation
**Local Storage** is a mini-database inside the user's browser. If a user refreshes the page, standard JS variables are wiped out. Local Storage saves them permanently (until cleared). It can ONLY store strings.
**Fetch API** allows your JS to make network requests to other servers (like getting live weather data) without refreshing the page.

## 2. Syntax
```javascript
// --- LOCAL STORAGE ---
// Saving data
localStorage.setItem("username", "JohnDoe");
// Reading data
let name = localStorage.getItem("username"); 


// --- FETCH API (Async/Await) ---
const getData = async () => {
    try {
        // 1. Request data
        const response = await fetch("https://api.example.com/data");
        // 2. Parse JSON response
        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        console.error("Network failed", error);
    }
};
```

## 3. Explanation of Syntax
- `localStorage.setItem(key, value)`: Saves data. The key is how you look it up later.
- `localStorage.getItem(key)`: Retrieves the data.
- `async`: Put this before a function to tell JS "this function takes time (network delay), so don't freeze the webpage while you wait."
- `await`: Used inside an `async` function. It pauses the function *until* the fetch is complete.
- `fetch(url)`: Reaches out to the internet.
- `.json()`: Converts the raw internet response back into a usable JS Object.

## 4. Examples

### Practical Example (Saving Objects to LocalStorage)
Because LocalStorage only holds strings, you must `stringify` objects before saving, and `parse` them when reading.
```javascript
const user = { name: "Alice", score: 100 };

// Save: Convert object to JSON string
localStorage.setItem("userProfile", JSON.stringify(user));

// Read: Convert JSON string back to object
const savedStr = localStorage.getItem("userProfile");
const savedUser = JSON.parse(savedStr); 
console.log(savedUser.name); // Alice
```

## 5. Common Mistakes
- **Trying to save Arrays/Objects directly to LocalStorage**: `localStorage.setItem("data", [1,2,3])` will save it as the literal text `"1,2,3"`. You must use `JSON.stringify()`.
- **Forgetting `await` on `.json()`**: The conversion process also takes a microsecond, so it is asynchronous. You must write `await response.json()`.

## 6. Best Practices
- Always wrap `fetch` calls in a `try/catch` block. If the user's internet is down, the `fetch` will fail, and without a `catch` block, your whole script will crash.

## 7. Trainer Notes
- Show the students where LocalStorage lives in Chrome DevTools (Application Tab -> Storage -> Local Storage). Seeing the data sitting physically in the browser makes the concept click instantly.

## 8. Quick Revision
- `setItem(key, val)` / `getItem(key)`
- Must use `JSON.stringify` to save objects.
- `fetch()` gets data from APIs.
- `async/await` handles network delays cleanly.
