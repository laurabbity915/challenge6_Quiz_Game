// //Create question objects
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript? ",
        choices: [
            "&lt;js&gt;",
            "&lt;script&gt;",
            "&lt;javascript&gt;",
            "&lt;scripting&gt;"
        ],
        answer: "&lt;script&gt;"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below? \n &lt;p id='demo'&gt;This is a demonstration.&lt;/p&gt; ",
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
            "the &lt;head&gt; section",
            "both the &lt;head&gt; section and &lt;body&gt; section are correct",
            "the &lt;body&gt; section"
        ],
        answer: "both the &lt;head&gt; section and &lt;body&gt; section are correct",


    },
    {
        question: "The external JavaScript file must contain the &lt;script&gt; tag.",
        choices: [
            "true",
            "false",
        ],
        answer: "false"
    },
    {
        question: "How do you write 'Hello World' in an alert box? ",
        choices: [
            "&lt;msgBox('Hello World')&gt;",
            "&lt;msg('Hello World')&gt;",
            "&lt;alert('Hello World')&gt;",
            "&lt;alertBox('Hello World')&gt;"
        ],

        answer: "&lt;alert('Hello World')&gt;"
    }
]