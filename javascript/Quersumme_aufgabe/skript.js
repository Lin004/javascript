function quersumme(zahl){
          if (!zahl) return NaN;
          zahl = zahl.toString();
          if (zahl && zahl.lengt == 2){
            var ergebnis = parseInt(zahl.charAt(0)) + parseInt(zahl.charAt(1));
            return ergebnis;

          } else {
            return NaN;
          }
        }


document.write(quersumme(34)
