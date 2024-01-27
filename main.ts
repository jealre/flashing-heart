input.onButtonPressed(Button.A, function () {
    radio.sendString("micro chat")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
