function gameStart() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById("questions").style.display = 'block';
    saveToStorage('stage', 0);
    getShuffle(questions);

    showQuestion();
};
//function for getting a random queation list 
function getShuffle(arr) {
    let temp = [];

    while (arr.length > 0) {
        let index = Math.floor(Math.random() * arr.length);
        temp.push(arr[index]);
        arr.splice(index, 1);
    }
    saveToStorage('questions', temp);
}

function showQuestion() {
    let displayQuestions = getFromStorage('questions');
    let choices = '';
    let stage = getFromStorage('stage');
    document.getElementById('question-title').innerText = displayQuestions[stage].question;
    console.log(displayQuestions);
    console.log(stage);
    for (let i = 0; i < displayQuestions[stage].choices.length; i++) {
        choices = choices.concat('<button onclick="checkAnswer('+ i +')">' + displayQuestions[stage].choices[i] + ' </button>');
        console.log(displayQuestions[stage].choices[i]);
    }
    console.log(choices);
    document.getElementById('choices').innerHTML = choices;
}

function checkAnswer(selectedIndex) {
    console.log(selectedIndex);
}

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}