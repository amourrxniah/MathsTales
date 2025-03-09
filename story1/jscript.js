document.addEventListener('DOMContentLoaded', function () {
    // Initialize sliders with default values
    initSlider('sound', 50);
    initSlider('music', 50);

    // Get the settings button and panel
    const settingsButton = document.getElementById('settings-btn');
    const settingsPanel = document.getElementById('settings-panel');

    // Toggle the settings panel and rotate the button when clicked
    settingsButton.addEventListener('click', function () {
        settingsPanel.classList.toggle('hidden');
        settingsButton.classList.toggle('rotate');
    });

    // Start typewriter effect for the initial story
    typeWriterEffect("Once upon a time, there lived a little old man and a little old woman.", document.querySelector("h1"));
});

function initSlider(type, initialValue) {
    const track = document.getElementById(`${type}-track`);
    const fill = document.getElementById(`${type}-fill`);
    const icon = document.getElementById(`${type}-icon`);
    const percentage = document.getElementById(`${type}-percentage`);

    let isDragging = false;

    // Initialize slider with the provided initial value
    updateSlider(initialValue);

    // Add event listeners for dragging
    icon.addEventListener('mousedown', startDrag);
    icon.addEventListener('touchstart', startDrag, { passive: false });

    // Add event listener for clicking on the track
    track.addEventListener('click', function (e) {
        const rect = track.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.min(Math.max(0, x / rect.width * 100), 100);
        updateSlider(percent);
    });

    function startDrag(e) {
        isDragging = true;
        icon.style.cursor = 'grabbing';

        if (e.type === 'touchstart') {
            e.preventDefault();
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    function drag(e) {
        if (!isDragging) return;

        if (e.type === 'touchmove') {
            e.preventDefault();
        }

        const rect = track.getBoundingClientRect();
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        const percent = Math.min(Math.max(0, x / rect.width * 100), 100);

        updateSlider(percent);
    }

    function endDrag() {
        if (isDragging) {
            isDragging = false;
            icon.style.cursor = 'grab';

            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
        }
    }

    function updateSlider(percent) {
        const value = Math.round(percent);

        // Update the fill width and handle position
        fill.style.width = `${value}%`;
        icon.style.left = `calc(${value}% - 10px)`;
        percentage.textContent = `${value}%`;
    }
}

// Typewriter effect
function typeWriterEffect(text, element, speed = 50) {
    element.textContent = ""; // Clear existing text
    let index = 0;

    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index]; // Add one letter at a time
            index++;
        } else {
            clearInterval(interval); // Stop when all letters are shown

            // Show the arrow button after a 1-second delay
            setTimeout(() => {
                const arrowBtn = document.getElementById('arrows-btn');
                arrowBtn.style.display = 'block'; // Make the arrow button visible
            }, 1000); // 1-second delay
        }
    }, speed);
}

// Add event listener to the arrow button
const arrowBtn = document.getElementById('arrows-btn');
arrowBtn.addEventListener('click', function () {
    // Change the image to turnipSeeds.svg
    const coupleImage = document.querySelector('.couple-image');
    coupleImage.src = 'assets/turnipSeeds.svg'; // Update the image source

    // Start the new typewriter effect
    typeWriterEffect("One day, the little old man planted some turnip seeds.", document.querySelector("h1"));

    // Hide the arrow button again (optional)
    arrowBtn.style.display = 'none';

    // Increase the progress bar width
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '2%'; 
});
