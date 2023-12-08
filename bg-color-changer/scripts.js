function getHex(){
    let letters='0123456789ABCDEF'
    let color='#'

    for(let i=0;i<6;i++){
        color+=letters[(Math.floor(Math.random()*16))]
    }
    return color
}

const button= document.querySelector('.btn')
const body = document.querySelector('body')

button.addEventListener('click',function(e){
    let hex= getHex()
    document.getElementById('hex').innerHTML=hex
    document.getElementsByTagName('body')[0].style.backgroundColor=hex
})