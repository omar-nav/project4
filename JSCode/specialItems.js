/*
A JavaScript for MenuItems

Populates tables with items in three distinct arrays.
These arrays include one for each of the following:
images, dish names, and prices
 */

var pushImage = function(src, title) {
    var img   = new Image(75,75);
    img.src   = src;
    img.alt   = title;
    img.title = title;
    return img;
};

var images = [];

images.push(pushImage("images/tallarinesVerdes.jpg", "tallarines verdes"));
images.push(pushImage("images/carapulcra.jpg", "carapulcra"));
images.push(pushImage("images/polloAlaBrasa.jpg", "pollo a la brasa"));
images.push(pushImage("images/alfajores.jpg", "alfajores"));
images.push(pushImage("images/piscoSour.jpg", "pisco sour"));

menuItems = ["tallarines\xa0verdes", "carapulcra", "pollo\xa0a\xa0la\xa0brasa", "alfajores", "pisco\xa0sour"];
menuPrices = ["$5","$6","$6","$3","$4"];

function processSpecialItems () {
    var i = 1;
    var tableData0 = images;
    var tableData1 = "";
    var tableData2 = "";
    do {
        var tableCell = document.getElementById("specialItem" + i);
        tableData0 = tableCell.getElementsByClassName("image");
        tableData0[0].appendChild(images[i-1]);
        tableData1 = tableCell.getElementsByClassName("dish");
        tableData1[0].innerHTML = menuItems[i-1];
        tableData2 = tableCell.getElementsByClassName("price");
        tableData2[0].innerHTML = menuPrices[i-1];
        i++;
    } while (i <= menuItems.length);
}

function setUpPage() {
    processSpecialItems();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}