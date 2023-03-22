let submit = document.getElementById('submit')
let rate = document.getElementById('rate')
let thanks = document.getElementById('thanks')
let uno = document.getElementById('1')
let dos = document.getElementById('2')
let tres = document.getElementById('3')
let cuatro = document.getElementById('4')
let cinco = document.getElementById('5')
let number = document.getElementById('number')

submit.addEventListener('click',()=>{
    rate.style.display="none"
    thanks.style.display='flex'
})

uno.addEventListener('click',()=>{
    number.textContent='1'
    uno.style.backgroundColor='hsl(217, 12%, 63%)'
    uno.style.color='white'
    dos.style.backgroundColor='hsl(216, 12%, 8%)'
    dos.style.color='hsl(217, 12%, 63%)'
    tres.style.backgroundColor='hsl(216, 12%, 8%)'
    tres.style.color='hsl(217, 12%, 63%)'
    cuatro.style.backgroundColor='hsl(216, 12%, 8%)'
    cuatro.style.color='hsl(217, 12%, 63%)'
    cinco.style.backgroundColor='hsl(216, 12%, 8%)'
    cinco.style.color='hsl(217, 12%, 63%)'
})

dos.addEventListener('click',()=>{
    number.textContent='2'
    dos.style.backgroundColor='hsl(217, 12%, 63%)'
    dos.style.color='white'
    uno.style.backgroundColor='hsl(216, 12%, 8%)'
    uno.style.color='hsl(217, 12%, 63%)'
    tres.style.backgroundColor='hsl(216, 12%, 8%)'
    tres.style.color='hsl(217, 12%, 63%)'
    cuatro.style.backgroundColor='hsl(216, 12%, 8%)'
    cuatro.style.color='hsl(217, 12%, 63%)'
    cinco.style.backgroundColor='hsl(216, 12%, 8%)'
    cinco.style.color='hsl(217, 12%, 63%)'
})

tres.addEventListener('click',()=>{
    number.textContent='3'
    tres.style.backgroundColor='hsl(217, 12%, 63%)'
    tres.style.color='white'
    dos.style.backgroundColor='hsl(216, 12%, 8%)'
    dos.style.color='hsl(217, 12%, 63%)'
    uno.style.backgroundColor='hsl(216, 12%, 8%)'
    uno.style.color='hsl(217, 12%, 63%)'
    cuatro.style.backgroundColor='hsl(216, 12%, 8%)'
    cuatro.style.color='hsl(217, 12%, 63%)'
    cinco.style.backgroundColor='hsl(216, 12%, 8%)'
    cinco.style.color='hsl(217, 12%, 63%)'
})

cuatro.addEventListener('click',()=>{
    number.textContent='4'
    cuatro.style.backgroundColor='hsl(217, 12%, 63%)'
    cuatro.style.color='white'
    dos.style.backgroundColor='hsl(216, 12%, 8%)'
    dos.style.color='hsl(217, 12%, 63%)'
    tres.style.backgroundColor='hsl(216, 12%, 8%)'
    tres.style.color='hsl(217, 12%, 63%)'
    uno.style.backgroundColor='hsl(216, 12%, 8%)'
    uno.style.color='hsl(217, 12%, 63%)'
    cinco.style.backgroundColor='hsl(216, 12%, 8%)'
    cinco.style.color='hsl(217, 12%, 63%)'
})

cinco.addEventListener('click',()=>{
    number.textContent='5'
    cinco.style.backgroundColor='hsl(217, 12%, 63%)'
    cinco.style.color='white'
    dos.style.backgroundColor='hsl(216, 12%, 8%)'
    dos.style.color='hsl(217, 12%, 63%)'
    tres.style.backgroundColor='hsl(216, 12%, 8%)'
    tres.style.color='hsl(217, 12%, 63%)'
    cuatro.style.backgroundColor='hsl(216, 12%, 8%)'
    cuatro.style.color='hsl(217, 12%, 63%)'
    uno.style.backgroundColor='hsl(216, 12%, 8%)'
    uno.style.color='hsl(217, 12%, 63%)'
})




