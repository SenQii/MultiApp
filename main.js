const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);

const QuesElm = document.getElementById("txt");
const inputElm = document.getElementById("input");
const formElm = document.getElementById("form");
const scorElm = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

QuesElm.innerText =` حاصل ضرب ${n1} في ${n2} ؟`;

scorElm.innerText = `نقاطك : ${score}`
const correctAns = n1 * n2;

formElm.addEventListener("submit", ()=>{
    const userAns = +inputElm.value;
    // console.log(userAns, typeof userAns);
    if(userAns === correctAns){
        score++;
        console.log(score)
        ubdateLocalStrg()
        
    }else{
        score--;
        console.log(score)
        ubdateLocalStrg()
    }
    // console.log(userAns)
})


if(score === 10){
    //u win
}else if(score === -10){
    // u lose
}

function ubdateLocalStrg(){
    localStorage.setItem("score", JSON.stringify(score))
}
