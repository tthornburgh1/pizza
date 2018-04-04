//business logic
function Pizza(topping, size) {
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

Cost.prototype.fullCost = function () {
  console.log(this.topping+this.size)
  return this.topping + " " + this.size;
}

//user interface logic
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    var inputtedTopping = $("input#topping").val();
    var inputtedSize = $("input#size").val();
    var newPizza = new Pizza(inputtedTopping, inputtedSize);
  });
});
