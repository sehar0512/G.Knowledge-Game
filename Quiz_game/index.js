const quiz=[
    {
        question: 'What is the capital of Poland?',
        a:'Lisbon',
        b:'Warsaw',
        c:'Valletta',
        ans:'ans2'
    },
    {
        question: 'What was the most downloaded app of 2020?',
        a:'Instagram',
        b:'Whatsapp',
        c:'Tik Tok',
        ans:'ans3'
    },
    {
        question: 'Europe is separated from Africa by which sea?',
        a:'Black Sea',
        b:'Mediterranean Sea',
        c:'The Indian Ocean',
        ans: 'ans2'
    },
    {
        question: 'What is the collective name for a group of crows?',
        a:'Murder',
        b:'parliament',
        c:'drift',
        ans:'ans1'
    },
    {
        question: 'Which of Shakespeare’s plays is the longest?',
        a:'Richard',
        b:'Macbeth',
        c:'Hamlet',
        ans:'ans3'
    },
    {
        question: 'Vanilla comes from what flowers?',
        a:'Orchids',
        b:'Carnation',
        c:'Hyacinth',
        ans:'ans1'
    },
    {
        question: 'How many pounds are in a stone?',
        a:'14',
        b:'18',
        c:'12',
        ans:'ans1'
    },
    {
        question: "Brothers Richard and Maurice founded which company in 1940?",
        a:'Amazon',
        b:'KFC',
        c:"McDonald's",
        ans:'ans3'
    },
    {
        question: "What colour is a giraffe's tongue?",
        a:'Red',
        b:'Blue',
        c:"Orange",
        ans:'ans2'
    },
    {
        question: "Z and which other letter are worth the most in Scrabble?",
        a:'Q',
        b:'S',
        c:"X",
        ans:'ans1'
    },
]
let gameCont = document.getElementById('gameCont');
let scoreCont = document.getElementById('scoreCont');
let quest= document.getElementById('quest');
let op1= document.getElementById('op1');
let op2= document.getElementById('op2');
let op3= document.getElementById('op3');
let options= document.getElementsByName('options');
let scoreVal=document.getElementById('score');
let submit = document.getElementById('btn');

gameCont.classList.remove('d-none');
scoreCont.classList.add('d-none');

let score=0;
let quesCount=0;

const LoadQuestion=()=>{
    quest.innerText = quiz[quesCount].question;
    op1.innerText = quiz[quesCount].a;
    op2.innerText = quiz[quesCount].b;
    op3.innerText = quiz[quesCount].c;
}

LoadQuestion();

const checkAns=()=>{
    let selectedOp;
        options.forEach(e =>{
            if(e.checked){
                selectedOp = e.id;
                e.checked=false;
            }
        })
        return selectedOp;
        
}

submit.addEventListener('click',()=>{
    let ansValue = checkAns();
    if(ansValue === quiz[quesCount].ans){
        score++;
    }
    
    quesCount++;
    if(quesCount < quiz.length){
    LoadQuestion();
    }
    else{
        gameCont.classList.add('d-none');
        scoreCont.classList.remove('d-none');
        score = score*100;
        scoreCont.innerHTML=`
        <h1>Your Score</h1>
        <h2 id="score">${score}</h2>
        <div class="text-center my-4">
        <button class="btn btn-primary" id="btn" onclick="location.reload()">Play Again</button>
    </div>`;

    }
})


