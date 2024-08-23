const quizData = [
    {
        question: "QUANTAS GERAÇÕES DE POKEMON EXITEM ATÉ HOJE?",
        a: "1",
        b: "3",
        c: "6",
        d: "9",
        correct: "d",
    },
    {
        question: "QUAL O POKEMON NÚMERO 500 DA POKEDEX?",
        a: "Bulbasaur",
        b: "Emboar",
        c: "Fennekin",
        d: "Slowbro",
        correct: "b",
    },
    {
        question: "QUAL O DEUS DOS POKEMONS?",
        a: "Arceus",
        b: "Charizard",
        c: "Rattata",
        d: "Lopunny",
        correct: "a",
    },
    {
        question: "QUANTA EVOLUÇÕES TEM O EEVEE?",
        a: "1",
        b: "10",
        c: "8",
        d: "6",
        correct: "c",
    },
    {
        question: "QUAL A FUNÇÃO DO ITEM 'LEFTOVERS'?",
        a: "Recuperar um pouco da vida",
        b: "Matar na hora",
        c: "aumentar o dano",
        d: "rebolar lentinho pros cria",
        correct: "a",
    },
    {
        question: "QUAL O POKEMON MAIS FRACO?",
        a: "Wishwash (solo)",
        b: "Rayquaza",
        c: "Wihwash (school)",
        d: "Pichu",
        correct: "a",
    },
    {
        question: "QUAL ATAQUE IGUALA A VIDA DO ALVO COM A DO USUÁRIO?",
        a: "Splash",
        b: "Hyper Beam",
        c: "Endeavor",
        d: "Tri attack",
        correct: "c",
    },
    {
        question: "QUANTOS ANOS TEM O ASH?",
        a: "1",
        b: "9",
        c: "10",
        d: "24",
        correct: "c",
    },
    {
        question: "UM TIME DE POKEMON É FORMADO POR QUANTOS INDIVIDUOS?",
        a: "1",
        b: "5",
        c: "6",
        d: "10",
        correct: "c",
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

                <button onclick="location.reload()">Errei fui mlk</button>
            `
        }
    }
})