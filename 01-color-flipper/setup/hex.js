const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 
//list length = 16
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let st="#"
    for(let i=0; i<6; i++){
        console.log(st+=hex[getRandomNumber()])
    }
    document.body.style.backgroundColor = st
    color.textContent = st
})

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length)
}