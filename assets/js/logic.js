function gameStart() {

    // hide the start page
    document.getElementById('start-screen').style.display = 'none';
    // unhide the questions page
    document.getElementById("questions").style.display = 'block';
    // reset score
    saveToStorage('score', 0);
    // init the game stage
    saveToStorage('stage', 0);
    // shuffle the questions
    getShuffle(questions);
    countdowntimer(60);
    // display the questions
    showQuestion();

};
//function for getting a random question list 
function getShuffle(arr) {
    let temp = [];

    while (arr.length > 0) {
        let index = Math.floor(Math.random() * arr.length);
        //add selected question to temp array
        temp.push(arr[index]);
        //remove the selected question
        arr.splice(index, 1);
    }
    // save the shuffled questions to local storage
    saveToStorage('questions', temp);
}

// function for render the question
function showQuestion() {
    let displayQuestions = getFromStorage('questions');
    let choices = '';
    let stage = getFromStorage('stage');

    // show next question if the user hasn't answer all question, else to end-game page
    if (stage < displayQuestions.length) {
        document.getElementById('question-title').innerHTML = displayQuestions[stage].question;
        //console.log(displayQuestions);
        console.log(stage);
        // create answer buttons
        for (let i = 0; i < displayQuestions[stage].choices.length; i++) {
            choices = choices.concat('<button onclick="checkAnswer(' + i + ')">' + displayQuestions[stage].choices[i] + ' </button>');
            //console.log(displayQuestions[stage].choices[i]);
        }
        //console.log(choices);
        document.getElementById('choices').innerHTML = choices;
    } else {
        // TODO to end game
        showEndScreen();
    }


}

// function for checking the user answer
function checkAnswer(selectedIndex) {
    //console.log(selectedIndex);
    let displayQuestions = getFromStorage('questions');
    let stage = getFromStorage('stage');

    // check the user answer
    if (displayQuestions[stage].answer === displayQuestions[stage].choices[selectedIndex]) {
        questionResult('you are correct');
        let score = getFromStorage('score');
        console.log(score);
        if (score == undefined || score == null) {
            saveToStorage('score', 1);
        } else {
            saveToStorage('score', (score + 1));
        }
    } else {
        questionResult('you are wrong');
        //TODO subtract time
    }
    //show next question
    saveToStorage('stage', stage + 1);
    showQuestion();
}

// function for geting local storage value
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// function for saving local storage value
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//function for showing result of each question
function questionResult(result) {
    // show the result message
    document.getElementById('result').style.opacity = 1;
    document.getElementById('result').innerText = result;
    // hidden the message after 3 seconds 
    setInterval(function () {
        console.log('setInterval');
        document.getElementById('result').style.opacity = 0;
    }, 3000)
}


//countdown timer
function countdowntimer(seconds) {
    let t = new Date();
    let endTime = new Date(t.getTime() + ((seconds) * 1000));

    const interval = setInterval(() => {
        let current = new Date().getTime();
        countdown = endTime - current;

        document.getElementById('time').innerText =
            Math.floor((countdown % (1000 * 60)) / 1000);

        if (countdown <= 0) {
            console.log('end countdown')
            clearInterval(interval)
            // go to end screen when time up;
            showEndScreen();
        }
    });

};


function showFinalScore() {
    let score = getFromStorage("score");
    document.getElementById('final-score').innerText = score;

}

function saveInit() {
    let highScore = getFromStorage('high-score');
    let userName = document.getElementById('initials').value;
    let score = getFromStorage('score');
    if (highScore == null) {
        let temp = [{
            name: userName,
            score: score
        }]

        saveToStorage('high-score', temp);
    } else {
        let temp = {
            name: userName,
            score: score
        }
        highScore.push(temp)
        // sort the highest score
        let sorted = highScore.sort((a, b) => a.score > b.score ? -1 : 1);
        saveToStorage('high-score', sorted);
    }
    window.location = 'highscores.html';
}

function showEndScreen() {
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById("questions").style.display = 'none';
    document.getElementById("timer").style.display = 'none';
    showFinalScore();
}