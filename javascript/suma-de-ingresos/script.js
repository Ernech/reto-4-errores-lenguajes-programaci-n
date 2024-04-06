//Ingresos
let ingresos = []
let totalIngresos = 0;
let totalIngresosOperativos = 0
let totalIngresosNoOperativos = 0
const formIngresos = document.getElementById("form-ingresos");
const tablaIngresos = document.querySelector("#tabla-ingresos tbody");
const totalIngresosElement = document.getElementById("total-ingresos");


formIngresos.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    ingresos.push({ id: ingresos.length + 1, ...Object.fromEntries(formData) });
    renderTableAndSetIngresoTotal()
});


const renderTableAndSetIngresoTotal = () => {
    tablaIngresos.innerHTML = '';
    totalIngresos = 0;
    totalIngresosOperativos = 0;
    totalIngresosNoOperativos = 0;
    ingresos.forEach(ingreso => {

        const row = document.createElement("tr")

        const celdaIdIngreso = document.createElement("td")
        celdaIdIngreso.textContent = ingreso.id;
        row.appendChild(celdaIdIngreso);

        const celdaTipoIngreso = document.createElement("td");
        celdaTipoIngreso.textContent = ingreso.tipoIngreso;
        row.appendChild(celdaTipoIngreso);

        const celdaIngreso = document.createElement("td");
        celdaIngreso.textContent = ingreso.ingreso;
        row.appendChild(celdaIngreso);

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("btn", "btn-warning", "sm");
        editButton.addEventListener("click", () => editarIngreso(index));


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn", "btn-danger", "sm");
        deleteButton.addEventListener("click", () => eliminarIngreso(ingreso.id));


        const celdaAccion = document.createElement("td");
        celdaAccion.appendChild(editButton)
        celdaAccion.appendChild(deleteButton);
        row.appendChild(celdaAccion)


        tablaIngresos.appendChild(row)

        totalIngresos += Number(ingreso.ingreso)
        if (ingreso.tipoIngreso === 'Ingreso operativo') {
            totalIngresosOperativos += Number(ingreso.ingreso);
        } else {

            totalIngresosNoOperativos += Number(ingreso.ingreso);
        }

    })

    totalIngresosElement.innerHTML = `Total: ${totalIngresos} USD.`;
}

const editarIngreso = (id) => {

}
const eliminarIngreso = (id) => {

    ingresos = ingresos.filter(ingreso => ingreso.id != id);
    renderTableAndSetIngresoTotal();

}

//Costos
let costos = []
let totalCostos = 0;
let totalCostosOperativos = 0
let totalCostosNoOperativos = 0
const formCostos = document.getElementById("form-costos");
const tablaCostos = document.querySelector("#tabla-costos tbody");
const totalCostosElement = document.getElementById("total-costos");


formCostos.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    costos.push({ id: costos.length + 1, ...Object.fromEntries(formData) });
    renderTableAndSetCostoTotal()
});


const renderTableAndSetCostoTotal = () => {
    tablaCostos.innerHTML = '';
    totalCostos = 0;
    totalCostosOperativos = 0;
    totalCostosNoOperativos = 0;
    costos.forEach(costo => {

        const row = document.createElement("tr")

        const celdaIdcosto = document.createElement("td")
        celdaIdcosto.textContent = costo.id;
        row.appendChild(celdaIdcosto);

        const celdaTipoCosto = document.createElement("td");
        celdaTipoCosto.textContent = costo.tipoCosto;
        row.appendChild(celdaTipoCosto);

        const celdaCosto = document.createElement("td");
        celdaCosto.textContent = costo.costo;
        row.appendChild(celdaCosto);

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("btn", "btn-warning", "sm");
        editButton.addEventListener("click", () => editarCosto(index));


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn", "btn-danger", "sm");
        deleteButton.addEventListener("click", () => eliminarCosto(costo.id));


        const celdaAccion = document.createElement("td");
        celdaAccion.appendChild(editButton)
        celdaAccion.appendChild(deleteButton);
        row.appendChild(celdaAccion)


        tablaCostos.appendChild(row)

        totalCostos += Number(costo.costo)
        if (costo.tipoCosto === 'Costo operativo') {
            totalCostosOperativos += Number(costo.costo);
        } else {

            totalCostosNoOperativos += Number(costo.costo);
        }

    })

    totalCostosElement.innerHTML = `Total: ${totalCostos} USD.`;
}

const editarCosto = (id) => {

}
const eliminarCosto = (id) => {

    costos = costos.filter(costo => costo.id != id);
    renderTableAndSetCostoTotal();

}


//Calcular total
let calculoTotalIngresos = 0;
const ingresosTotalesElement = document.getElementById("ingresos-totales");
const tablaIngresosTotales = document.querySelector("#tabla-ingresos-totales tbody");

const calcularIngresosTotales = () => {
    tablaIngresosTotales.innerHTML = '';
    const rowIngresosOperativos = document.createElement("tr");

    const detalleIngresosOperativos = document.createElement("td");
    detalleIngresosOperativos.textContent = "Ingresos operativos";
    rowIngresosOperativos.appendChild(detalleIngresosOperativos);

    const totalIngresosOperativosCelda = document.createElement("td")
    totalIngresosOperativosCelda.textContent = totalIngresosOperativos;
    rowIngresosOperativos.appendChild(totalIngresosOperativosCelda);

    tablaIngresosTotales.appendChild(rowIngresosOperativos)

    const rowIngresosNoOperativos = document.createElement("tr");

    const detalleIngresosNoOperativos = document.createElement("td");
    detalleIngresosNoOperativos.textContent = "Ingresos no operativos";
    rowIngresosNoOperativos.appendChild(detalleIngresosNoOperativos);

    const totalIngresosNoOperativosCelda = document.createElement("td")
    totalIngresosNoOperativosCelda.textContent = totalIngresosNoOperativos;
    rowIngresosNoOperativos.appendChild(totalIngresosNoOperativosCelda);

    tablaIngresosTotales.appendChild(rowIngresosNoOperativos);

    const rowCostosOperativos = document.createElement("tr");

    const detalleCostosOperativos = document.createElement("td");
    detalleCostosOperativos.textContent = "Costos operativos";
    rowCostosOperativos.appendChild(detalleCostosOperativos);

    const totalCostosOperativosCelda = document.createElement("td")
    totalCostosOperativosCelda.textContent = `-${totalCostosOperativos}`;
    rowCostosOperativos.appendChild(totalCostosOperativosCelda);

    tablaIngresosTotales.appendChild(rowCostosOperativos);

    const rowCostosNoOperativos = document.createElement("tr");

    const detalleCostosNoOperativos = document.createElement("td");
    detalleCostosNoOperativos.textContent = "Costos no operativos";
    rowCostosNoOperativos.appendChild(detalleCostosNoOperativos);

    const totalCostosNoOperativosCelda = document.createElement("td")
    totalCostosNoOperativosCelda.textContent = `-${totalCostosNoOperativos}`;
    rowCostosNoOperativos.appendChild(totalCostosNoOperativosCelda);

    tablaIngresosTotales.appendChild(rowCostosNoOperativos);

    calculoTotalIngresos = Number(totalIngresosOperativos) + Number(totalIngresosNoOperativos) - Number(totalCostosOperativos) - Number(totalCostosNoOperativos);

    ingresosTotalesElement.innerHTML = `Total ingresos: ${calculoTotalIngresos}`
}

const btnIngresosTotales = document.getElementById("btn-total")

btnIngresosTotales.addEventListener("click", () => {
    calcularIngresosTotales();
})