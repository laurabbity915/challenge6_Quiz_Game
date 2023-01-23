function gameStart() {
    document.getElementById('start-screen').hidden = true;
    document.getElementById("questions").hidden = false;

    //document.getElementById
    console.log(getRandom(questions));

};
//function for getting a random queation list 
function getRandom(arr) {
    let temp = [];

    while(arr.length > 0){
        let index = Math.floor(Math.random() * arr.length);
        temp.push(arr[index]);
        arr.splice(index, 1);
    }

    return temp;
}
