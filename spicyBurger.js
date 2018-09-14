var spicyBurger = {
  foodName:"The Spicy Burger",
  meat:"Angus Beef",
  veg:"Lettuce, Tomato Onion",
  sauce:"Mayo, Siracha",
  price:"12.95"
};

var mildBurger = {
  foodName:"The Mild Burger",
  meat:"Turkey",
  veg:"Lettuce, Tomato, Onion",
  sauce:"Mayo, Mustard",
  price:"10.95",
}

    function spicyTotal(){
      var tax = 1.04712;
      var a = spicyBurger.price * tax;
      document.getElementById('spicyFinal').innerHTML = "$" + a.toFixed(2);
    }
    
    function mildTotal(){
    var tax = 1.04712;
    var a = mildBurger.price * tax;
    document.getElementById('mildFinal').innerHTML = "$" + a.toFixed(2);
    }
    
document.getElementById('sName').innerHTML = spicyBurger.foodName;
document.getElementById("sMeat").innerHTML = spicyBurger.meat;
document.getElementById("sVeg").innerHTML = spicyBurger.veg;
document.getElementById("sSauce").innerHTML = spicyBurger.sauce;
document.getElementById("sPrice").innerHTML = spicyBurger.price;

document.getElementById("mName").innerHTML = mildBurger.foodName;
document.getElementById("mMeat").innerHTML = mildBurger.meat;
document.getElementById("mVeg").innerHTML = mildBurger.veg;
document.getElementById("mSauce").innerHTML = mildBurger.sauce;
document.getElementById("mPrice").innerHTML = mildBurger.price;