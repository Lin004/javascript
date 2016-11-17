function Quersumme(zahl) {
        var summe = 0;
        var segs = (zahl+'').split('');
        for (var i=0; i<segs.length; i++)
               summe += parseInt(segs[i]);
        return summe;
      }

      function durchQuersummeTeilbareZahlen(zahl1, zahl2) {
          var returnvar = "<table>";
		  returnvar += "<tr><th>Quersumme</th> <th>Zahl</th> <th>Division</th> </tr>"
          for (var i = zahl1; i <= zahl2; i++)     {
              var q = Quersumme(i);
              if (i % q === 0){
				   var d = i / q;
                 returnvar += "<tr> <td>" + i + "</td>";
                 returnvar += "<td>" + q + "</td>";
                 returnvar += "<td>" + d + "</td> </tr>";
              }
          }
          returnvar +="</table>";
          return returnvar;
        }
        document.write(durchQuersummeTeilbareZahlen(10, 30));
