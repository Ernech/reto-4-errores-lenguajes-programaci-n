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

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("btn", "btn-warning","sm");
        editButton.addEventListener("click", () => editarIngreso(index));

       
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn", "btn-danger","sm");
        deleteButton.addEventListener("click", () => eliminarIngreso(ingreso.id));


        const celdaAccion=document.createElement("td");
        celdaAccion.appendChild(editButton)
        celdaAccion.appendChild(deleteButton);
        row.appendChild(celdaAccion)


        tablaIngresos.appendChild(row)

        totalIngresos+=Number(ingreso.ingreso)

    })
    console.log(totalIngresos);
    totalIngresosElement.innerHTML=`Total: ${totalIngresos} USD.`;
}

const editarIngreso=(id)=>{

}
const eliminarIngreso=(id)=>{

    ingresos = ingresos.filter(ingreso=>ingreso.id!=id);
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
    totalCostos=0;
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
        editButton.classList.add("btn", "btn-warning","sm");
        editButton.addEventListener("click", () => editarCosto(index));

       
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn", "btn-danger","sm");
        deleteButton.addEventListener("click", () => eliminarCosto(costo.id));


        const celdaAccion=document.createElement("td");
        celdaAccion.appendChild(editButton)
        celdaAccion.appendChild(deleteButton);
        row.appendChild(celdaAccion)


        tablaCostos.appendChild(row)

        totalCostos+=Number(costo.costo)

    })
    
    totalCostosElement.innerHTML=`Total: ${totalCostos} USD.`;
}

const editarCosto=(id)=>{

}
const eliminarCosto=(id)=>{

    costos = costos.filter(costo=>costo.id!=id);
    renderTableAndSetCostoTotal();
    
}


//Calcular total


