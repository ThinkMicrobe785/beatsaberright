input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(1)
})
radio.setGroup(44)
basic.forever(function () {
    basic.showString("R")
})
