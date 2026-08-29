# Day 09 Answer

## Explanation
We combine the interactive `<details>` tags with a third-party `<iframe>` to create a rich, interactive page without writing any JavaScript. 

## Complete Solution (Assignment 3)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Info</title>
</head>
<body>
    
    <!-- Native Popup Dialog -->
    <dialog open>
        <h3>Welcome!</h3>
        <p>Check out our new location below.</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>

    <header>
        <h1>Visit Us Today</h1>
    </header>

    <main>
        <section>
            <h2>Frequently Asked Questions</h2>
            <details>
                <summary>What are your hours?</summary>
                <p>We are open Monday to Friday, 9am to 5pm.</p>
            </details>
            <details>
                <summary>Do you offer parking?</summary>
                <p>Yes, we have a free parking garage in the back.</p>
            </details>
        </section>

        <section>
            <h2>Our Location</h2>
            <!-- Google Maps iframe (Eiffel Tower example) -->
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156744008!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1689254000000!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Map showing the Eiffel Tower">
            </iframe>
        </section>
    </main>

</body>
</html>
```

## Expected Output
When loaded, a dialog box appears immediately (due to the `open` attribute). Below that is an interactive FAQ and a fully functional embedded Google Map. Note: closing the dialog using the button works natively because we wrapped the button in `<form method="dialog">`.
