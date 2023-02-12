// Short Ways to manipulate DOM elements
// const c1 = document.querySelector('#myid')
const divsContainer=[...document.querySelectorAll('.containerchild')]

const elements = divsContainer.map((el) =>{
    if(el.tagName === 'DIV'){
        el.classList.add('containersStyle')
    }else{
        console.log('Element Changed!')
    }
})















