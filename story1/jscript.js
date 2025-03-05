document.addEventListener('DOMContentLoaded', function () {
    // Initialize sliders with default values
    initSlider('sound', 50);
    initSlider('music', 50);

    // Get the settings button and panel
    const settingsButton = document.getElementById('settings-btn');
    const settingsPanel = document.getElementById('settings-panel');

    // Toggle the settings panel and rotate the button when clicked
    settingsButton.addEventListener('click', function () {
        // Toggle the panel visibility
        settingsPanel.classList.toggle('hidden');

        // Toggle the rotate class on the button
        settingsButton.classList.toggle('rotate');
    });
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
        icon.style.left = `calc(${value}% - 10px)`; // Adjust for the circle's size
        percentage.textContent = `${value}%`;
    }
}