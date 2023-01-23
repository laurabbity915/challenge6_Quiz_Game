// //Create question objects
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript? ",
        choices: [
            "<js>",
            "<script>",
            "<javascript>",
            "<scripting>"
        ],
        answer: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id='demo'>This is a demonstration.</p> ",
        choices: [
            "document.getElementByName ('p').innerHTML = 'Hello World!'; ",
            "document.getElement('o').innerHTML = 'Hello World!'; ",
            "#demo.innerHTML = 'Hello World!'; ",
            "document.getElementById('demo').innerHTML = 'Hello World!'; "
        ],
        answer: "document.getElementById('demo').innerHTML = 'Hello World!'; "
    },
    {
        question: "Inside which HTML element do we put the JavaScript? ",
        choices:[
            "the <head> section",
            "both the <head> section and <body> section are correct",
            "the <body> section"
        ],
        answer: "both the <head> section and <body> section are correct",


    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: [
            "true",
            "false",
        ],
        answer: "false"
    },
    {
        question: "How do you write 'Hello World' in an alert box? ",
        choices: [
            "<msgBox('Hello World')>",
            "<msg('Hello World')>",
            "<alert('Hello World')>",
            "<alertBox('Hello World')>"
        ],

        answer: "<alert('Hello World')>"
    }
]