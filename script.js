'use strict'

//selecting values anad buttons
const btns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');

//making the buttons functional
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        const result = document.querySelector('.result');

        if (style.contains("first")) {
            result.textContent = 1;
        } else if (style.contains("scnd")) {
            result.textContent = 2;
        } else if (style.contains("third")) {
            result.textContent = 3;
        } else if (style.contains("fourth")) {
            result.textContent = 4;
        } else if (style.contains("fifth")) {
            result.textContent = 5;
        } else {
            result.textContent;
        }
    });
});

//hiding first container and showing second container
submitBtn.addEventListener("click", function () {
    document.querySelector('.scnd-container').classList.remove("hidden");
});

