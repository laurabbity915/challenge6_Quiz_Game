function gameStart() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById("questions").style.display = 'block';
    getShuffle(questions);
    //document.getElementById
    let displayQuestions = getFromStorage('questions');
    document.getElementById('question-title').innerText = displayQuestions[0].question;

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

function showQuestion(questions) {

}


function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}