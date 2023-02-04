export default
    class Gracz {
    constructor(start, btr, btl, color, lokr) {
        // this.id = id
        this.lokr = lokr
        this.start = start
        this.pozycja = start
        this.color = color
        this.kat = 0
        this.tab = []
        this.btl = btl
        this.btr = btr
        this.niezyje = false
    }
    linia(ctx) {
        if (this.niezyje != true) {
            const R = 1
            this.koncowy = {
                x: this.pozycja.x + (R * Math.cos(this.kat)),
                y: this.pozycja.y + (R * Math.sin(this.kat))
            }
            let linia = new Path2D()
            linia.moveTo(this.pozycja.x, this.pozycja.y)
            linia.lineTo(this.koncowy.x, this.koncowy.y)
            this.tab.unshift(linia)
            if (this.tab.length == 200) {
                this.tab.pop()
            }
            let kol = 0.9

            ctx.lineWidth = 2
            for (let i = 0; i < this.tab.length; i++) {
                if (this.color == "green") {
                    let kolor = `rgba(0, 255, 0,${kol} )`
                    kol -= 0.005
                    ctx.strokeStyle = kolor
                    ctx.stroke(this.tab[i])
                }
                else if (this.color == "blue") {
                    let kolor = `rgba(0, 0, 255,${kol} )`
                    kol -= 0.005
                    ctx.strokeStyle = kolor
                    ctx.stroke(this.tab[i])
                }
                else if (this.color == "yellow") {
                    let kolor = `rgba(255, 255, 0,${kol} )`
                    kol -= 0.005
                    ctx.strokeStyle = kolor
                    ctx.stroke(this.tab[i])
                }
                else if (this.color == "red") {
                    let kolor = `rgba(255, 0, 0,${kol} )`
                    kol -= 0.005
                    ctx.strokeStyle = kolor
                    ctx.stroke(this.tab[i])
                }
            }
            this.pozycja.x = this.koncowy.x
            this.pozycja.y = this.koncowy.y
        }
    }
    kolizja(ctx, sciezka, sciezka1) {
        if (this.niezyje != true) {
            if (!ctx.isPointInPath(sciezka, this.pozycja.x, this.pozycja.y) || ctx.isPointInPath(sciezka1, this.pozycja.x, this.pozycja.y)) {
                console.log("ok")
                this.niezyje = true
                return true
            }
        }
    }
    rysowaniegracza(ctx) {
        if (this.niezyje != true) {
            let img = new Image()
            if (this.color == "green") {
                img.src = "bike_green.png"
            }
            else if (this.color == "blue") {
                img.src = "bike_blue.png"
            }
            else if (this.color == "yellow") {
                img.src = "bike_yellow.png"
            }
            else if (this.color == "red") {
                img.src = "bike_red.png"
            }
            ctx.save()
            ctx.translate(this.pozycja.x, this.pozycja.y)
            ctx.rotate(this.kat)
            ctx.drawImage(img, -20, -10, 40, 20)
            ctx.restore()
        }
    }

}