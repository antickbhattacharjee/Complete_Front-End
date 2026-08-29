# Day 06 Answer

## Explanation
We use a `<form>` element to wrap all inputs. For the radio buttons, we must give them all the same `name` attribute (e.g., `name="reason"`) so the browser knows they are part of the same group and only allows one to be selected at a time.

## Complete Solution (Assignment 3)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form action="#" method="POST">
        <!-- Name -->
        <div>
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required>
        </div>
        <br>
        
        <!-- Email -->
        <div>
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <br>
        
        <!-- Reason (Radio) -->
        <div>
            <p>Reason for contacting:</p>
            <input type="radio" id="support" name="reason" value="support">
            <label for="support">Support</label>
            
            <input type="radio" id="sales" name="reason" value="sales">
            <label for="sales">Sales</label>
            
            <input type="radio" id="general" name="reason" value="general" checked>
            <label for="general">General</label>
        </div>
        <br>
        
        <!-- Message -->
        <div>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="5" cols="30"></textarea>
        </div>
        <br>
        
        <!-- Privacy -->
        <div>
            <input type="checkbox" id="privacy" name="privacy" required>
            <label for="privacy">I agree to the privacy policy.</label>
        </div>
        <br>
        
        <!-- Submit -->
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```

## Expected Output
A functional form where clicking labels focuses the inputs. Clicking "Support" or "Sales" labels will select the respective radio button. The email input will validate for an '@' symbol automatically on submit.
