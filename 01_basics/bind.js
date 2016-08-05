this.car = "Old ugly car";

var vietsGarage = {
    car: "BMW i8",
    getCar: function() {
        return this.car;
    }
};

console.log(vietsGarage.getCar());

var storeGetCarForLater = vietsGarage.getCar;
console.log(storeGetCarForLater());

// Binds vietsGarage so it will be treated as `this`
var theRealGetCarFunc = vietsGarage.getCar.bind(vietsGarage);
console.log(theRealGetCarFunc());
