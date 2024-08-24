let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#Reset-btn")
let newGameBtn=document.querySelector("#newGame-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
};
let count=0;
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";       
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
        checkDraw(count);
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText="Congratulations, winner is "+winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){

    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
    }
    }
};

newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

const checkDraw=(count)=>{
    if(count==9){
        msg.innerText="Match Draw";
        msgContainer.classList.remove("hide");
    disableBoxes();
    }
}