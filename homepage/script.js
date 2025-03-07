document.addEventListener("DOMContentLoaded", function () {
    //get elements
    const leaderboardBtn = document.getElementById("leaderboard-btn");
    const popupOverlay = document.getElementById("popup-overlay");
    const closePopup = document.getElementById("close-popup");
    
    const settingsBtn = document.getElementById("settings-btn");
    const settingsOverlay = document.getElementById("settings-overlay");
    const closeSettings = document.getElementById("close-settings");
    
    const audioOverlay = document.getElementById("audio-overlay");
    const closeAudioSettings = document.getElementById("close-audio-settings");
    const backToSettingsBtn = document.getElementById("back-to-settings");

    const soundSlider = document.getElementById("sound-slider");
    const musicSlider = document.getElementById("music-slider");
    const soundValue = document.getElementById("sound-value");
    const musicValue = document.getElementById("music-value");

    //open leaderboard when clicked and close settings if open
    leaderboardBtn.addEventListener("click", function () {
        settingsOverlay.classList.remove("active"); //close settings
        popupOverlay.classList.add("active"); //open leaderboard
    });

    //close leaderboard
    closePopup.addEventListener("click", function () {
        popupOverlay.classList.remove("active");
    });

    //open settings and close leaderboard
    settingsBtn.addEventListener("click", function () {
        settingsOverlay.classList.add("active"); //open settings
        popupOverlay.classList.remove("active"); //close leaderboard
    });

    //close settings
    closeSettings.addEventListener("click", function () {
        settingsOverlay.classList.remove("active");
    });

    //close audio settings
    closeAudioSettings.addEventListener("click", function () {
        audioOverlay.classList.remove("active");
    });

    //back to settings (audio -> settings panel)
    backToSettingsBtn.addEventListener("click", function () {
        audioOverlay.classList.remove("active");
        settingsOverlay.classList.add("active");
    });

    //select audio settings button (sound2.svg)
    const audioSettingsBtn = document.querySelector(".settings-bottom .setting-item:nth-child(2)");

    //open audio when clicking icon
    audioSettingsBtn.addEventListener("click", function () {
        settingsOverlay.classList.remove("active");
        audioOverlay.classList.add("active");
    });

    //function to toggle (music, sound, vibrate)
    function toggleIcon(imgElement, imgOn, imgOff) {
        imgElement.addEventListener("click", function () {
            let currentSRC = imgElement.src.split("/").pop();
            imgElement.src = currentSRC === imgOn
                ? "assets/" + imgOff
                : "assets/" + imgOn;
        });
    }
    //toggle when clicked
    toggleIcon(document.getElementById("music-icon"), "music.svg", "NOmusic.svg");
    toggleIcon(document.getElementById("sound-icon"), "sound.svg", "NOsound.svg");
    toggleIcon(document.getElementById("vibrate-icon"), "vibrate.svg", "NOvibrate.svg");

    //update percentage when sliders are moved
    function updateSliderValue(slider, valueElement) {
        slider.addEventListener("input", function () {
            valueElement.textContent = slider.value + "%";
            updateSliderBG(slider);
        });
    }

    //update slider background dynamically
    function updateSliderBG(slider) {
        let value = slider.value;
        let min = slider.min;
        let max = slider.max;
        let percentage = ((value - min) / (max - min)) * 100;

        //light grey colour to left and white to right
        slider.style.background = `linear-gradient(to right, #808080 ${percentage}%, #fff ${percentage}%)`;
    }
    //update sliders
    updateSliderBG(soundSlider);
    updateSliderBG(musicSlider);

    updateSliderValue(soundSlider, soundValue);
    updateSliderValue(musicSlider, musicValue);
});
