botao.addEventListener("click", function () {
  var nomeCliente = nome.value;
  var quantiaSorvete = quantidade.value;
  var saborSorvete = sabores.value;

  /*alert("nome: " + nomeCliente +  
  " Qnt: " + quantiaSorvete + 
  "sabor: " + saborSorvete);*/

  pedidoNome.innerHTML = "Nome: " + nomeCliente;
  pedidoQuantia.innerHTML = "Quantidade: " + quantiaSorvete;
  pedidoSabor.innerHTML = "Sabor: " + saborSorvete;
});
