$(document).ready(function () {

  //Timer 
  var countDown = 30;
  var quizTimer = setInterval(function () {
    countDown--;

    document.getElementById('timer').textContent = countDown;

    if (countDown <= 0)
      clearInterval(quizTimer);
  }, 1000)
});


//Build Quiz
(function () {
  function newQuiz() {
    //Array to store HTML output
    var output = [];

    //For each question loop
    quizQs.forEach((newQs, qNum) => {
      //Array to store answers
      var answers = [];


      for (ansLetter in newQs.answers) {
        //Add radio button for each answer - Found this snippet on another site and modified.
        answers.push(
          `<label>
              <input type="radio" name="question${qNum}" value="${ansLetter}">
              ${ansLetter} :
              ${newQs.answers[ansLetter]}
             </label>`
        );
      }

      //Push question and answers to answers array
      output.push(
        `<div class="question"> ${newQs.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
      );
    });

    //Push the questions, answers, and radio buttons to HTML
    quizContainer.innerHTML = output.join("");
  }

  //Track answers
  function showResults() {
    var answerArrays = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    //Get users answers
    quizQs.forEach((newQs, qNum) => {
      //This section contains some snippets from other sites that have been combined or modified
      var answerArray = answerArrays[qNum];
      var selector = `input[name=question${qNum}]:checked`;
      var userAnswer = (answerArray.querySelector(selector) || {}).value;

      // Increment CORRECT if answer is correct
      if (userAnswer === newQs.correctAnswer) {
        numCorrect++;

        //Change correct answers to green/wrong answers to red
        answerArrays[qNum].style.color = "green";
      } else {
        answerArrays[qNum].style.color = "red";
      }
    });

    //Display score
    resultsArray.innerHTML = `${numCorrect} out of ${quizQs.length}`;
  }

    //Write ot Scoreboard
  var quizContainer = document.getElementById("quiz");
  var resultsArray = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var quizQs = [
    {
      question: "Which of the following was NOT an Egyptian God or Goddess??",
      answers: {
        a: "Atum",
        b: "Horus",
        c: "Gollum",
        d: "Taweret",
      },
      correctAnswer: "c"
    },
    {
      question: "Meaning Many Gods, What term describes the Religion of Ancient Egypt?",
      answers: {
        a: "Monotheistic",
        b: "Monolethic",
        c: "Polytheistic",
        d: "Zoomorphism",
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following was the main medium of economic exchange for Ancient Egypt??",
      answers: {
        a: "Grain",
        b: "Viziers",
        c: "Cattle",
        d: "Egyptian Deniers",
      },
      correctAnswer: "a"
    },
    {
      question: "Avoiding this was a major theme in Egyptian Religion.",
      answers: {
        a: "Chaos",
        b: "Condemnation",
        c: "Crocodiles",
        d: "Confusion",
      },
      correctAnswer: "a"
    },
    {
      question: "The symbols associated with Egyptian language are called.",
      answers: {
        a: "Cuneiform",
        b: "Rosetta Symbols",
        c: "Hieroglyphics",
        d: "Sanskrit",
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following groups were important in the social hierarchy as they had the duty to teach reading and writing?",
      answers: {
        a: "Pharisees",
        b: "Artisans",
        c: "Assyrians",
        d: "Scribes",
      },
      correctAnswer: "d"
    }
  ];

  //Call function `build quiz`
  newQuiz();

  //Button to display score
  submitButton.addEventListener("click", showResults);
  $(function () {
    $('.ra').click(function () {

      $('.ra').hide();
      $('.ra').show();
    });
  })
})();