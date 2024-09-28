function guessingGame() {
    const target = Math.floor(Math.random() * 100);
    let isOver = false;
    let guessCount = 0;

    return function guess(num) {
        if (isOver) return "You won!";
        guessCount++;
        if (num === target) {
            isOver = true;
            return `You win! It took you ${guessCount} to find ${num}`
        }
        if (num < target) return `higher`;
        if (num > target) return 'lower';
    };
}

module.exports = { guessingGame };
