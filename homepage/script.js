document.addEventListener("DOMContentLoaded", function () {
    const leaderboardBtn = document.getElementById("leaderboard-btn");
    const popupOverlay = document.getElementById("popup-overlay");
    const closePopup = document.getElementById("close-popup");

    leaderboardBtn.addEventListener("click", function () {
        popupOverlay.classList.add("active");
    });

    closePopup.addEventListener("click", function () {
        popupOverlay.classList.remove("active");
    });

    
})