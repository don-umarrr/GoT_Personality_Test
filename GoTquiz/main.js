// An array to hold questions
var questionArray = [
    "The pen is mightier than the sword",
    "At the brink of battle you notice your bannerman deserting their post. Do you",
    "You are a brother of the Night's Watch when you discover the corpses of white walkers. Do you",
    "Would you risk your life for your best friend?",
    "It is important to be truthful even if it puts you in a bad position",
    "You would do anything for power",
    "It is important to protect your reputation through action",
    "The old way is the only way",
    "A good sense of humor is necessary in life"
];

// An array that holds the answers to the questions above
var answerArray = [
    ["Absoultely", "Sometimes", "Swords can cut through pens"],
    ["Rally them up and deliver a speech", "Continue with the battle hoping they will follow your action", "Join them"],
    ["Investigate the surrounding area", "Report back to Castle Black", "Abandon your watch"],
    ["In a heartbeat", "Depends on my odds of survival", "Nope"],
    ["Absolutely", "Depends on what's at stake", "Not important"],
    ["Absolutely", "Depends on what I have to do", "I don't desire power"],
    ["Absolutely", "Not the most important thing", "Not worried about what others think"],
    ["Absolutely", "Not all tradition is good", "Change is always necessary"],
    ["Absolutely", "Sometimes", "Jokes are a waste of time"]
];

// Initializing global variables we will need for my functions
var startButton;
var questionNumber = 0;
var testBody;
var responses = 0;

// Image references
var danny = './images/danny.jpg'; // 80
var snow = './images/snow.jpg'; // 75
var arya = './images/arya.jpg'; //60
var cersei = './images/cersei.jpg'; //65
var tyrion = './images/tyrion.jpg'; //45 OR 40
var joffrey = './images/joffrey.jpg'; // <20
var tarly = './images/tarly.jpg'; // 50 OR 55
var sansa = './images/sansa.jpg'; // 70

// get our js to go on the html
// get questions flowing on page one by one with correct responses
// ensure we are capturing the responses with value
// flip logic for LAST question
// build logic for end result

$(document).ready(function() {
//    our initial button to start the test
    function startTest() {
        startButton = "<a href='#' class='btn btn-primary btn-lg active startQuizButton' role='button' aria-pressed='true'>Begin Test</a>";
        $(".mainArea").html(startButton);
    }
    //Calling the startTest function
    startTest();

    // If on the 0th indexed question, generate the corresponding questions and answer. If not then increment the index on the
    // question number
    $("body").on("click", ".startQuizButton", function(event) {
        event.preventDefault();
        if( questionNumber === 0) {
            createHTML();
        }
        else {
            questionNumber = questionNumber + 1;
            createHTML();
        }
    })

    // If we reach the last question, call the generateResults page. If not, aggregate the score based off the value of the answer submitted
    $("body").on("click", ".nextButton", function() {
        if( questionNumber === 8) {
            generateResult();
        }
        else {
            responses += parseInt($( "input[type=radio][name=loyalty]:checked" ).val());
            questionNumber = questionNumber + 1;
            createHTML();
            //console.log(responses);
        }
    });
    // Displays the result of the generateScore
    $("body").on("click", ".generateScore", function() {
        //console.log("input test");
        displayResult();
    });

});


// Logic for functions here

// Function that generates each page that has a question from the array and assigns values to the different answers
function createHTML() {
    testBody = "<p class='text-center'>" + questionArray[questionNumber] + "</p>" +
        "<input type='radio' name='loyalty' value='10' />" + answerArray[questionNumber][0] +
        "</input><input type='radio' name='loyalty' value='5' />"+ answerArray[questionNumber][1] + "</input>" +
        "<input type='radio' name='loyalty' value='0' />" + answerArray[questionNumber][2] +
        "</input>" + "<br>" + "<button class='nextButton'>Next</button>"
    ;
    //console.log('q number ', questionNumber);
    $(".mainArea").html(testBody);
}

// Function that has a button that generates a results page
function generateResult() {
    testBody = "<p class='text-center'>Completed Test. Click below to see result.</p>" +
    "<button class='generateScore'>See Result</button>"
    ;
    //console.log('q number ', questionNumber);
    $(".mainArea").html(testBody);
}

// Function that takes in two parameters and displays a corresponding image
function showImage(name, image) {
    testBody = "<p>Your character is "+name+ " </p>";
    var imageHtml = "<img src=" + image + ">";
    //console.log('q number ', questionNumber);
    $(".mainArea").html(testBody);
    $(".mainArea").append(imageHtml);
}

// Function that handles the logic to determine which character the user is.
function displayResult() {
    if (responses >= 80) {
        showImage("Daenerys Targarean", danny);
    }
    else if (responses == 75) {
        showImage("Jon Snow", snow);
    }
    else if (responses == 70) {
        showImage("Sansa Stark", sansa);
    }
    else if (responses == 65) {
        showImage("Cersei Lannister", cersei);
    }
    else if (responses == 60) {
        showImage("Arya Stark", arya);
    }
    else if (responses == 50 || responses == 55) {
        showImage("Samwell Tarly", tarly);
    }
    else if (responses == 45 || responses ==40) {
        showImage("Tyrion Lannister", tyrion);
    }
    else {
        showImage("Joffrey Lannister", joffrey);
    }
}