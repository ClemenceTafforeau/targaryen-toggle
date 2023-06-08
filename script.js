const backgroundImage = document.querySelector(".image");
const coinFlip = document.querySelector(".checkmark");

coinFlip.addEventListener("click", () => {
    const checked= backgroundImage.getAttribute("aria-pressed");

    if (checked === "false") {
        backgroundImage.setAttribute("aria-pressed", true);
    } else {
        backgroundImage.setAttribute("aria-pressed", false);
    }
})