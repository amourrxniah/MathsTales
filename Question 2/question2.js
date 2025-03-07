document.addEventListener("DOMContentLoaded", function () {
    const answerButtons = document.querySelectorAll(".answer-btn");
    const correctAnswer = "3"; // Define the correct answer
    const continueButton = document.querySelector(".continue-btn");

    answerButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Reset all buttons' styles first
            answerButtons.forEach(btn => {
                btn.classList.remove("selected-correct", "selected-wrong");
            });

            // Apply correct or wrong class
            if (this.textContent.trim() === correctAnswer) {
                this.classList.add("selected-correct");

                // Change the continue button to an arrow and remove any text
                continueButton.classList.add("arrow");
                continueButton.textContent = ""; // Clear text in the button
            } else {
                this.classList.add("selected-wrong");

                // Reset the continue button back to normal text
                continueButton.classList.remove("arrow");
                continueButton.textContent = "Continue"; // Restore text
            }
        });
    });
});






