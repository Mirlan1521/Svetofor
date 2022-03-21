const start = document.querySelector('#button')

start.onclick = function() {
    let result = prompt('Введите цвет')
    if(result==='зеленый'){
       const element = document.querySelector('.circle1')
        element.style.backgroundColor = 'green'
        const element2 = document.querySelector('.circle2')
        element2.style.backgroundColor = 'transparent'
        const element3 = document.querySelector('.circle3')
        element3.style.backgroundColor = 'transparent'
        alert('GO')

    }

   if(result==='желтый') {

        const element2 = document.querySelector('.circle2')
        element2.style.backgroundColor = 'yellow'
        const element3 = document.querySelector('.circle3')
        element3.style.backgroundColor = 'transparent'
        const element = document.querySelector('.circle1')
        element.style.backgroundColor = 'transparent'
       alert('WAIT')

    }
   if(result==='красный') {

        const element3 = document.querySelector('.circle3')
        element3.style.backgroundColor = 'red'
        const element = document.querySelector('.circle1')
        element.style.backgroundColor = 'transparent'
       const element2 = document.querySelector('.circle2')
        element2.style.backgroundColor = 'transparent'
       alert('STOP')

    }
    };

