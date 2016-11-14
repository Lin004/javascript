      var Zahl = "1";
      while (Zahl<=30 ) {
        if ((Zahl%3==0 || Zahl%5==0) && Zahl !=30) {
          document.write(Zahl);
          document.write(",");
      }
        if (Zahl==30){
          document.write(Zahl)
        }
        Zahl++;
      }
