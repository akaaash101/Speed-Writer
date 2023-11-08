const quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const input = document.getElementById('input');
const startButton = document.getElementById('start');
const timeDisplay = document.getElementById('time');
const accuracyDisplay = document.getElementById('accuracy');
let startTime, endTime;

startButton.addEventListener('click', startTest);

function startTest() {
    input.value = "";
    input.focus();
    startButton.disabled = true;

    // Display a random quote for the user to type
    const randomIndex = Math.floor(Math.random() * quote.length);
    const displayText = quote.slice(randomIndex);
    document.getElementById('quote').textContent = displayText;

    startTime = Date.now();
    input.addEventListener('input', checkAccuracy);
}

function checkAccuracy() {
    const typedText = input.value;
    const originalText = quote.slice(0, typedText.length);

    if (typedText === originalText) {
        const elapsedTime = (Date.now() - startTime) / 1000;
        const accuracy = (typedText.length / quote.length) * 100;

        timeDisplay.textContent = `Time: ${elapsedTime.toFixed(1)}s`;
        accuracyDisplay.textContent = `Accuracy: ${accuracy.toFixed(1)}%`;

        if (typedText === quote) {
            endTest();
        }
    }
}

function endTest() {
    endTime = Date.now();
    input.removeEventListener('input', checkAccuracy);
    startButton.disabled = false;

    const elapsedTime = (endTime - startTime) / 1000;
    const accuracy = (input.value.length / quote.length) * 100;

    timeDisplay.textContent = `Time: ${elapsedTime.toFixed(1)}s`;
    accuracyDisplay.textContent = `Accuracy: ${accuracy.toFixed(1)}%`;
}
