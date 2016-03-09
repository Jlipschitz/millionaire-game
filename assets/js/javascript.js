var questionList = []; //store the questions created by AddQuestion

function CreateQuestion(questions, choices, answer) {
    this.questions = questions;
    this.choices = choices;
    this.answer = answer;
}

function AddQuestion(questions, choices, answer) {
    var add = new CreateQuestion(questions, choices, answer);
    questionList.push(add);
}

AddQuestion("What's 1+1 equal to?", ["One", "Two", "Three", "Four"], "Two");
AddQuestion("What's 1+2 equal to?", ["One", "Two", "Three", "Four"], "Three");
AddQuestion("What's 1+3 equal to?", ["Four", "Two", "Three", "Eight"], "Four");
AddQuestion("What's 1+4 equal to?", ["One", "Five", "Three", "Four"], "Five");
AddQuestion("What's 1+5 equal to?", ["Six", "Two", "Three", "Four"], "Six");
AddQuestion("What's 1+6 equal to?", ["One", "Two", "Three", "Seven"], "Seven");
AddQuestion("What's 1+7 equal to?", ["One", "Two", "Eight", "Four"], "Eight");
AddQuestion("What's 1+8 equal to?", ["One", "Nine", "Three", "Four"], "Nine");
AddQuestion("What's 1+9 equal to?", ["One", "Two", "Three", "Ten"], "Ten");
AddQuestion("What's 1+10 equal to?", ["One", "Two", "Eleven", "Four"], "Eleven");
AddQuestion("What's 1+11 equal to?", ["One", "Twelve", "Three", "Four"], "Twelve");
AddQuestion("What's 1+12 equal to?", ["Thirteen", "Two", "Three", "Four"], "Thirteen");
AddQuestion("What's 1+13 equal to?", ["One", "Fourteen", "Three", "Four"], "Fourteen");
AddQuestion("What's 1+14 equal to?", ["One", "Two", "Fifteen", "Four"], "Fifteen");
AddQuestion("What's 1+15 equal to?", ["One", "Two", "Sixteen", "Four"], "Sixteen");



var gameEngine = {
    score: 0,
    keepPlaying: true,
    money: [
        "$100", "$200", "$300", "$400", "$500", "$1,000", "$2,000", "$4000",
        "$8,000", "$10,000", "$25,000", "$100,000", "$250,000", "$500,000", "1,000,000"
    ],
    currentQuestion: {},
    userInput: "",
    instruction: ["How to Play:", "Each round a random question will be asked and money is awarded.",
        "Answer all fifteen questions correct to win a million dollars!"
    ],

    chooseQuestion: function() {
        gameEngine.currentQuestion = questionList[1];
    },
    shuffleQuestionOrder: function() {
        var j, x, i;
        for (i = questionList.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = questionList[i - 1];
            questionList[i - 1] = questionList[j];
            questionList[j] = x;
        }
    },
    validate: function() {
        if (gameEngine.userInput === gameEngine.currentQuestion.answer) {
            return keepPlaying = true;
        } else {
            return keepPlaying = false;
        }
    },
};

// shuffle questions to avoid repetition when game is first start and also when restarted
gameEngine.shuffleQuestionOrder(questionList);

var gameDisplay = {
    askingPhase: function() {
        var ask = gameEngine.currentQuestion;

        //ask question
        $("#questionField").append('<div><h1 id="questionText"></h1></div>');
        $("#questionText").text(ask.questions);

        //show choice 1
        $("#questionField").append('<label for="firstChoice" id="firstLabel">');
        $("#firstLabel").append('<input type="radio" value=' + ask.choices[0] + ' name="userChoice" id="firstChoice">');
        $("#firstLabel").append('<span>' + ask.choices[0] + '</span></input>');
        $("#questionField").append('</label>');

        //show choice 2
        $("#questionField").append('<label for="secondChoice" id="secondLabel">');
        $("#secondLabel").append('<input type="radio" value=' + ask.choices[1] + ' name="userChoice" id="secondChoice">');
        $("#secondLabel").append('<span>' + ask.choices[1] + '</span></input>');
        $("#questionField").append('</label>');

        //show choice 3
        $("#questionField").append('<label for="thirdChoice" id="thirdLabel">');
        $("#thirdLabel").append('<input type="radio" value=' + ask.choices[2] + ' name="userChoice" id="thirdChoice">');
        $("#thirdLabel").append('<span>' + ask.choices[2] + '</span></input>');
        $("#questionField").append('</label>');

        //show choice 4
        $("#questionField").append('<label for="fourthChoice" id="fourthLabel">');
        $("#fourthLabel").append('<input type="radio" value=' + ask.choices[3] + ' name="userChoice" id="fourthChoice">');
        $("#fourthLabel").append('<span>' + ask.choices[3] + '</span></input>');
        $("#questionField").append('</label>');

        //final answer button
        $("#questionField").append('<div class="clearfix"></div>');
        $("#questionField").append('<button type="button" id="finalAnswer"><span id="finalText">Final Answer</span></button>');
        $("#finalAnswer").attr("class", "btn btn-default btn-lg active");
    },
    finalAnswer: function() {
        //onclick to pickup current radio input
    },
    removeStart: function() {
        $("#logo").fadeOut(2500);
        $("#playButton, #instructionButton").fadeOut(2500);
    }
};


var gamePlay = {
    radioChoiceListener: function() {
        $('#questionForm input').on('change', function() {
            gameEngine.userInput = $('input[name="userChoice"]:checked', '#questionForm').val();
        })
    },
    startPlayListener: function() {
        $("#playButton").on("click", function() {
            gameDisplay.removeStart();
        })
    },
    reset: function() {
        //implement reset here
    }
};

$(document).ready(function() {

    var counter = 0;

    gamePlay.startPlayListener();
    gamePlay.radioChoiceListener();



    //background image
    $.backstretch("assets/images/background.jpg");
}); // end document ready
