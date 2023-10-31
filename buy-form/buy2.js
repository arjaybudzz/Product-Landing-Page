var add = document.getElementById("add");
var sub = document.getElementById("subtract");
var item_count_disp = document.getElementById("quantity");
var total_price_disp = document.getElementById("product-price");
var count = 0;
var total_price = 0;

add.onclick = function() {
    count += 1;
    total_price += 19.99;
    item_count_disp.textContent = count;
    total_price_disp.textContent = "$" + total_price.toFixed(2);
}

sub.onclick = function() {
    if (count < 1) {
        alert("Reached limit");
    }
    else {
        count -= 1;
        total_price -= 19.99;
    }
    item_count_disp.textContent = count;
    total_price_disp.textContent = "$" + total_price.toFixed(2);
}





