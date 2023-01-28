const szer = 30
const wys = 30
let position = 1
let tick = 200
let jablko1 = null
let snake = [

]
let container = document.getElementById("container")
for (let k = 0; k < szer + 2; k++) {

    let planszag = window.document.createElement("div")
    planszag.style.position = "absolute"
    planszag.style.top = "11px"
    planszag.style.left = 11 * k + "px"
    planszag.style.background = "green"
    planszag.style.height = "10px"
    planszag.style.width = "10px"

    container.appendChild(planszag)
}
for (let i = 0; i < wys; i++) {
    for (let j = 0; j < szer; j++) {
        let id = j + "_" + i
        let plansza = window.document.createElement("div")
        plansza.id = id
        plansza.style.position = "absolute"
        plansza.style.top = 11 * i + 22 + "px"
        plansza.style.left = 11 * j + 11 + "px"
        plansza.style.height = "10px"
        plansza.style.width = "10px"
        plansza.style.background = "cornflowerblue"

        container.appendChild(plansza)

    }
}
for (let i = 0; i < szer; i++) {


    let plansza = window.document.createElement("div")
    plansza.style.position = "absolute"
    plansza.style.top = 11 * i + 22 + "px"
    plansza.style.left = "0px"
    plansza.style.height = "10px"
    plansza.style.width = "10px"
    plansza.style.background = "green"

    container.appendChild(plansza)

}

for (let i = 0; i < szer; i++) {


    let plansza = window.document.createElement("div")
    plansza.style.position = "absolute"
    plansza.style.top = 11 * i + 22 + "px"
    plansza.style.left = szer * 11 + 11 + "px"
    plansza.style.height = "10px"
    plansza.style.width = "10px"
    plansza.style.background = "green"

    container.appendChild(plansza)

}

for (let k = 0; k < szer + 2; k++) {

    let planszag = window.document.createElement("div")
    planszag.style.position = "absolute"
    planszag.style.left = 11 * k + "px"
    planszag.style.top = 11 * szer + 22 + "px"
    planszag.style.background = "green"
    planszag.style.height = "10px"
    planszag.style.width = "10px"

    container.appendChild(planszag)
}
window.onkeydown = function (e) {
    switch (e.key) {
        case "ArrowLeft": {
            if (position != 4)
                position = 3
            break
        }
        case "ArrowRight": {
            if (position != 3)
                position = 4
            break
        }
        case "ArrowDown": {
            if (position != 1)
                position = 2
            break
        }
        case "ArrowUp": {
            if (position != 2)
                position = 1
            break
        }
    }

}
spawn()
function spawn() {
    let x = Math.floor(Math.random() * szer)
    let y = Math.floor(Math.random() * wys)
    let id = x + "_" + y
    snake.push(id)
    let snk = document.getElementById(id)
    snk.style.background = "red"
    if (y <= wys / 2) {
        position = 2
    }
    else {
        position = 1
    }
}
jablko()
function jablko() {
    let id = null
    do {


        let x = Math.floor(Math.random() * szer)
        let y = Math.floor(Math.random() * wys)
        id = x + "_" + y
    }

    while (snake.includes(id))
    jablko1 = id
    let snk = document.getElementById(id)
    snk.style.background = "yellow"

}
function petlagry() {
    switch (position) {
        case 1: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[1]) - 1 < 0) {
                przegrana()
                return
            }
            else {
                let id = tabsnake[0] + "_" + (parseInt(tabsnake[1]) - 1)
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.background = "red"
            }
            break
        }
        case 2: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[1]) + 1 > wys) {
                przegrana()
                return
            }
            else {
                let id = tabsnake[0] + "_" + (parseInt(tabsnake[1]) + 1)
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.background = "red"
            }
            break
        }
        case 3: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[0]) - 1 < 0) {
                przegrana()
                return
            }
            else {
                let id = (parseInt(tabsnake[0]) - 1) + "_" + tabsnake[1]
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.background = "red"
            }
            break
        }
        case 4: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[0]) + 1 > szer) {
                przegrana()
                return
            }
            else {
                let id = (parseInt(tabsnake[0]) + 1) + "_" + tabsnake[1]
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.background = "red"
            }
            break
        }
    }
    if (snake.includes(snake[0], 1)) {
        przegrana()
    }
    if (jablko1 == snake[0]) {
        jablko()
    }
    else {
        let koniec = snake.pop()
        let snknew = document.getElementById(koniec)
        snknew.style.background = "cornflowerblue"
    }
}
let petla = window.setInterval(petlagry, tick)
function przegrana() {
    petla = window.clearInterval(petla)
    let koniec = window.document.createElement("div")
    koniec.style.position = "absolute"
    koniec.style.top = "200px"
    koniec.style.left = "500px"
    koniec.style.height = "400px"
    koniec.style.width = "400px"
    koniec.innerHTML = "Przegrałeś finito"
    container.appendChild(koniec)
}