var myQuestions = [
    {
        question: " QUESTION 1: What is the name of Stan's unpublished children's book series? ",
        answers: {
			a: 'Patriot Pigeon',
            b: 'Eager Eagle',
            c: 'American Bird',
			d: 'Uncle Sams Parakeet'
        },
        correctAnswer: 'a'
    },
    {
        question: " QUESTION 2: What is Steve's middle name? ",
        answers: {
            a: 'Anita',
            b: 'Catherine',
            c: 'Eliza',
			d: 'Stella'
        },
        correctAnswer: 'a'
    },
	{
        question: " QUESTION 3: Which government agency does Stan work for? ",
        answers: {
            a: 'DEA',
            b: 'FBI',
            c: 'NSA',
			d: 'CIA'
        },
        correctAnswer: 'd'
	},
	{
        question: " QUESTION 4: Who plays Stan's boss? ",
        answers: {
            a: 'Ian McKellen',
            b: 'Patrick Stewart',
            c: 'Christopher Lee',
			d: 'Alec Guinness'
        },
        correctAnswer: 'b'
	},
	{
        question: " QUESTION 5: What are Steve and Roger's fictional detectives called? ",
        answers: {
            a: 'Steve and the Alien',
            b: 'Jake and the Fatman',
            c: 'Wheels and the Legman',
			d: 'Rust Cohle and Marty Hart'
        },
        correctAnswer: 'c'
	},
    {
        question: " QUESTION 6: Which Soft Drink Are Stan And Francine Obsessed With? ",
        answers: {
            a: 'Schewepps',
            b: 'Mountain Dew',
            c: 'Dr. Pepper',
			d: 'Mr. Pibb'
        },
        correctAnswer: 'd'
	},
    {
        question: " QUESTION 7: What is the name of Hayley's boyfriend? ",
        answers: {
            a: 'Al Tuttle',
            b: 'Reginald',
            c: 'Brian Lewis',
			d: 'Jeff Fischer'
        },
        correctAnswer: 'd'
	},
    {
        question: " QUESTION 8: What is the name of the fish in the show",
        answers: {
            a: 'Klaus',
            b: 'Rusty',
            c: 'Kevin',
			d: 'Barry'
        },
        correctAnswer: 'a'
	},
    {
        question: " QUESTION 9: What was the name of Stan's childhood bully? ",
        answers: {
            a: 'Luis',
            b: 'Stelio Kontos',
            c: 'Tank Bates',
			d: 'Ricky Spanish'
        },
        correctAnswer: 'b'
	},
    {
        question: " QUESTION 10: After Hayley attends a music concert, what band does Stan become obsessed with? ",
        answers: {
            a: 'Phish',
            b: 'CeeLo Green',
            c: 'My Morning Jacket',
			d: 'Twisted Root'
        },
        correctAnswer: 'c'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var resetButton= document.getElementById('reset')
var x = 90;



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer
            for( letter in questions[i].answers){

                // add an html radio button
                answers.push(
                    '<label>' 
                        + '<input type="radio" name="question'+i+'" value="'+ letter +'">' 
                       + letter + ': '

						+ questions[i].answers[letter]

                    + '</label>'
                );
            }

            // add this question and its answers to output
            output.push(
                '<p>'+'<div class="question">' + questions[i].question + '</div>'+'</p>'
                + '<div class="answers">' + answers.join('    ') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total # of questions
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results, stops timer, and disable submit button
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        window.clearInterval(update);
        c = "-";
        document.getElementById("submit").disabled=true;
        document.getElementById("reset").disabled=false;
    }

}

resetButton.onclick = function(){
    window.location.reload();



}





//timer starts at 200, once it hits zero, time left: EXPIRED! and submit button is disabled.
function time(){
x = x - 1;
if (x < 90){
Timer.innerHTML = x;
document.getElementById("reset").disabled=true;
}
if (x < 1){
    window.clearInterval(update);
    
    Timer.innerHTML= "EXPIRED!";
    
    document.getElementById("submit").disabled=true;
    document.getElementById("reset").disabled=false;
    
}
}

update= setInterval("time()", 1000);