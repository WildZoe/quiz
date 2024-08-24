const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', e => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value; // falsy value
})



saveHighScore = e => {
    e.preventDefault();
    console.log('clicked the Save button');
}