const calculator = {
    add: function (a, b) {
        return a + b
    }
}
console.log(calculator.add(1, 2))
//enhanced object literals
const Ecalculator = {
    add(a, b) {
        return a + b
    }
}
console.log(Ecalculator.add(1, 2))