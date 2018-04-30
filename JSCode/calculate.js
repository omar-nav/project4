function calculate() {
    error=false;
    if (isNaN(document.forms[0].menuItem1.value) || isNaN(document.forms[0].menuItem2.value) || isNaN(document.forms[0].menuItem3.value) || isNaN(document.forms[0].menuItem4.value) || isNaN(document.forms[0].menuItem5.value)) {
        alert("Numeric values are required when ordering from the menu");
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