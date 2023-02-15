var arr = [10, 20, 30, 50, 235, 3000, 312, 2, 256, 183];
var elem;
for (var elem of arr){
    if(elem.toString()[0] === '1' || elem.toString()[0] === '2' || elem.toString()[0] === '5'){
        console.log(elem)
    }
}






for (i = 20; i >= 0; i--) {
    console.log(i)
}





var obj = {
    'red': 'красный',
    'yellow': 'жёлтый',
    'green': 'зёленый'
}

var color = prompt('Введите цвет').toLowerCase().trim()

if (obj.red === color) {
    alert('Стой')
} else if (obj.yellow === color) {
    alert('Жди')
} else if (obj.green === color) {
    alert('Иди')
} else {
    alert('Неправильный цвет')
}





