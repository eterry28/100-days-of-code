function generateDrink() {
    var flavors = ["Cherry", "Vanilla", "Lemon", "Lime", "Strawberry", "Grape", "Orange", "Sour Apple", "Watermelon", "Peach", "Raspberry", "Blackberry", "Mango", "Tutti Frutti"];
    var bases = ["Comrade Cola", "Dr. Dimitri", "Babushka Tea", "Mistery Mountain", "Gulag Punch", "Unity Water"];
    var sugars = ["Zero Sugar", "Original", "Saccharin Enhanced"];

    var randomFlavor = Math.floor(Math.random() * flavors.length);
    var randomBase = Math.floor(Math.random() * bases.length);
    var randomSugar = Math.floor(Math.random() * sugars.length);

    var drink = {
        flavor: flavors[randomFlavor],
        base: bases[randomBase],
        sugar: sugars[randomSugar]
    };

    return drink;
}

function displayDrink(drink) {
    var newDrink = "The next big drink is: " + drink.sugar + " " + drink.flavor + " " + drink.base;
    //console.log(newDrink);
    document.querySelector(".idea").insertAdjacentHTML('beforeend', newDrink);
}


var doneButton = document.querySelector("#refresh");
var drinkToSell = generateDrink();
displayDrink(drinkToSell);

doneButton.onclick = function(){
  location.reload();
};
