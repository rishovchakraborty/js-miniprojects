const question=[
    {
        question: '23+27=?',
        answers: [
            {text:'30' , correct: false},
            {text:'40' , correct: false},
            {text:'50' , correct: true},
            {text:'60' , correct: false}
        ]
    },
    {
        question: 'how many tons Kohli have in ODIs?',
        answers: [
            {text:'200' , correct: false},
            {text:'80' , correct: false},
            {text:'38' , correct: false},
            {text:'50' , correct: true}
        ]
    },
    {
        question: 'What is the capital city of France?',
        answers: [
            {text:'paris' , correct: true},
            {text:'delhi' , correct: false},
            {text:'barlin' , correct: false},
            {text:'dhaka' , correct: false}
        ]
    },
    {
        question: 'How many continents are there on Earth?',
        answers: [
            {text:'3' , correct: false},
            {text:'6' , correct: false},
            {text:'7' , correct: true},
            {text:'9' , correct: false}
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            {text:'H2' , correct: false},
            {text:'H20' , correct: true},
            {text:'NH3' , correct: false},
            {text:'CO3' , correct: false}
        ]
    }
]

const questionElement= document.getElementById('question')
const ansButtons= document.getElementById('ans-button')
const nextButton= document.getElementById('next-btn')

let currentQuesIndex=0
let score=0

function startQuiz(){
    currentQuesIndex=0;
    score=0;
    nextButton.innerHTML='Next'
    showQuestion()
}


function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(ansButtons.children).forEach(button =>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct')
        }
        button.disabled=true;
    })
    nextButton.style.display='block'
}

function resetState(){
    nextButton.style.display='none'
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild)
    }
}

function showQuestion(){
    resetState()
    let currentQuestion= question[currentQuesIndex]
    let questionNo= currentQuesIndex+1
    questionElement.innerHTML= questionNo+'. '+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement('button')
        button.innerHTML=answer.text
        button.classList.add('btn')
        ansButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function showScore(){
    resetState()
    questionElement.innerHTML=`your score is ${score} out of ${question.length}`;
    nextButton.innerHTML='play again'
    nextButton.style.display='block'
}


function handleNextBtn(){
    currentQuesIndex++;
    if(currentQuesIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuesIndex < question.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})


startQuiz()
