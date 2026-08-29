const btn = document.getElementById("new-quote");
const quoteDisplay = document.getElementById("quote-text");

const getQuote = async () => {
    try {
        quoteDisplay.textContent = "Loading...";
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        quoteDisplay.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error("Failed to fetch quote", error);
        quoteDisplay.textContent = "Error loading advice.";
    }
};

btn.addEventListener("click", getQuote);
