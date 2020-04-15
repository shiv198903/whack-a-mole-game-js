document.addEventListener('DOMContentLoaded', () => {
    var squares = document.querySelectorAll('.square');
    var score = document.querySelector('#score');
    var timeLeft = document.querySelector("#timeLeft");
    var hitPosition = null;
    let result = 0;
    let currentTime = timeLeft.textContent;
    let timerId = null;

    function displayMoleRandom() {
        squares.forEach(square => {
            square.classList.remove('mole');
        });
        let randomSquare = squares[Math.floor(Math.random() * 9)];
        randomSquare.classList.add('mole');
        hitPosition = randomSquare.id;
    }

    function addListeners() {
        squares.forEach(element => {
            element.addEventListener('mouseup', () => {
                if (element.id === hitPosition) {
                    result = result + 1;
                    score.textContent = result;
                }
            });
        });
    }

    function countdown() {
        currentTime--;
        timeLeft.textContent = currentTime;
        if (currentTime === 0) {
            clearInterval(timerId);
            alert('Your game is over.');
        }
    }

    function main() {
        addListeners();
        timerId = setInterval(displayMoleRandom, 1000);
        setInterval(countdown, 1000);
    }
    main();
});