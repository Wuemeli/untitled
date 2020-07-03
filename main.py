def on_received_number(receivedNumber):
    basic.show_string("" + str((receivedNumber)))
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

hummingbird.start_hummingbird()
radio.set_group(23)
music.play_melody("C D E F G A B C5 ", 500)

def on_forever():
    hummingbird.set_tri_led(TwoPort.ONE, 10, 10, 10)
    hummingbird.set_tri_led(TwoPort.TWO, 10, 10, 10)
    hummingbird.set_led(ThreePort.ONE, 50)
    hummingbird.set_led(ThreePort.TWO, 52)
    hummingbird.set_led(ThreePort.THREE, 60)
basic.forever(on_forever)
