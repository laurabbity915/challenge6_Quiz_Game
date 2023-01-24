function clearHistory() {
    localStorage.removeItem('high-score');
    loadScore();
}

function loadScore() {
    let scores = getFromStorage('high-score');
    let scoreHtml = '';
    if (scores != null) {
        for (let i = 0; i < scores.length; i++) {
            scoreHtml = scoreHtml.concat('<li>' + scores[i].name + ' - ' + scores[i].score + '</li>');
        }

        document.getElementById('highscores').innerHTML = scoreHtml;
    }
}

// function for geting local storage value
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// function for saving local storage value
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}