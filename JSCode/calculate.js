function calculate() {
    var error=false;
    var locations="";
    if (isNaN(document.forms[0].menuItem1.value) || isNaN(document.forms[0].menuItem2.value) || isNaN(document.forms[0].menuItem3.value) || isNaN(document.forms[0].menuItem4.value) || isNaN(document.forms[0].menuItem5.value)) {
        if (isNaN(document.forms[0].menuItem1.value)){
            locations += "| arroz con pollo ";
        }
        if (isNaN(document.forms[0].menuItem2.value)){
            locations += "| ceviche ";
        }
        if (isNaN(document.forms[0].menuItem3.value)){
            locations += "| chicha morada ";
        }
        if (isNaN(document.forms[0].menuItem4.value)){
            locations += "| papa a la huancaina ";
        }
        if (isNaN(document.forms[0].menuItem5.value)){
            locations += "| picarones ";
        }
        alert("Numeric values are required when ordering from the menu. \n" +
            "Error has occurred at the following menu items: " + locations);
        error = true;
    } else {
            var menuItemOne = parseInt(document.forms[0].menuItem1.value);
            var menuItemTwo = parseInt(document.forms[0].menuItem2.value);
            var menuItemThree = parseInt(document.forms[0].menuItem3.value);
            var menuItemFour = parseInt(document.forms[0].menuItem4.value);
            var menuItemFive = parseInt(document.forms[0].menuItem5.value);
        } if (!error) {
            var total = (menuItemOne * 5) + (menuItemTwo * 7)+ (menuItemThree) + (menuItemFour * 4)+ (menuItemFive * 2);
            var tax = (0.0825);
            var postTaxTotal = total * (1+tax);
            window.alert("Your order totals: $" + postTaxTotal.toFixed(2));
            }
}