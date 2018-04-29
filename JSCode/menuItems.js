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

images.push(pushImage("images/arrozConPollo.jpg", "arroz con pollo"));
images.push(pushImage("images/ceviche.jpg", "ceviche"));
images.push(pushImage("images/chichaMorada.jpg", "chicha morada"));
images.push(pushImage("images/papaAlaHuancaina.jpg", "papa la huancaina"));
images.push(pushImage("images/picarones.jpg", "picarones"));


menuItems = ["arroz\xa0con\xa0pollo", "ceviche", "chicha\xa0morada", "papa\xa0a\xa0la\xa0huancaina", "picarones"];
menuPrices = ["$5","$7","$1","$4","$2"];

function processMenuItems () {
    var i = 1;
    var tableData0 = images;
    var tableData1 = "";
    var tableData2 = "";
    do {
        var tableCell = document.getElementById("menuItem" + i);
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
    processMenuItems();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}