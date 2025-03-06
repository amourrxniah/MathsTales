document.addEventListener("DOMContentLoaded", function () {
    //get elements
    const leaderboardBtn = document.getElementById("leaderboard-btn");
    const popupOverlay = document.getElementById("popup-overlay");
    const closePopup = document.getElementById("close-popup");
    const settingsOverlay = document.getElementById("settings-overlay");
    const closeSettings = document.getElementById("close-settings");

    //open leaderboard when clicked
    leaderboardBtn.addEventListener("click", function () {
        popupOverlay.classList.add("active");
    });

    //close leaderboard
    closePopup.addEventListener("click", function () {
        popupOverlay.classList.remove("active");
    });

    //open settings
    document.getElementById("settings-btn")?.addEventListener("click", function () {
        settingsOverlay.classList.add("active");
    });

    //close settings
    closeSettings.addEventListener("click", function () {
        settingsOverlay.classList.remove("active");
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

})