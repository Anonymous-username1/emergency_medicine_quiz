/* 21.50, 19/12/22 - I have incorporated step 1 to create Skinner's question bank */
/* 21.52, 24/01/23 - I have finally incorporated the step 2 to make it adaptive */
/* 17.24, 14/02/23 - I have separated the array from th main programme, and adapted the programme to include a submit and next buttons, and to get some feedback when answering questions*/
/* 23.50, 24/02/23 - I have created the feedback system for the questions - a lot of jQuery was involved, since I could not use const currentQuizData outside of loadQuiz() function. */
/* 18.00, 26/02/23 - I deeply struggled to format the contents of my explanation box via the quizData array of objects, so I have to link the content to separate google pages.*/

const start_btn = document.getElementById('start_btn');
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const option_list = document.querySelector(".option_list");

/* Using a start button means that loadQuiz(), 
and the number variables no longer need to be defined outside the main commands */

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')

/*let question_tag = '<span>' + number of question + "." + currentQuizData.question + '</span>';*/
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')
const nextBtn = document.getElementById('next')

const explanation_title = document.getElementById("explanation_title");
const explanation = document.getElementById("explanation_text");

const result_box = document.querySelector(".result_box");
//const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


let shuffledQuestions, currentQuestionIndex, currentQuiz, progressScore

let allOptions = option_list.children.length

/* The above returns the value of the 
elements created in HTML, if the element
 does not exist it returns null */


/* This variable will be assigned a number
 value representing each question from 
 the quizData Array 
 
 window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});
 


let imageArray = ['none', 
                'https://www.aclsmedicaltraining.com/wp-content/uploads/2020/09/Figure-3.jpg', 
                'https://www.healio.com/~/media/learningsites/learntheheart/assets/f/2/6/8/anteriorstemiecg_blog.png',
            ]

 */

function scroll () {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
};

function scrollDown () {
    window.scrollTo({top: 2000, left: 0, behavior: 'smooth'});
    //window.scrollTo(0,document.body.scrollHeight, {behavior: 'smooth'});
};


function startGame() {
    console.log('started')
    start_btn.classList.add('hide')
    shuffledQuestions = quizData.sort(() => Math.random() - .5)
    console.log (shuffledQuestions)
    currentQuestionIndex = 0
    currentQuiz = 0
    primaryProgress = 0
    secondaryProgress = 0
    score = 0
    quiz_box.classList.remove('hide')
    nextBtn.classList.add("disabled");
    loadQuiz()
}


function loadQuiz(){ 
    
    answerEls.forEach(answerEl => answerEl.checked = false)
    primaryProgress++
    queCounter(primaryProgress)
    //shuffledQuestions.length < currentQuestionIndex + 1
    if ( 5 < primaryProgress) {
        showResultBox()
    } else {
        /*each time a question is run, the options are deselected */

        const currentQuizData = shuffledQuestions[currentQuestionIndex][currentQuiz]
        
        function image () {
            if (currentQuizData.image === "none") {
                console.log(currentQuizData.image)
                $('#theImage').css("display", "none");
            } else {
                $('#theImage').css("display", "block");
                var theImage = document.getElementById('theImage');
                theImage.src = currentQuizData.image
            }
        }
        /* I have used the random number generator to shuffle the quizData 2D array, 
        so that questions are never asked in the exact same order */

        questionE1.innerText = currentQuizData.question
        image ()
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
        /* This function is used to link the HMTL elements using 
        their constants in javascript to the properties in the quizData
        Array so that they are displayed when loadQuiz()*/

        explanation_title.innerText = currentQuizData.explanationTitle
        explanation.innerText = currentQuizData.explanation
        var link = document.getElementById('theLink');
        //const found = links.find(element => (element === currentQuizData.link))
        //console.log(found)
        link.href = currentQuizData.link

        /*Make these be defined here, but use CSS to make the box appear once submit has been pressed. */
    }
    
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}


function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ 5 +'</p>Questions</span>'
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function showResultBox() {
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.remove("activeQuiz"); //hide the quiz box
    result_box.classList.add("activeInfo"); //show the result box
    
    const total_score = result_box.querySelector(".score_text");
    let totalScore = '<span>You got<p>'+ score +'</p>out of<p>'+ (primaryProgress - 1) +'</p></span>'
    total_score.innerHTML = totalScore;
    scroll ()
}

/* start button now takes you to an information page that explains what to expect from the programme */
start_btn.onclick = () => {
    info_box.classList.add("activeInfo")
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo")
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo")
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    startGame()
}

function optionSelected() {
    const answer = getSelected()
    if (answer) {
        currentQuiz++
        trueAns = shuffledQuestions[currentQuestionIndex][currentQuiz - 1].correct
        $('#section2').css("display", "");
        if (answer === trueAns) {
            console.log ("You are correct!")
            $('#'+ trueAns +'').parent().addClass("correct")
            console.log (answer)

            span = document.getElementById("qualifier");
            txt = document.createTextNode("Well done, You are correct!");
            span.appendChild(txt);
            $('#qualifier').css("display", "");
            
            score++
        } else {
            console.log ("You are Wrong!")
            $('#'+ answer +'').parent().addClass("incorrect")
            $('#'+ trueAns +'').parent().addClass("correct")
            console.log (answer)
            
            span = document.getElementById("qualifier");
            txt = document.createTextNode("Sorry, you are Wrong!");
            span.appendChild(txt);
            $('#qualifier').css("display", "");
            
        }


        for (let i=0; i < allOptions; i++) {
            option_list.children[i].classList.add("disabled");
        }
        submitBtn.classList.add("disabled");
        nextBtn.classList.remove("disabled");
    }
}

/* using separate submit and next buttons allows the user to 
get some feedback from the programme on how they asnwered the questions. */

submitBtn.onclick = () => {
    optionSelected()
    scrollDown ()
} 

nextBtn.onclick = () => {
    $('#qualifier').empty();
    $('#qualifier').css("display", "none");
    $('#section2').css("display", "none");

    nextBtn.classList.add("disabled");
    
    
    for (let i=0; i < allOptions; i++) {
        option_list.children[i].classList.remove("disabled");
    }
    
    submitBtn.classList.remove("disabled");
    scroll ()
    const answer = getSelected()
    $('#'+ trueAns +'').parent().removeClass("correct")
    $('#'+ answer +'').parent().removeClass("incorrect")
    if(answer === shuffledQuestions[currentQuestionIndex][currentQuiz - 1].correct) {
        currentQuiz = 0
        secondaryProgress = 0
        currentQuestionIndex++
        loadQuiz()

    } else if ((secondaryProgress < currentQuiz) && (currentQuiz < 4)) {
        loadQuiz()
        secondaryProgress++
    } else {
        currentQuiz = 0
        secondaryProgress = 0
        currentQuestionIndex++
        loadQuiz()
    }
}



/* Plan:
Add all the questions to the programme.
*/
