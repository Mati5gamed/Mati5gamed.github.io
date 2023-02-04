import Gracz from "./Gracz.js";
import Wyborgracza from "./Wyborgracza.js";
let canvas = window.document.getElementById("canvas")
let ctx = canvas.getContext("2d");
let width = 800
let height = 400
let zdjecie = new Image()
zdjecie.src = "trawa.jpg"
let obj = {
    x: 400,
    y: 300
}
let licznik = null
let gracze = null
let gracz1 = null
let gracz2 = null
let gracz3 = null
let gracz4 = null
let lokr = null
let klawisze = []
let wybor = new Wyborgracza(clbk)
let divokr = window.document.createElement("div")
divokr.classList.add("divokr")
let reset = window.document.createElement("button")
reset.innerHTML = "reset"
reset.onclick = function () {
    document.location.reload()
}
window.document.body.appendChild(reset)
function licznikokr() {
    divokr.innerHTML = lokr

}
function clbk(objects, okrazenia) {
    wybor.znikam()
    window.document.body.appendChild(divokr)
    console.log(objects)
    gracze = objects
    gracz1 = new Gracz(obj, objects[0].prawykl, objects[0].lewykl, objects[0].kolor, okrazenia)
    licznik = 1
    if (objects[1] != undefined) {
        gracz2 = new Gracz({ x: 400, y: 300 }, objects[1].prawykl, objects[1].lewykl, objects[1].kolor, okrazenia)
        licznik += 1
    }
    if (objects[2] != undefined) {
        gracz3 = new Gracz({ x: 400, y: 300 }, objects[2].prawykl, objects[2].lewykl, objects[2].kolor, okrazenia)
        licznik += 1
    }
    if (objects[3] != undefined) {
        gracz4 = new Gracz({ x: 400, y: 300 }, objects[3].prawykl, objects[3].lewykl, objects[3].kolor, okrazenia)
        licznik += 1
    }
    lokr = okrazenia

    window.document.onkeydown = function (e) {
        if (!klawisze.includes(e.code))
            klawisze.push(e.code)
    }
    window.document.onkeyup = function (e) {
        for (let i = 0; i < klawisze.length; i++) {
            if (klawisze[i] == e.code) {
                klawisze.splice(i, 1)
                break
            }
        }
    }



    zdjecie.onload = drawCircle
    render()
}
let sciezka
let sciezka1
function drawCircle() {
    let pat = ctx.createPattern(zdjecie, "repeat")
    ctx.beginPath()
    ctx.rect(0, 0, width, height)
    ctx.fillStyle = pat
    ctx.fill()
    sciezka = new Path2D()
    sciezka.arc(200, 200, 170, Math.PI / 2, Math.PI * 1.5, false)
    sciezka.arc(600, 200, 170, Math.PI * 1.5, Math.PI * 2.5, false)
    sciezka.closePath()
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fill(sciezka)
    ctx.strokeStyle = "white"
    ctx.lineWidth = 3
    ctx.stroke(sciezka)
    sciezka1 = new Path2D()
    sciezka1.arc(200, 200, 70, Math.PI / 2, Math.PI * 1.5, false)
    sciezka1.arc(600, 200, 70, Math.PI * 1.5, Math.PI * 2.5, false)
    sciezka1.closePath()
    ctx.fillStyle = pat
    ctx.fill(sciezka1)
    ctx.stroke(sciezka1)

}
function wygrana() {
    let obj = {
        x1: 390,
        x2: 391,
        y1: 270,
        y2: 400
    }

    if (gracz1.pozycja.x >= obj.x1 && gracz1.pozycja.x <= obj.x2 && gracz1.pozycja.y >= obj.y1 && gracz1.pozycja.y <= obj.y2) {
        gracz1.lokr -= 1
        if (lokr > gracz1.lokr) {
            lokr = gracz1.lokr
        }
    }
    if (gracz2 != null) {
        if (gracz2.pozycja.x >= obj.x1 && gracz2.pozycja.x <= obj.x2 && gracz2.pozycja.y >= obj.y1 && gracz2.pozycja.y <= obj.y2) {
            gracz2.lokr -= 1
            if (lokr > gracz2.lokr) {
                lokr = gracz2.lokr
            }
        }
    }
    if (gracz3 != null) {
        if (gracz3.pozycja.x >= obj.x1 && gracz3.pozycja.x <= obj.x2 && gracz3.pozycja.y >= obj.y1 && gracz3.pozycja.y <= obj.y2) {
            gracz3.lokr -= 1
            if (lokr > gracz3.lokr) {
                lokr = gracz3.lokr
            }
        }
    }
    if (gracz4 != null) {
        if (gracz4.pozycja.x >= obj.x1 && gracz4.pozycja.x <= obj.x2 && gracz4.pozycja.y >= obj.y1 && gracz4.pozycja.y <= obj.y2) {
            gracz4.lokr -= 1
            if (lokr > gracz4.lokr) {
                lokr = gracz4.lokr
            }
        }
    }

    if (lokr == 0) {
        let wygr = window.document.createElement("div")
        divokr.remove()
        wygr.innerHTML = "przegrales"
        if (gracz1.lokr == 0) {
            wygr.innerHTML = "gracz1 wygrał"
        }
        else if (gracz2.lokr == 0) {
            wygr.innerHTML = "gracz2 wygrał"
        }
        else if (gracz3.lokr == 0) {
            wygr.innerHTML = "gracz3 wygrał"
        }
        else if (gracz4.lokr == 0) {
            wygr.innerHTML = "gracz4 wygrał"
        }
        wygr.classList.add("wyg")
        window.document.body.appendChild(wygr)
        pom = true
    }

    if (gracze.length > 1) {
        if (licznik < 2) {
            let wygrany = window.document.createElement("div")
            divokr.remove()
            if (gracz1.niezyje == false) {
                wygrany.innerHTML = "wygrał gracz 1"
                wygrany.style.background = gracz1.color
            }
            else if (gracz2.niezyje == false) {
                wygrany.innerHTML = "wygrał gracz 2"
                wygrany.style.background = gracz2.color
            }
            else if (gracz3.niezyje == false) {
                wygrany.innerHTML = "wygrał gracz 3"
                wygrany.style.background = gracz3.color
            }
            else if (gracz4.niezyje == false) {
                wygrany.innerHTML = "wygrał gracz 4"
                wygrany.style.background = gracz4.color
            }
            else {
                wygrany.innerHTML = "nikt nie wygrał"

            }
            wygrany.classList.add("wyg")
            window.document.body.appendChild(wygrany)
            pom = true
        }
    }
    else {
        if (licznik == 0) {
            pom = true
            let wygrany = window.document.createElement("div")
            divokr.remove()
            wygrany.innerHTML = "przegrales"
            wygrany.classList.add("wyg")
            window.document.body.appendChild(wygrany)
        }
    }
}
let pom = false

function render() {
    ctx.clearRect(0, 0, width, height)
    requestAnimationFrame(render)
    drawCircle()
    licznikokr()

    if (pom != true) {
        for (let i = 0; i < klawisze.length; i++) {
            if (klawisze[i] == gracz1.btl) {
                gracz1.kat -= 0.02
            }
            else if (klawisze[i] == gracz1.btr) {
                gracz1.kat += 0.02
            }
            if (gracz2 != null) {
                if (klawisze[i] == gracz2.btl) {
                    gracz2.kat -= 0.02
                }
                else if (klawisze[i] == gracz2.btr) {
                    gracz2.kat += 0.02
                }
            }
            if (gracz3 != null) {
                if (klawisze[i] == gracz3.btl) {
                    gracz3.kat -= 0.02
                }
                else if (klawisze[i] == gracz3.btr) {
                    gracz3.kat += 0.02
                }
            }
            if (gracz4 != null) {
                if (klawisze[i] == gracz4.btl) {
                    gracz4.kat -= 0.02
                }
                else if (klawisze[i] == gracz4.btr) {
                    gracz4.kat += 0.02
                }
            }
        }

        gracz1.linia(ctx)
        gracz1.rysowaniegracza(ctx)
        if (gracz2 != null) {
            gracz2.linia(ctx)
            gracz2.rysowaniegracza(ctx)
        }
        if (gracz3 != null) {
            gracz3.linia(ctx)
            gracz3.rysowaniegracza(ctx)
        }
        if (gracz4 != null) {
            gracz4.linia(ctx)
            gracz4.rysowaniegracza(ctx)
        }

        if (gracz1.kolizja(ctx, sciezka, sciezka1) == true) {
            licznik -= 1

        }
        if (gracz2 != null) {
            if (gracz2.kolizja(ctx, sciezka, sciezka1) == true) {
                licznik -= 1
            }
        }
        if (gracz3 != null) {
            if (gracz3.kolizja(ctx, sciezka, sciezka1) == true) {
                licznik -= 1
            }
        }
        if (gracz4 != null) {
            if (gracz4.kolizja(ctx, sciezka, sciezka1) == true) {
                licznik -= 1
            }
        }
        wygrana()
    }




}