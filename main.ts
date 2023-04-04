function sendSpeed (speed: number) {
    if (input.rotation(Rotation.Roll) < -45) {
        basic.showString("L")
        if (last_speed_L != speed) {
            last_speed_L = speed
            radio.sendValue("L", speed)
        }
    } else if (input.rotation(Rotation.Roll) > 45) {
        basic.showString("R")
        if (last_speed_R != speed) {
            last_speed_R = speed
            radio.sendValue("R", speed)
        }
    } else {
        basic.showString("F")
        if (last_speed_L != speed || last_speed_R != speed) {
            last_speed_L = speed
            last_speed_R = speed
            radio.sendValue("LR", speed)
        }
    }
}
let last_speed_R = 0
let last_speed_L = 0
radio.setGroup(1)
last_speed_L = 0
last_speed_R = 0
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
    basic.pause(100)
})
