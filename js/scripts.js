//business logic
function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
Pizza.prototype.fullPizza = function() {
  return this.topping + " " + this.size + " " + this.price;
}
var small = { name: "Small", price: 10.00};
var medium = { name: "Medium", price: 12.00};
var large = { name: "Large", price: 14.00};
var pepperoni = { name: "Pepperoni", price: 0};
var salami = { name: "Salami", price: 0};
var artichoke = { name: "Artichoke", price: 0};
var hawaiian = { name: "hawaiian", price: 0};
var veggie = { name: "veggie", price: 0};
var anchovy = { name: "Anchovy", price: 1.00};
var sausage = { name: "Sausage", price: 1.00};
var chicken = { name: "Chicken", price: 1.00};

Pizza.prototype.cost = function () {
  price.forEach(function(price) {
    this.price + 1;
  }
	return this.price;
}

console.log("Pepperoni"+ size);
console.log("Salami"+ size);
console.log("Artichoke"+ size);
console.log("hawaiian"+ size);
console.log("veggie"+ size);
console.log("Anchovy"+ size);
console.log("Sausage"+ size);
console.log("Chicken"+ size);


//user interface logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    var inputtedTopping = $("input#topping").val();
    var inputtedSize = $("input#size").val();
    var newPizza = new Pizza(inputtedTopping, inputtedSize);
    console.log(newPizza.cost());
  });
});
