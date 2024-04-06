const ingresos = []
let totalIngresos = 0;

const formIngresos = document.getElementById("form-ingresos");
const tablaIngresos = document.querySelector("#tabla-ingresos tbody");
const totalIngresosElement = document.getElementById("total-ingresos");


formIngresos.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    ingresos.push({ id: ingresos.length + 1, ...Object.fromEntries(formData) });
    console.log(ingresos);
    renderTableAndSetIngresoTotal()
});


const renderTableAndSetIngresoTotal = () => {
    tablaIngresos.innerHTML = '';
    totalIngresos=0;
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

        
        tablaIngresos.appendChild(row)
        totalIngresos+=Number(ingreso.ingreso)

    })
    console.log(totalIngresos);
    totalIngresosElement.innerHTML=`Total: ${totalIngresos} USD.`;
}
