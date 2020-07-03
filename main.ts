radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
hummingbird.startHummingbird()
radio.setGroup(23)
music.playMelody("C D E F G A B C5 ", 500)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    10,
    10,
    10
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    10,
    10,
    10
    )
    hummingbird.setLED(ThreePort.One, 50)
    hummingbird.setLED(ThreePort.Two, 52)
    hummingbird.setLED(ThreePort.Three, 60)
})
