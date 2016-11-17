if (var ua = navigator.userAgent.toLowerCase();
var isFirefox = (ua.indexOf("gecko/") > -1 && ua.indexOf("firefox/") > -1)) {
   location.href = "firefox.html";
}

else if (var ua = navigator.userAgent.toLowerCase();
 var isIE = ua.indexOf("msie") > -1) {
   location.href = "ie.html";
}

else {
  location.href = "chrome.html";
}
