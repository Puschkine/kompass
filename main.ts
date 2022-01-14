function AnzeigeHimmelsrichtung () {
    if (Richtung < 45) {
        basic.showString("N")
    } else if (Richtung < 135) {
        basic.showString("O")
    } else if (Richtung < 225) {
        basic.showString("S")
    } else if (Richtung < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
}
function AnzeigePfeil () {
    if (Richtung >= 337.5 || Richtung < 22.5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Richtung >= 22.5 && Richtung < 67.5) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else if (Richtung >= 67.5 && Richtung < 112.5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Richtung >= 112.5 && Richtung < 157.5) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else if (Richtung >= 157.5 && Richtung < 202.5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Richtung >= 202.5 && Richtung < 247.5) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (Richtung >= 247.5 && Richtung < 292.5) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Richtung >= 292.5 && Richtung < 337.5) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    Modus = Himmelsrichtung
})
input.onButtonPressed(Button.B, function () {
    Modus = Pfeil
})
let Modus = 0
let Himmelsrichtung = 0
let Pfeil = 0
let Richtung = 0
Richtung = 0
Pfeil = 0
Himmelsrichtung = 1
Modus = Himmelsrichtung
basic.forever(function () {
    Richtung = input.compassHeading()
    if (Modus == Himmelsrichtung) {
        AnzeigeHimmelsrichtung()
    } else if (Modus == Pfeil) {
        AnzeigePfeil()
    }
})
