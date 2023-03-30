function sendSpeed (speed: number) {
    if (input.rotation(Rotation.Roll) < -45) {
        basic.showString("L")
        radio.sendValue("L", speed)
    } else if (input.rotation(Rotation.Roll) > 45) {
        basic.showString("R")
        radio.sendValue("R", speed)
    } else {
        basic.showString("F")
        radio.sendValue("LR", speed)
    }
}
radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -70) {
        basic.showString("4")
        sendSpeed(1023)
    } else if (input.rotation(Rotation.Pitch) < 0) {
        basic.showString("3")
        sendSpeed(511)
    } else if (input.rotation(Rotation.Pitch) < 30) {
        basic.showString("2")
        sendSpeed(0)
    } else if (input.rotation(Rotation.Pitch) < 70) {
        basic.showString("1")
        sendSpeed(-255)
    } else {
        basic.showString("0")
        sendSpeed(-511)
    }
    basic.pause(200)
})
