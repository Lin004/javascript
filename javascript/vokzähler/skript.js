function zahler(str) {
var anz = 0;

for (var i = 0; i < str.length; i++) {
      //str.charAt();
      if (str.toLowerCase().charAt(i)=="a" || str.toLowerCase().charAt(i)=="e" ||
          str.toLowerCase().charAt(i)=="i" || str.toLowerCase().charAt(i)=="o" ||
          str.toLowerCase().charAt(i)=="u") {
              ++anz;
          }
      /*switch (i) {
        case 1: str.toLowerCase().charAt(i)=="a"
          ++anz;
          break;
          case 2: str.toLowerCase().charAt(i)=="e"
            ++anz;
            break;
            case 3: str.toLowerCase().charAt(i)=="i"
              ++anz;
              break;
              case 4: str.toLowerCase().charAt(i)=="0"
                ++anz;
                break;
                case 5: str.toLowerCase().charAt(i)=="u"
                  ++anz;
                  break;

        default:
          anz=100000;
      }*/
    }
    return(anz);
}

document.write(zahler("Orem ipsum dolor sit"));
