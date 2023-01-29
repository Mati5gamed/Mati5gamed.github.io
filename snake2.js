const szer = 30
const wys = 30
let position = 1
let exposition = null
let tail = null
let bool = true
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
// sterowanie strzałkami
window.onkeydown = function (e) {
    if (bool == true) {
        switch (e.key) {
            case "ArrowLeft": {
                if (position != 4) {
                    position = 3
                }
                break
            }
            case "ArrowRight": {
                if (position != 3) {
                    position = 4
                }
                break
            }
            case "ArrowDown": {
                if (position != 1) {
                    position = 2
                }
                break
            }
            case "ArrowUp": {
                if (position != 2) {
                    position = 1
                }
                break
            }
        }
    }
    bool = false

}
spawn()
function spawn() {
    let x = Math.floor(Math.random() * szer)
    let y = Math.floor(Math.random() * wys)
    let id = x + "_" + y
    snake.push(id)
    let snk = document.getElementById(id)
    snk.style.backgroundImage = "url('snake/snake_head.png')"
    snk.style.backgroundSize = "100px 100px"
    if (y <= wys / 2) {
        position = 2
        exposition = position
    }
    else {
        position = 1
        exposition = position
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
    snk.style.backgroundImage = "url('snake/apple.png')"

    snk.style.backgroundSize = "contain"
}
function petlagry() {
    //glowa weza
    switch (position) {
        case 1: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[1]) - 1 < 0) {
                przegrana()
                return
            }
            else {
                let id = tabsnake[0] + "_" + (parseInt(tabsnake[1]) - 1)
                if (snake.includes(id, 1)) {
                    przegrana()
                    return
                }
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_head.png')"
                snk.style.backgroundSize = "contain"
            }

            break
        }
        case 2: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[1]) + 1 >= wys) {
                przegrana()
                return
            }
            else {
                let id = tabsnake[0] + "_" + (parseInt(tabsnake[1]) + 1)
                if (snake.includes(id, 1)) {
                    przegrana()
                    return
                }
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_head.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "180deg"

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
                if (snake.includes(id, 1)) {
                    przegrana()
                    return
                }
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_head.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "270deg"
            }
            break
        }
        case 4: {
            let tabsnake = snake[0].split("_")
            if (parseInt(tabsnake[0]) + 1 >= szer) {
                przegrana()
                return
            }
            else {
                let id = (parseInt(tabsnake[0]) + 1) + "_" + tabsnake[1]
                if (snake.includes(id, 1)) {
                    przegrana()
                    return
                }
                snake.unshift(id)
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_head.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "90deg"
            }
            break
        }
    }

    if (jablko1 == snake[0]) {
        jablko()
    }
    else {
        let koniec = snake.pop()
        let snknew = document.getElementById(koniec)
        snknew.style.background = "cornflowerblue"
        snknew.style.rotate = "0deg"
    }
    // dla węża  2 elementowego
    if (snake.length != 1 && snake.length <= 2) {
        tail = position
        switch (tail) {
            case 1: {
                let id = snake[snake.length - 1]
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "180deg"

            }
                break
            case 2: {
                let id = snake[snake.length - 1]
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "0deg"

            } break
            case 3: {
                let id = snake[snake.length - 1]
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "90deg"
            } break
            case 4: {
                let id = snake[snake.length - 1]
                let snk = document.getElementById(id)
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "270deg"

            } break
        }
    }

    if (snake.length > 2) {
        if (position == exposition) {
            let id = snake[1]
            let snk = document.getElementById(id)
            snk.style.backgroundImage = "url('snake/snake_body.png')"
            snk.style.backgroundSize = "contain"
            if (position == 1 || position == 2) {
                snk.style.rotate = "90deg"
            }
            else {
                snk.style.rotate = "0deg"
            }
        }
        else {
            let id = snake[1]
            let snk = document.getElementById(id)
            snk.style.backgroundImage = "url('snake/snake_curve.png')"
            snk.style.backgroundSize = "contain"
            switch (exposition) {
                case 1: {
                    if (position == 3) {
                        snk.style.rotate = "90deg"
                    }
                    if (position == 4) {
                        snk.style.rotate = "0deg"
                    }
                } break
                case 2: {
                    if (position == 3) {
                        snk.style.rotate = "180deg"
                    }
                    if (position == 4) {
                        snk.style.rotate = "270deg"
                    }
                } break
                case 3: {
                    if (position == 1) {
                        snk.style.rotate = "270deg"
                    }
                    if (position == 2) {
                        snk.style.rotate = "0deg"
                    }
                } break
                case 4: {
                    if (position == 1) {
                        snk.style.rotate = "180deg"
                    }
                    if (position == 2) {
                        snk.style.rotate = "90deg"
                    }
                } break
            }
        }
        let id = snake[snake.length - 1]
        let snk = document.getElementById(id)
        if (snk.style.backgroundImage == 'url("snake/snake_curve.png")') {
            switch (snk.style.rotate) {
                case "0deg": {
                    if (tail == 1) {
                        tail = 4
                    }
                    if (tail == 3) {
                        tail = 2
                    }
                } break
                case "90deg": {
                    if (tail == 4) {
                        tail = 2
                    }
                    if (tail == 1) {
                        tail = 3
                    }
                } break
                case "180deg": {
                    if (tail == 2) {
                        tail = 3
                    }
                    if (tail == 4) {
                        tail = 1
                    }
                } break
                case "270deg": {
                    if (tail == 2) {
                        tail = 4
                    }
                    if (tail == 3) {
                        tail = 1
                    }
                } break
            }
        }
        switch (tail) {
            case 1: {
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "180deg"
            }
                break
            case 2: {
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "0deg"
            } break
            case 3: {
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "90deg"
            } break
            case 4: {
                snk.style.backgroundImage = "url('snake/snake_tail.png')"
                snk.style.backgroundSize = "contain"
                snk.style.rotate = "270deg"
            } break
        }
    }
    exposition = position
    bool = true
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
