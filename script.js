const board = document.querySelector('.board')

let number = 500

for (let i = 0; i < number; i++) {

    let div = document.createElement('div')

    div.classList.add('box')

    div.addEventListener('mouseover', () => {/* событие  наведения мыши*/
        div.style.background = `#${random()}`
        div.style.boxShadow = '0 0 2px seagreen'
    })

    div.addEventListener('mouseleave', () => { /* событие когда машь уводим */
        div.style.background = 'rgba(20, 20, 20)'
        div.style.boxShadow = '0 0 2px #000'
    })

    board.appendChild(div)
}

function random(a = 100000,b = 999999) {
    return res = Math.floor(Math.random() * (b - a) + a)
}
