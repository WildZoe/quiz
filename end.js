const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

console.log(highScores);

localStorage.setItem("highScores", JSON.stringify([]));

// console.log(JSON.parse(localStorage.getItem("highScores")));



finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', e => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value; // falsy value
})



saveHighScore = e => {
    e.preventDefault();
    console.log('clicked the Save button');

    const score = {
        score: Math.floor(Math.random() * 100),
        // score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort( (a, b) => b.score - a.score );

    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.assign("/");
    // console.log(highScores);
}