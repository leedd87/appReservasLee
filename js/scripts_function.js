let precio = 0;




//SELECCION HABITACION
function seleccionSuite() {
    $("#seleccionHabitacion").append(
        `<p class='seleccion'>Elegiste habitacion Suite</p>`
    );
}

function seleccionDoble() {
    $("#seleccionHabitacion").append(
        `<p class='seleccion'>Elegiste habitacion Doble</p>`
    );
}

function seleccionTriple() {
    $("#seleccionHabitacion").append(
        `<p class='seleccion'>Elegiste habitacion Triple</p>`
    );
}

//SELECCION SERVICIO
function seleccionAllInclusive() {
    $("#seleccionServicio").append(
        `<p class='seleccion'>Elegiste el servicio de All Inclusive</p>`
    );
}

function seleccionMediaPension() {
    $("#seleccionServicio").append(
        `<p class='seleccion'>Elegiste el servicio de Media Pension</p>`
    );
}

function seleccionSoloDesayuno() {
    $("#seleccionServicio").append(
        `<p class='seleccion'>Elegiste el servicio de solo Desayuno</p>`
    );
}

function actividadesCard() {
    $.get("./js/data.json", (data, status) => {
        if (status === "success") {
            let setDatos = data;
            for (let i = 0; i < data.actividades.length; i++) {
                $("#actividades").append(
                    `<div class="card text-center container align-items-center m-3 p-3 d-flex">
                    <img src=${data.actividades[i].foto} class="card-img-top" alt="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${data.actividades[i].nombre}</h5>
                    <p class="card-text ">${data.actividades[i].texto}</p>
                    </div>
                    </div>`
                );
            }
        } else {
            alert("No se pudieron cargar las actividades");
        }
    });
}

function hotelesCard() {
    $.get("./js/data.json", (data, status) => {
        if (status === "success") {
            let setDatos = data;
            for (let i = 0; i < data.hotel.length; i++) {
                $("#mostrarHoteles").append(
                    `<div class="card text-center container align-items-center m-3 p-3 d-flex">
                        <img src=${data.hotel[i].foto} class="card-img-top" alt="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">${data.hotel[i].nombre}</h5>
                        <p class="card-text">${data.hotel[i].texto}</p>
                        <button class="btn btn-primary deshotel" id="${data.hotel[i].id}">Pick Me</button>
                        </div>
                        </div>`
                );
            }
            seleccionHotel(data.hotel);
        } else {
            alert("No se pudieron cargar los hoteles");
        }
    });
}

function seleccionHotel(listaHoteles) {
    listaHoteles.forEach((element) => {
        $(`#${element.id}`).click((e) => {
            $("#seleccionHotel").append(
                `<p class='seleccion'>Elegiste ${element.nombre}</p>`
            );
            $(".deshotel").prop("disabled", true);
            habitacionesCard()
        });
    });
};




function habitacionesCard() {
    $.get("./js/data.json", (data, status) => {
        if (status === "success") {
            let setDatos = data;
            for (let i = 0; i < data.habitaciones.length; i++) {
                $("#mostrarHabitaciones").append(
                    `<div class="card text-center container align-items-center m-3 p-3 d-flex">
                            <img src=${data.habitaciones[i].foto} class="card-img-top" alt="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">${data.habitaciones[i].nombre}</h5>
                            <p class="card-text ">${data.habitaciones[i].texto}</p>
                            <p id='precio' data-value="${data.habitaciones[i].precio}">Precio por noche: $ ${data.habitaciones[i].precio}</p>
                            <button class="btn btn-primary deshabitacion" id="${data.habitaciones[i].id}">Pick Me</button>
                            </div>
                            </div>`
                );
            }
            seleccionHabitacion(data.habitaciones);
        } else {
            alert("No se pudieron cargar las habitaciones");
        }
    })
}

function seleccionHabitacion(listaHabitaciones) {
    listaHabitaciones.forEach((element) => {
        $(`#${element.id}`).click((e) => {
            $("#seleccionHabitacion").append(
                `<p class='seleccion'>Elegiste ${element.nombre}</p>
            <p class="seleccion">Precio de $<span id="precioHabitacion">${element.precio}</span>`
            );
            ServiciosCard()
            $(".deshabitacion").prop("disabled", true);
        })
    })
}

function ServiciosCard() {
    $.get("./js/data.json", (data, status) => {
        if (status === "success") {
            let setDatos = data;
            for (let i = 0; i < data.servicios.length; i++) {
                $("#mostrarServicios").append(
                    `<div class="card text-center container align-items-center m-3 p-3 d-flex">
                        <img src=${data.servicios[i].foto} class="card-img-top" alt="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">${data.servicios[i].nombre}</h5>
                        <p class="card-text">${data.servicios[i].texto}</p>
                        <p id='precio' data-value="${data.servicios[i].precio}">Precio por noche: $ ${data.servicios[i].precio}</p>
                        <button class="btn btn-primary desservicios" id="${data.servicios[i].id}">Pick Me</button>
                        </div>
                        </div>`
                );
            }
            seleccionServicios(data.servicios);
        } else {
            alert("No se pudieron cargar los hoteles");
        }
    });
}

function seleccionServicios(listaServicios) {
    listaServicios.forEach((element) => {
        $(`#${element.id}`).click((e) => {
            $("#seleccionServicio").append(
                `<p class='seleccion'>Elegiste ${element.nombre}</p>
            <p class="seleccion">Precio de $<span id="precioServicio">${element.precio}</span>`
            );
            $(".desservicios").prop("disabled", true);
            calcularEstadia()
        })
    })
}

function calcularEstadia() {

    let precioHabitacion = document.querySelector('#precioHabitacion')
    let precioServicio = document.querySelector('#precioServicio')
    console.log(precioHabitacion);
    console.log(precioServicio);
}
