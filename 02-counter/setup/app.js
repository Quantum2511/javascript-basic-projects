// set initial count
let count = 0

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(butt => {
    
    butt.addEventListener('click', (e) =>{
        // console.log(butt);
        // const styles = (butt.classList)
        // console.log(styles)

        // the above works completely fine so why should we have a parameter e and add currentTarget to it

        const styles = e.currentTarget.classList
        console.log(styles)
        if(styles.contains('decrease')){
            count-=1
        } else if(styles.contains('increase')){
            count+=1
        } else{
            count=0
        }
        value.textContent = count

    })
});



