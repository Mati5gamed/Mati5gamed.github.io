export default
    class Wyborgracza {
    constructor(clbk) {
        this.container = window.document.createElement("div")
        this.container.classList.add("container")
        let div = window.document.createElement("div")
        this.objects = []
        let zkazane = [
            "Enter", "MetaLeft", "MetaRight", "ControlRight", "ControlLeft", "CapsLock", "AltLeft", "AltRight", "Escape", "Backquote", "Tab"
        ]
        this.div = null
        let okrazenia = window.document.createElement("input")
        okrazenia.type = "number"
        okrazenia.onkeydown = (e) => {
            if (isNaN(e.key) == true && e.key != "Backspace") {
                e.preventDefault()
            }
        }
        div.appendChild(okrazenia)
        let tab = ["", "yellow", "red", "green", "blue"]
        for (let i = 0; i < 4; i++) {
            let prawy = window.document.createElement("div")
            let lewy = window.document.createElement("div")
            let sel = window.document.createElement("select")
            for (let j = 0; j < tab.length; j++) {
                let opt = window.document.createElement("option")
                opt.innerHTML = tab[j]
                opt.value = tab[j]
                sel.appendChild(opt)
            }
            prawy.innerHTML = "-------"
            lewy.innerHTML = "-------"
            prawy.onclick = (e) => {
                this.div = e.target
            }
            lewy.onclick = (e) => {
                this.div = e.target
            }
            sel.onchange = () => {
                let selected = []
                for (let i = 1; i < this.objects.length; i += 4) {
                    if (this.objects[i].value != "")
                        selected.push(this.objects[i].value)
                }
                for (let i = 1; i < this.objects.length; i += 4) {
                    if (this.objects[i] != sel) {
                        let val = this.objects[i].value
                        this.objects[i].innerHTML = ""
                        for (let j = 0; j < tab.length; j++) {
                            let opt = window.document.createElement("option")
                            if (!selected.includes(tab[j])) {
                                opt.innerHTML = tab[j]
                                opt.value = tab[j]
                                this.objects[i].appendChild(opt)
                            }
                            else if (selected.includes(tab[j]) && val == tab[j]) {
                                opt.innerHTML = tab[j]
                                opt.value = tab[j]
                                this.objects[i].appendChild(opt)
                                opt.selected = true
                            }
                        }
                    }
                }
            }

            let check = window.document.createElement("input")
            this.objects.push(check)
            this.objects.push(sel)
            this.objects.push(prawy)
            this.objects.push(lewy)
            check.type = "checkbox"
            check.setAttribute('id', "id" + i)
            div.appendChild(lewy)
            div.appendChild(prawy)
            div.appendChild(sel)
            div.appendChild(check)
        }
        window.document.onkeydown = (e) => {


            if (this.div != null) {
                let klawisze = []
                for (let i = 2; i < this.objects.length; i += 4) {
                    klawisze.push(this.objects[i].innerHTML)
                    klawisze.push(this.objects[i + 1].innerHTML)


                }
                if (!zkazane.includes(e.code) && !klawisze.includes(e.code)) {
                    this.div.innerHTML = e.code
                    this.div = null
                }
            }

        }
        let btn = window.document.createElement("button")
        btn.innerHTML = "Start gry"
        btn.onclick = () => {
            if (okrazenia.value <= 0) {
                alert("za mało okrążeń")
                return
            }
            this.objects1 = []
            for (let i = 0; i < this.objects.length; i += 4) {
                if (this.objects[i].checked == true) {
                    let obj = {
                        kolor: this.objects[i + 1].value,
                        prawykl: this.objects[i + 2].innerHTML,
                        lewykl: this.objects[i + 3].innerHTML
                    }
                    if (obj.kolor == "" || obj.prawykl == "-------" || obj.lewykl == "-------") {
                        alert("Nie wybrałeś wartości ")
                        return
                    }
                    this.objects1.push(obj)

                }
            }
            if (this.objects1.length == 0) {
                alert("nie wybrałeś gracza ")
                return
            }


            clbk(this.objects1, okrazenia.value)

        }
        div.appendChild(btn)
        window.document.body.appendChild(this.container)
        this.container.appendChild(div)
    }
    znikam() {
        this.container.remove()
    }

}