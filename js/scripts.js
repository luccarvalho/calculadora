function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("resultado").value = "";
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
    }

    if (valor === "=") {
      var valor_campo = eval(document.getElementById("resultado").value);

      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("resultado").value += valor;
  }
}

// function calcular(tipo, valor) {

//     switch (valor) {
//         case "c":
//             document.getElementById("resultado").value = "";
//             break;
//         case "+":
//             document.getElementById("resultado").value += valor;
//             break;
//         case "-":
//             document.getElementById("resultado").value += valor;
//             break;
//         case "*":
//             document.getElementById("resultado").value += valor;
//             break;
//         case "/":
//             document.getElementById("resultado").value += valor;
//             break;
//         case "=":
//             let valor_campo = eval(document.getElementById("resultado").value);
//             document.getElementById("resultado").value = valor_campo;
//             break;
//     }
// }
