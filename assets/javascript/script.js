///// insight drawn from https://www.codemahal.com/video/javascript-quiz-tutorial/ tutorial /////


/////
// variables
/////

let startQuiz = document.querySelector("#startQuiz");
let quizBtn = document.querySelectorAll(".quizBtn");
let currentIndex = 0;


//in that moment, I though, I can't base score off of the time left, becuase they could still
//have the highest score and have answered zero questions correctly
let score = 0;

/////
// functions
/////


//switches from introduction to questions, starts timer
startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    console.log("Current Index at startQuiz click" + currentIndex);
    // BOX ONE set to display: none
    document.querySelector("#boxOne").style.display = "none"; 
    // BOX TWO for quiz questions is set to display
    document.querySelector("#boxTwo").style.display = "block";
    //show the questions on the screen
    showQs();
});

function showQs() {
    let question = quizQs[currentIndex];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#chA").innerHTML = question.choices[0];
    document.querySelector("#chB").innerHTML = question.choices[1];
    document.querySelector("#chC").innerHTML = question.choices[2];
    document.querySelector("#chD").innerHTML = question.choices[3];
}
//listen for click on the buttons to determine the person's answer
//somehow compare that to the correct answer
//we don't have to store their answer, just check if it's correct
//and act on that event  vvvvvv

for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        //when they click any quizBtn grab value out of that option  
        
        //if they got it right
        if(event.currentTarget.innerText === quizQs[currentIndex].answer){
            score++;
            console.log(score);
            //display "correct!" and continue 
            document.querySelector("#checkAns").innerHTML = "correct";
        } else {
            //if they got it wrong display "wrong!"
            // deduct 5 seconds from the clock and continue 
            document.querySelector("#checkAns").innerHTML = "wrong";
            secondsLeft = secondsLeft - 15;
        }
        console.log("Current Index before ++" + currentIndex);
        //go to the next question
        currentIndex++;
        
        if (currentIndex < 5) {
        //go back to the questions
        showQs();
        }
    });
}


