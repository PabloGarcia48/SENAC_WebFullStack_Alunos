const button = document.getElementById("animatedButton");
const flap = document.querySelector(".flap");
const message = document.querySelector(".message");
const letter = document.querySelector(".letterImageWrite");
const heart = document.querySelector(".heartImage");

button.addEventListener("click", () => {
    flap.classList.add("open");

    message.classList.add("visible");

    letter.classList.add("slideLetter");

    heart.classList.add("slideHeart");
})