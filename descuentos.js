// const precioOriginal = 100
// const descuento = 15

// const porcentajePrecioConDescuento = 100 - descuento
// const precioConDescuento = ( precioOriginal * porcentajePrecioConDescuento ) / 100

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeMenosDescuento = 100 - descuento
    const precioFinal = (precio * porcentajeMenosDescuento) /100

    return precioFinal
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

// Interaccion con HTML
function descuento() {
    const precio = Number(document.getElementById("inputPrecio").value)
    const inputCoupon = document.getElementById("InputCoupon").value
    // const descuento = Number(document.getElementById("inputDescuento").value)

    const precioConDescuentoHTML = document.getElementById("precioConDescuento")

    const isCouponValueValid = function (coupon) {
        return coupon.name === inputCoupon;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    }else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    
        const resultP = document.getElementById("ResultP");
        precioConDescuentoHTML.innerHTML = `<b>El precio a pagar es: <span style="color: red;">${precioConDescuento}</span></b>`
    }

    // const precioAPagar = calcularPrecioConDescuento(precio, descuento)

}