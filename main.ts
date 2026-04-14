radio.setGroup(1)

let message = ""
let letterIndex = 0

let letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"

input.onButtonPressed(Button.A, function () {
    letterIndex += 1
    if (letterIndex >= letters.length) {
        letterIndex = 0
    }
    basic.showString(letters.charAt(letterIndex))
})

input.onButtonPressed(Button.B, function () {
    message = message + letters.charAt(letterIndex)
    basic.showString(message)
})

input.onButtonPressed(Button.AB, function () {
    radio.sendString(message)
    basic.showIcon(IconNames.Yes)
    message = ""
})

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})