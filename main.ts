radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -70) {
        basic.showString("4")
        radio.sendValue("LR", 1023)
    } else if (input.rotation(Rotation.Pitch) < 0) {
        basic.showString("3")
        radio.sendValue("LR", 767)
    } else if (input.rotation(Rotation.Pitch) < 30) {
        basic.showString("2")
        radio.sendValue("LR", 511)
    } else if (input.rotation(Rotation.Pitch) < 70) {
        basic.showString("1")
        radio.sendValue("LR", 255)
    } else {
        basic.showString("0")
        radio.sendValue("LR", 0)
    }
    basic.pause(200)
})
