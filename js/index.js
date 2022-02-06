(function(){
  function buildQuiz() {
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll('.answers');


    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
      }
    });

    resultsContainer.innerHTML = `You're score is: ${numCorrect}`;
  }

  const quizContainer = document.getElementById('Questionnaire');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is the correct answer?",
      answers: {
        a: "Wrong",
        b: "Wrong",
        c: "Correct"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is the correct answer?",
      answers: {
        a: "Wrong",
        b: "Correct",
        c: "Wrong"
      },
      correctAnswer: "b"
    },
    {
      question: "What answer is correct?",
      answers: {
        a: "Correct",
        b: "Wrong",
        c: "Wrong",
      },
      correctAnswer: "a"
    },
    {
      question: "Which answer is correct?",
      answers: {
        a: "Correct",
        b: "Wrong",
        c: "Wrong",
      },
      correctAnswer: "a"
    },
    {
      question: "What is the right answer?",
      answers: {
        a: "Wrong",
        b: "Wrong",
        c: "Correct"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is the right answer?",
      answers: {
        a: "Wrong",
        b: "Correct",
        c: "Wrong"
      },
      correctAnswer: "b"
    },
    {
      question: "What answer is right?",
      answers: {
        a: "Correct",
        b: "Wrong",
        c: "Wrong",
      },
      correctAnswer: "a"
    },
    {
      question: "Which answer is right?",
      answers: {
        a: "Correct",
        b: "Wrong",
        c: "Wrong",
      },
      correctAnswer: "a"
    }
  ];
  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();