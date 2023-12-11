let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset");
let newGame = document.querySelector('#new');
let msgCont= document.querySelector('.msg')
let msg = document.querySelector('#msg');

let turno = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


const resetGame = ()=>{
    turno=true;
    enabledBtn();
    msgCont.classList.add('hide');
}

const enabledBtn = () =>{
    for( let box of boxes){
        box.disabled= false;
        box.innerHTML='';
    }

}

const disabledBtn =() =>{
    for( let box of boxes){
        box.disabled= true;
    }
}

const showWinner=(winner) => {
    msg.innerHTML=` congratulations!!!  your winner is ${winner}`
    msgCont.classList.remove('hide');
    disabledBtn();
}

const checkwinner = () => {
    for (let patterns of winpattern) {

        let pos1 = boxes[patterns[0]].innerHTML;
        let pos2 = boxes[patterns[1]].innerHTML;
        let pos3 = boxes[patterns[2]].innerHTML;
        if(pos1 != "" && pos2 !='' && pos3 !=''){
            if(pos1===pos2 && pos2===pos3){
                console.log('winner',pos1);
                showWinner(pos1);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turno) {
            box.innerHTML = 'o'
            turno = false
        } else {
            box.innerHTML = 'x'
            turno = true
        }
        box.disabled = true;
        checkwinner();
    })
})

newGame.addEventListener('click',resetGame);
reset_button.addEventListener('click',resetGame);