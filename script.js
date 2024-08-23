const quizData = [
    {
        question: "quem nasceu primeiro o ovo ou a galinha?",
        a: "ovo",
        b: "galinha",
        c: "os dois",
        d: "nem um",
        correct: "b",
    },
    {
        question: "que dia é hoje?",
        a: "23 de agosto",
        b: "30 de janeiro",
        c: "12 de agosto",
        d: "01 de abril",
        correct: "a",
    },
    {
        question: "oque aconteceu em 2020?",
        a: "guerra mundial",
        b: "pandemia covid-19",
        c: "eleição do bolsonaro",
        d: "afundou o titanic",
        correct: "b",
    },
    {
        question: "quando getulio vargas nasceu?",
        a: "1882",
        b: "1996",
        c: "1994",
        d: "2026",
        correct: "a",
    },
    {
        question: "quando a rainha elizabeth morreu?",
        a: "23 de junho",
        b: "1999",
        c: "10 de dezembro",
        d: "08 de setembro",
        correct: "d",
    },
    {
        question: "como se fala mãe em ingles ?",
        a: "mom",
        b: "mãe",
        c: "pather ",
        d: "mather",
        correct: "d",
    },
    {
        question: "oque é comemorado no dia 28 de março ?",
        a: "quaresma",
        b: "semana santa",
        c: "dia das mães",
        d: "morte do silvio santos",
        correct: "b",
    },
    {
        question: "quem canta a musica fundo da grota ?",
        a: "billie eilish",
        b: "anitta",
        c: "baitaca",
        d: "pablo vitar",
        correct: "c",
    },
    {
        question: "quando se comemora o natal ?",
        a: "janeiro",
        b: "dezembro",
        c: "outubro",
        d: "março",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})