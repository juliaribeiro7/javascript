function calcular(operacao) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira ambos os números";
    } else {
        switch (operacao) {

            case 'soma':
                resultado = num1 + num2;
                break;

            case 'subtrair':
                resultado = num1 - num2;
                break;

            case 'multiplicar':
                resultado = num1 * num2;
                break;

            case 'dividir':
                resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
                break;

            default:
                resultado = "Operação Inválida";
        }
    }

    document.getElementById("resultado").innerText = "O resultado é " + resultado;
}