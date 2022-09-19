input.onButtonPressed(Button.A, function () {
    number = randint(0, 2)
    if (number == 0) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 1) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let number = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
