document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll");
    const totalScoreElement = document.getElementById("total-score");
    const lastRollElement = document.getElementById("last-roll");
    const dragonElement = document.getElementById("dragon");
    const dragonHpElement = document.getElementById("dragon-hp");
    const messageElement = document.getElementById("message");

    let totalScore = 0;
    let hp = 100;

    const badMessages = [
        "You've hit your companion! The dragon gained more points from laughing",
        "Oh no, the beast started summoning wyverns!",
        "The beast began to breathe fire. We can say goodbye to the forest"
    ];
    const goodMessages = [
        "Good bow shot! The dragon cannot fly for a while",
        "Your companion turned out to be a magician. The dragon lost his confidence",
        "Perfect attack! Even the dragon is surprised"
    ];
    function rollDice() {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(`Rolling the dice: ${roll}`); 
        if(roll == 1){
            hp += 10;
            const randomMessage = badMessages[Math.floor(Math.random() * badMessages.length)];
            messageElement.textContent = randomMessage;
        }
        if(roll == 6){
            hp -= 5;
            const randomMessage = goodMessages[Math.floor(Math.random() * goodMessages.length)];
            messageElement.textContent = randomMessage;
        }
        totalScore += roll;
        //aktualizowanie wyników
        lastRollElement.textContent = roll;
        totalScoreElement.textContent = totalScore;
        dragonHpElement.textContent = hp;
        console.log(`Total Score: ${hp}`);
        
        if (totalScore > hp) {
            dragonElement.classList.add("defeated");
            messageElement.textContent = "The village is safe!... at least until another dragon appears"; 
            rollButton.disabled = true; 
        }
    }

    rollButton.addEventListener("click", rollDice);
    rollDice(); // Auto roll on page load
});
