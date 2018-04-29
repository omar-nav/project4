/*
A JavaScript for banner images
 */

myBanner=new Array('images/president.jpg','images/alpaca.jpg','images/map.jpg','images/incanEmperor.jpg');
banner=0;
function showBanner() {
    if (document.images) {
        banner++;
        if (banner==myBanner.length) {
            banner=0;
        }
        document.changeBanner.src=myBanner[banner];
        setTimeout("showBanner()",3000);
    }
}