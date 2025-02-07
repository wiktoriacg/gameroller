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
        "The beast began to breathe fire. We can say goodbye to the forest",
        "The dragon's claws turned out to be more dangerous than you expected!",
        "One of your companions ran away, arguing that you weren't paying him enough.",
        "You're out of arrows. Your companion went for more. Or maybe he just ran away?",
        "Lightning begins to flash around you. Could this be Night Fury?"
    ];
    const goodMessages = [
        "Good bow shot! The dragon cannot fly for a while",
        "Your companion turned out to be a magician. The dragon lost his confidence",
        "Perfect attack! Even the dragon is surprised",
        "The dagger you bought years ago was finally useful!",
        "One of the villagers turned out to be a musician. The dragon has lost its rhythm!",
        "It turns out that the snake repellent oil the weird merchant gave you also works on dragons! After all, it's a reptile too.",
        "Suddenly, catapult attacks fired at the dragon. Who keeps the catapult in the basement?"
    ];
    function rollDice() {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(`Rolling the dice: ${roll}`); 
        if(roll == 1){
            hp += 10;
            const randomMessage = badMessages[Math.floor(Math.random() * badMessages.length)];
            messageElement.textContent = randomMessage;
        }else if(roll == 6){
            hp -= 5;
            const randomMessage = goodMessages[Math.floor(Math.random() * goodMessages.length)];
            messageElement.textContent = randomMessage;
        }else{
            messageElement.textContent = "";
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
