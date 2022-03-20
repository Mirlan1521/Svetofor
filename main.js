const start = document.querySelector('#button')

start.onclick = function() {
    let result = prompt('Введите цвет')
    if(result==='зеленый'){
       const element = document.querySelector('.circle1')
        element.style.backgroundColor = 'green'
        const p = document.createElement('p');
        p.innerText = 'GO';
        element.append(p)

    }

   if(result==='желтый') {

        const element2 = document.querySelector('.circle2')
        element2.style.backgroundColor = 'yellow'
        const p = document.createElement('p');
        p.innerText = 'WAIT';
        element2.append(p)
    }
   if(result==='красный') {

        const element3 = document.querySelector('.circle3')
        element3.style.backgroundColor = 'red'
        const p = document.createElement('p');
        p.innerText = 'STOP';
        element3.append(p)
    }
    };

