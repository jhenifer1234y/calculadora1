calcule.addEventListener("click", function () {
  var a = valorA.value;
  var b = valorB.value;
  var op = operacao.value;

  a = parseInt(a);
  b = parseInt(b);
  op = parseInt(op);

  if (op == 1) {
    alert(a + b);
  } else if (op == 2) {
    alert(a - b);
  } else if (op == 3) {
    alert(a * b);
  } else if (op == 4) {
    alert(a / b);
  }
});
