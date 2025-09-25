function Soma(x,y) {
    return x+y;
}

function Subtrai(x,y) {
    return x-y;
}

function Multiplica(x,y) {
    return x*y;
}
function Divide(x,y) {
    if (y === 0) {
        return "Divisão por zero não é permitida";
    }
    return x/y;
}

function MostraResultado(num1, num2) {
    console.log(`Soma entre ${num1} e ${num2}:`, Soma(num1, num2));

    console.log(`Subtração entre ${num1} e ${num2}:`, Subtrai(num1, num2));

    console.log(`Multiplicação entre ${num1} e ${num2}:`, Multiplica(num1, num2));

    console.log(`Divisão entre ${num1} e ${num2}:`, Divide(num1, num2));
}

const x = 15;
const y = 5;

console.log("Resultados para os números:", x, "e", y,);
MostraResultado(x, y);