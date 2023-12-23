'use strict';

let number = Math.trunc(Math.random()*20)+1
document.querySelector('.number').textContent='?'
let highScore=0;
let score=20;

document.querySelector('.check').addEventListener('click',()=>{
    const guess= Number(document.querySelector('.guess').value)

    if(!guess){
        document.querySelector('.message').textContent='No number Bro!'



        //player wins
    }else if( guess===number){
        document.querySelector('.message').textContent='correct number dude'

        document.querySelector('.number').textContent=number

        document.querySelector('body').style.backgroundColor='#60b347'

        document.querySelector('.number').style.width='30rem'

        if(score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent=highScore
        }


    }else if(guess>number){
       if(score>1){
        document.querySelector('.message').textContent='high guess! try again'
        score--
        document.querySelector('.score').textContent=score
       }else{
        document.querySelector('.message').textContent='opps! hard luck...you lost the game'
        document.querySelector('.score').textContent=0
        document.querySelector('body').style.backgroundColor='red'
        document.querySelector('.number').textContent=number
       }
    }else if(guess<number){
        if(score>1){
            document.querySelector('.message').textContent='low guess! try again'
        score--
        document.querySelector('.score').textContent=score
        }else{
            document.querySelector('.message').textContent='opps! hard luck...you lost the game'
            document.querySelector('.number').textContent=number
            document.querySelector('.score').textContent=0
            document.querySelector('body').style.backgroundColor='red'

           }
    }
})

document.querySelector('.again').addEventListener('click',()=>{
    score=20
    number= Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent='Start Guessing...'
    document.querySelector('.score').textContent=score
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222'

    document.querySelector('.number').style.width='15rem'
})
