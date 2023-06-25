// list of questions in an object
const quizData = [
    {
        question:'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question:'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question:'Who is the current president of Kenya?',
        a: 'Jomo Kenyatta',
        b: 'Daniel Toroitich Moi',
        c: 'Stanley Kibaki',
        d: 'William Samoei Ruto',
        correct: 'd'
    },
    {
        question:'What does HTML stand for?',
        a: 'Hypertext MArkup Language',
        b: 'Cascading Style Sheet',
        c: 'JSon Object Notation',
        d: 'Helicopters Terminals Motorbikes Lamborginis',
        correct: 'a'
    },
    {
        question:'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'd'
    }
]

const questionE1 = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

// const submitBtn = document.getElementById('submit')
const answerEls = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")
let currentQuiz = 0
// let answer = undefined


loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionE1.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

    

}

function getSelected(){
    let answer = undefined
    for(answerElement in answerEls){
        if(answerElement.checked){
            answer = answerElement.checked
        }
    }

    return answer
}

function deselectAnswers(){
   for(answerElement in answerEls){
    answerElement.checked = false
   }
}


function submitButtonClick(){
    let answer = getSelected()
    let score = 0
    
    if(answer === quizData[currentQuiz].correct){
        score += 1
    }
    

    currentQuiz++
    if (currentQuiz < quizData.length){
        loadQuiz()
    } else{
        quiz.innerHTML = `<h2>You answered correctly on ${score}/
        ${quizData.length} questions.</h2> <button
         onclick="location.reload()">Reload</button>`
    }
}
