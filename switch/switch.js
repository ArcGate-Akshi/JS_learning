// calculator
let num1=prompt("enter num1");
let num2=prompt("enter num2");
opr = prompt("enter operator + - * / ")

switch (opr)
{
    case "+":
      var result= parseFloat(num1)+ parseFloat(num2);
      console.log(`${num1} + ${num2}= ${result}`);
      alert(result);
      break;
    case "-":
      var result= parseFloat(num1) - parseFloat(num2);
      console.log(`${num1} - ${num2}= ${result}`);
      alert(result);
      break;
    case "*":
      var result= parseFloat(num1) * parseFloat(num2);
      console.log(`${num1} * ${num2}= ${result}`);
      alert(result);
      break;
    case "/":
      var result= parseFloat(num1) / parseFloat(num2);
      console.log(`${num1} / ${num2}= ${result}`);
      alert(result);
      break;
    default:
      console.log('invalid operation');
      alert("invalid");
}
