// syntax 

switch (key) {
  case value:
    // Code to execute when key equals value
    break;

  default:
    // Code to execute if key doesn't match any case
    break;
}
// The break; statement is used to exit the switch statement. After executing the code block associated with a case, the break; statement ensures that execution moves out of the switch statement. If break; is omitted, execution will continue into the next case statement, which is known as "fall-through."
// The default case is optional. It specifies the block of code to execute if key does not match any of the case values. The default case is like the else clause in an if-else statemen

const temprature = 41
switch (temprature) {
  case 38:
    console.log (`temparutre is 38`) 
    break;
  case 39:
    console.log ('temprature is 39')
    break;
  case 40:
    console.log ('temprature is 40')
    break;
  case 41:
    console.log ("temprature is 41")
    break;
  default:
    console.log ('final temprature')
    break;
}


const month ="apr"

switch (month) {
  case "jan":
    console.log (`month is jan`) 
    break;
  case "feb":
    console.log ('month is feb')
    break;
  case "mar":
    console.log ('month is mar')
    break;
  case "apr":
    console.log ("month is apr")
    break;
  case "may":
    console.log ('month us may')
    break;
  default:
    console.log ('final temprature')
    break;
}


