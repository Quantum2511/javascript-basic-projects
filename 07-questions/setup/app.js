//using selectors inside the element

const questions =  document.querySelectorAll('.question')

questions.forEach(question => {
    const questionBtn = question.querySelector('.question-btn')

    questionBtn.addEventListener('click', () => {
        
        questions.forEach(item => {
            if(item!==question){
                item.classList.remove('show-text')
                console.log(item)
            }
        })
        
        question.classList.toggle('show-text')
    })

})


// traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn')

// questionBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const parent = (e.currentTarget.parentElement.parentElement);
//         const allBtns = btn.parentElement.parentElement
//         parent.classList.toggle('show-text')
        
//     })
// })


