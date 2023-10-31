var add = document.getElementById("add");
var sub = document.getElementById("subtract");
var item_count_disp = document.getElementById("quantity");
var total_price_disp = document.getElementById("product-price");
var proceed = document.getElementById("proceed-btn");
var card_number = document.getElementsByClassName("card-number");
var cvv = document.getElementById("cvv-validity");

var count = 0;
var total_price = 0;

add.onclick = function() { //when the button is pressed
    count += 1;
    total_price += 84.99;   //product price
    //display results
    item_count_disp.textContent = count;
    total_price_disp.textContent = "$" + total_price.toFixed(2);
}

sub.onclick = function() {
    if (count < 1) {
        alert("Reached limit");
    }
    else {
        count -= 1;
        total_price -= 84.99;
    }
    item_count_disp.textContent = count;
    total_price_disp.textContent = "$" + total_price.toFixed(2);
}

proceed.onclick = function() {
    if (card_number.value == "" || cvv.value == "") {
        alert("Please complete all the details!");
    }

    else {
        if (count === 0) {
            alert("Please enter quantity");
        }
        else {
            alert("Thanks for buying!");
        }
    }
}





