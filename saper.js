let usun = function (u) {
    u.value = ""
}
let znikam = function (e) {
    if (isNaN(this.value)) {
        window.setTimeout(function () {
            usun(e.target)
        }, 1000)
    }


}
let div = document.createElement("div")
let nag = document.createElement("h2")
let timer = document.createElement("div")
let lflag = document.createElement("div")
let cont = document.createElement("div")
let cont2 = document.createElement("div")
nag.innerText = "Saper"
let formularz = document.createElement("form")
let l1 = document.createElement("label")
l1.innerText = "wysokość"
let x = document.createElement("input")
x.oninput = znikam
let nik = document.createElement("input")
let br = document.createElement("br")
let br1 = document.createElement("br")
let br2 = document.createElement("br")
let l2 = document.createElement("label")
l2.innerText = "szerokość"
let y = document.createElement("input")
y.oninput = znikam
let l3 = document.createElement("label")
l3.innerText = "ilość bomb"
let bomba = document.createElement("input")
bomba.oninput = znikam
let bt1 = document.createElement("button")
bt1.style.width = "100px"
bt1.style.height = "100px"
bt1.innerHTML = "Wyślij "
bt1.type = "button"
let czas = 0
let wys = 0
let szer = 0
let nick = null
let data = new Date(2023, 10)
let tab1 = []
let tabb = []
let tabp1 = []
let interwal = null
let wszystkie = []
let prawiewszystkie = []
let max = function (tablica) {
    //szukamy maximum i indexu
    let maximum = tablica[0].value
    let index = 0
    for (let i = 0; i < tablica.length; i++) {
        if (maximum < tablica[i].value) {
            maximum = tablica[i].value
            index = i
        }
    }
    let object = {
        key: maximum,
        value: index
    }
    return object
}
let sortuj = function (tablica) {
    let change, temp;
    //https://www.googles.com.pl/code-snippets/javascript/sortowanie-babelkowe-bubblesort/
    do {

        change = false;

        for (let i = tablica.length - 1; i > 0; i--) {

            if (tablica[i].value < tablica[i - 1].value) {

                temp = tablica[i - 1];

                tablica[i - 1] = tablica[i];

                tablica[i] = temp;

                change = true;

            }

        }

    } while (change);

    return tablica;

}
let szukaj = function (szuk) {
    for (let i = 0; i < wszystkie.length; i++) {
        if (wszystkie[i].key == szuk) {
            return true
        }

    }
    return false
}
let zapis = function () {
    //format stringa nazwa = wysszerbomby
    // odzielam pary znakiem !
    //  odzielam nick i czas ?
    let pom = wys.toString() + szer.toString() + bomba.value.toString()
    let ciasteczka = document.cookie
    let ciasteczkapars = ciasteczka.split("; ")
    for (let i = 0; i < ciasteczkapars.length; i++) {
        // Rozdzielasz dany wpis klucz=wartość po =
        let entry = ciasteczkapars[i].split("=");
        // Tworzysz obiekt z kluczem i wartością ciasteczka
        let cookie = {
            key: entry[0],
            value: entry[1]
        };
        // Dodajesz obiekt do tablicy
        wszystkie.push(cookie);
    }
    if (ciasteczka.length == 0 || !szukaj(pom)) {
        let napis = nick + "?" + czas
        document.cookie = `${pom}=${napis}; expires=${data.toUTCString()}`
    }
    else {
        for (let i = 0; i < wszystkie.length; i++) {
            if (wszystkie[i].key == pom) {
                let pval = wszystkie[i].value
                if (pval.split("!").length < 10) {
                    let napis = nick + "?" + czas
                    let zloz = pval + "!" + napis
                    document.cookie = `${pom}=${zloz}; expires=${data.toUTCString()}`
                }
                else {
                    pom2 = pval.split("!")
                    let pom4 = []
                    for (let i = 0; i < pom2.length; i++) {
                        let pom3 = pom2[i].split("?")
                        let object = {
                            key: pom3[0],
                            value: pom3[1]
                        }
                        pom4.push(object)

                    }
                    let pom5 = max(pom4)
                    if (czas < pom5.key) {
                        pom2[pom5.value] = nick + "?" + czas
                        let tablcawnapis = pom2.join("!")
                        document.cookie = `${pom}=${tablcawnapis}; expires=${data.toUTCString()}`
                    }

                }
            }

        }

    }
    location.reload()
}

let odczyt = function () {
    let ciasteczka = document.cookie
    if (ciasteczka.length != 0) {
        let ciasteczkapars = ciasteczka.split("; ")
        for (let i = 0; i < ciasteczkapars.length; i++) {
            // Rozdzielasz dany wpis klucz=wartość po =
            let entry = ciasteczkapars[i].split("=");
            // Tworzysz obiekt z kluczem i wartością ciasteczka
            let tabc = []
            let splt = entry[1].split("!")
            for (let j = 0; j < splt.length; j++) {
                let splitniety = splt[j].split("?")
                let cookie2 = {
                    key: splitniety[0],
                    value: splitniety[1]
                }
                tabc.push(cookie2)
            }
            let cookie = {
                key: entry[0],
                value: tabc
            };
            // Dodajesz obiekt do tablicy

            prawiewszystkie.push(cookie);
        }
        if (prawiewszystkie.length != 0) {
            for (let i = 0; i < prawiewszystkie.length; i++) {
                let lista = document.createElement("ol")
                lista.innerHTML = prawiewszystkie[i].key
                rek = prawiewszystkie[i].value
                rek = sortuj(rek)
                for (let j = 0; j < rek.length; j++) {
                    let listael = document.createElement("li")
                    listael.innerHTML = rek[j].key + "-" + rek[j].value
                    lista.appendChild(listael)
                }
                div.appendChild(lista)
            }

        }
    }

}
let time = function () {
    czas += 1
    timer.innerHTML = czas
}
let wygrana = function () {
    let licznik = 0
    for (let i = 0; i < wys; i++) {
        for (let j = 0; j < szer; j++) {
            if (tabp1[i][j].classList.contains("klikniety")) {
                licznik += 1

            }

        }
    }
    if (szer * wys - bomba.value == licznik) {
        let divek = document.createElement("div")
        divek.innerHTML = "brawo wygrałeś "
        window.clearInterval(interwal)
        cont2.appendChild(divek)
        cont2.appendChild(nik)
        let wyslij = document.createElement("button")
        cont2.appendChild(wyslij)
        wyslij.onclick = function () {
            nick = nik.value
            zapis()
        }
        for (i = 0; i < wys; i++) {
            for (j = 0; j < szer; j++) {
                if (tab1[i][j] == "bum") {
                    tabp1[i][j].classList.add("flaga")
                    tabp1[i][j].children[0].src = "img/flaga.PNG"
                    tabp1[i][j].onclick = null
                    tabp1[i][j].oncontextmenu = null
                }
                tabp1[i][j].onclick = null
            }
        }
    }




}
let odkryj = function (y, x) {
    if (tabp1[y][x].classList.contains("klikniety")) {
        return 0
    }

    if (tab1[y][x] != 0) {
        tabp1[y][x].classList.add("klikniety")
        tabp1[y][x].onclick = null
        tabp1[y][x].oncontextmenu = null
        tabp1[y][x].innerHTML = ""
        tabp1[y][x].innerHTML = tab1[y][x]
        return 0
    }
    tabp1[y][x].classList.add("klikniety")
    tabp1[y][x].onclick = null
    tabp1[y][x].oncontextmenu = null
    tabp1[y][x].innerHTML = ""
    tabp1[y][x].innerHTML = tab1[y][x]
    if (y - 1 > 0 && x - 1 >= 0) {
        odkryj(y - 1, x - 1)
    }

    if (y - 1 >= 0) {
        odkryj(y - 1, x)
    }
    if (y - 1 >= 0 && x + 1 < szer) {
        odkryj(y - 1, x + 1)
    }
    if (x - 1 >= 0) {
        odkryj(y, x - 1)
    }
    if (x + 1 < szer) {
        odkryj(y, x + 1)
    }
    if (y + 1 < wys && x - 1 >= 0) {
        odkryj(y + 1, x - 1)
    }
    if (y + 1 < wys) {
        odkryj(y + 1, x)
    }
    if (y + 1 < wys && x + 1 < szer) {
        odkryj(y + 1, x + 1)
    }

}

let lklik = function (wspy, wspx) {
    let wsp = tab1[wspy][wspx]
    let przycisk = tabp1[wspy][wspx]
    przycisk.onclick = null
    przycisk.oncontextmenu = null
    if (wsp == "bum") {
        przycisk.children[0].src = "img/bomb.PNG"
        for (let i = 0; i < wys; i++) {
            for (let j = 0; j < szer; j++) {
                if (tab1[i][j] == "bum" && (j != wspx || i != wspy)) {
                    tabp1[i][j].children[0].src = "img/pbomb.PNG"
                }
                tabp1[i][j].onclick = null
                tabp1[i][j].oncontextmenu = null
            }
        }

        let divek = document.createElement("div")
        divek.innerHTML = "przegrałeś"
        cont2.appendChild(divek)
        window.clearInterval(interwal)
    }
    else if (wsp == 0) {
        odkryj(wspy, wspx)

    }
    else {
        przycisk.innerHTML = ""
        przycisk.innerHTML = wsp
        przycisk.classList.add("klikniety")
    }
    wygrana()
}
let pklik = function (wspy, wspx) {
    let przycisk = tabp1[wspy][wspx]

    if (!przycisk.classList.contains("flaga") && !przycisk.classList.contains("pytajnik")) {
        if (lflag.innerHTML > 0) {


            przycisk.classList.add("flaga")
            przycisk.children[0].src = "img/flaga.PNG"
            lflag.innerHTML -= 1
            przycisk.onclick = null
        }
    }

    else if (przycisk.classList.contains("flaga")) {
        przycisk.classList.add("pytajnik")
        przycisk.children[0].src = "img/pyt.PNG"
        przycisk.classList.remove("flaga")
        lflag.innerHTML = parseInt(lflag.innerHTML) + 1
        przycisk.onclick = function () {
            lklik(wspy, wspx)
        }

    }
    else if (przycisk.classList.contains("pytajnik")) {
        przycisk.classList.remove("pytajnik")
        przycisk.children[0].src = "img/klepa.PNG"


    }

}
let bomby = function (taby, dupl) {
    for (let i = 0; i < taby.length; i++) {

        if (taby[i] == dupl) {
            return true
        }


    }
    return false
}
let liczby = function () {
    for (let i = 0; i < wys; i++) {
        for (let j = 0; j < szer; j++) {
            let licznik = 0
            if (tab1[i][j] != "bum") {
                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (tab1[i - 1][j - 1] == "bum") {
                        licznik += 1
                    }
                }
                if (i - 1 >= 0) {
                    if (tab1[i - 1][j] == "bum") {
                        licznik += 1
                    }
                }
                if (i - 1 >= 0 && j + 1 < szer) {
                    if (tab1[i - 1][j + 1] == "bum") {
                        licznik += 1
                    }
                }
                if (j - 1 >= 0) {
                    if (tab1[i][j - 1] == "bum") {
                        licznik += 1
                    }
                }
                if (j + 1 < szer) {
                    if (tab1[i][j + 1] == "bum") {
                        licznik += 1
                    }
                }
                if (i + 1 < wys && j - 1 >= 0) {
                    if (tab1[i + 1][j - 1] == "bum") {
                        licznik += 1
                    }
                }
                if (i + 1 < wys) {
                    if (tab1[i + 1][j] == "bum") {
                        licznik += 1
                    }
                }
                if (i + 1 < wys && j + 1 < szer) {
                    if (tab1[i + 1][j + 1] == "bum") {
                        licznik += 1
                    }
                }
                tab1[i][j] = licznik
            }
        }
    }

    console.table(tab1)
}
bt1.onclick = function () {
    cont.innerHTML = ""
    tab1 = []
    tabb = []
    tabp1 = []
    szer = y.value
    wys = x.value
    czas = 0
    bomb = bomba.value
    cont2.innerHTML = ""



    if (szer != "" && wys != "" && bomb != "") {
        if (!isNaN(szer) && !isNaN(wys) && !isNaN(bomb)) {
            lflag.innerHTML = bomb
            interwal = window.setInterval(time, 1000)
            timer.innerHTML = czas
            for (let i = 0; i < wys; i++) {
                let tab2 = []
                let tabp2 = []
                for (let j = 0; j < szer; j++) {
                    let plansza = document.createElement("div")
                    cont.style.width = szer * 23 + "px"
                    cont.style.height = wys * 23 + "px"
                    plansza.style.width = "20px"
                    plansza.style.height = "20px"
                    plansza.style.marginRight = "1px"
                    plansza.style.marginBottom = "1px"
                    plansza.style.float = "left"
                    plansza.style.border = "solid black 1px"
                    let image = document.createElement("img")
                    image.src = "img/klepa.PNG"
                    image.classList.add("obrazek")
                    plansza.appendChild(image)
                    cont.append(plansza)
                    plansza.onclick = function () {
                        lklik(i, j)
                    }

                    plansza.oncontextmenu = function (e) {
                        e.preventDefault()
                        pklik(i, j)
                    }
                    tab2.push("")
                    tabp2.push(plansza)


                }
                tab1.push(tab2)
                tabp1.push(tabp2)

            }
            cont2.appendChild(cont)
            for (let i = 0; i < bomb; i++) {
                let b = null
                do {
                    b = Math.random()
                    b = b * wys * szer
                    b = Math.floor(b)

                } while (bomby(tabb, b))
                tabb.push(b)


            }

            for (let i = 0; i < tabb.length; i++) {
                let col = tabb[i] % szer
                let row = (tabb[i] - col) / szer
                if (col == 0) {
                    tab1[row][col] = "bum"
                }
                else {
                    tab1[row][col - 1] = "bum"
                }
            }
            liczby()


        } else {
            let divek = document.createElement("div")
            divek.innerHTML = "nie wybrałeś wartości"
            cont2.appendChild(divek)
        }
    }
    else {
        let divek = document.createElement("div")
        divek.innerHTML = "nie wybrałeś wartości"
        cont2.appendChild(divek)
    }
}

odczyt()

x.classList.add("1x")
y.classList.add("1y")
div.appendChild(nag)
div.appendChild(formularz)
div.appendChild(timer)
div.appendChild(lflag)
div.appendChild(cont2)
formularz.appendChild(l1)
formularz.appendChild(x)
formularz.appendChild(br2)
formularz.appendChild(l2)
formularz.appendChild(y)
formularz.appendChild(br1)
formularz.appendChild(l3)
formularz.appendChild(bomba)
formularz.appendChild(br)
formularz.appendChild(bt1)
document.body.appendChild(div)