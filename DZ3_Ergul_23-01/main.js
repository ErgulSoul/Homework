// Задание 1

var first = prompt('Введите первое число')
var second = parseInt(prompt('Введите второе число'))

var num = function (a, b) {
    if (a < b) {
        console.log(a)
    } else if (b < a) {
        console.log(b)
    } else {
        console.log('Ошибка')
    }
}

num(first, second)



// Задание 2

function length () {
    var num = prompt('Введите параметр').toString()
    var len = () => {
        alert(num.length)
    }
    len()
}

length()



// Задание 3

var first = prompt('Введите первое число')
var second = prompt('Введите второе число')
var symbol = prompt('Введите символ действия')

function calc(a, b, c) {
    if (b == '0' && c === '/') {
        return  console.log('Делить на 0 нельзя')
    }
    switch (c) {
        case '/':
            console.log(a / b)
            break
        case '*':
            console.log(a * b)
            break
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        default:
            console.log('Error')
    }
}

calc(first, second, symbol)

