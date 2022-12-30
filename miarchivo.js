
let i13promax = 1099;
let i13pro = 990;
let i13 = 890;

function captura() {
    let cell = document.getElementById("cellstype").value;
    let cuota = document.getElementById("cuota").value;
        let opcioncompra = cell + cuota;

    switch (opcioncompra) {
        case "11":
            alert("Valor del iphone = " + i13promax + " usd" + "\n" + "Valor a 12 cuotas = " + Math.round(i13promax/12) + " usd");
            break;
        case "12":
            alert("Valor del iphone = " + i13promax + " usd" + "\n" + "Valor a 24 cuotas = " + Math.round(i13promax/24) + " usd");
            break;
        case "21":
            alert("Valor del iphone = " + i13pro + " usd" + "\n" + "Valor a 12 cuotas = " + Math.round(i13pro/12) + " usd");
            break;
        case "22":
            alert("Valor del iphone = " + i13pro + " usd" + "\n" + "Valor a 24 cuotas = " + Math.round(i13pro/24) + " usd");
            break;
        case "31":
            alert("Valor del iphone = " + i13 + " usd" + "\n" + "Valor a 12 cuotas = " + Math.round(i13/12) + " usd");
            break;
        case "32":
            alert("Valor del iphone = " + i13 + " usd" + "\n" + "Valor a 24 cuotas = " + Math.round(i13/24) + " usd");
            break;
        default:
            alert("Seleccione una opcion valida");
            break;
    }
}