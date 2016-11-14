function zahler(str) {
var anz = 0;
for (var i = 0; i < str.length; i++) {
      str.charAt();
      if (str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" || str.charAt(i)=="u") {
        ++anz;
      }
    }
    return(anz);
}

document.write(zahler("lorem ipsum dolor sit"));