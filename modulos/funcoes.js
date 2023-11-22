
function converteMaiuscula(text) {
    return text.toUpperCase();
}

function converteMinuscula(text) {
    return text.toLowerCase();
}

function formaMoeda(valor) {
    return valor.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    });
}

export {converteMaiuscula, converteMinuscula, formaMoeda}
