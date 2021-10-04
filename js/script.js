const reserva = [];

//METODO READY()
$(() => {

    //Mostrar CARD

    $('#btnMostrarPuntaCana').click((e) => $('#hotelPuntaCana').fadeIn(1000));

    $('#btnMostrarDominica').click((e) => $('#hotelDominica').fadeIn(1000));

    $('#btnMostrarGrandBavaro').click((e) => $('#hotelGrandBavaro').fadeIn(1000));

    //SELECCION DE HOTEL

    $('#btnPuntaCana').click((e) => {
        $('#mostrarHabitaciones').fadeIn('slow');
        seleccionPuntaCana();
        reserva.push('Hotel Punta Cana')
        localStorage.setItem('reserva', JSON.stringify(reserva));
    });

    $('#btnDominica').click((e) => {
        $('#mostrarHabitaciones').fadeIn('slow');
        seleccionDominica();
        reserva.push('Hotel Dominica')
        localStorage.setItem('reserva', JSON.stringify(reserva));
    });

    $('#btnGrandBavaro').click((e) => {
        $('#mostrarHabitaciones').fadeIn('slow');
        seleccionGrandBavaro();
        reserva.push('Hotel Grand Bavaro')
        localStorage.setItem('reserva', JSON.stringify(reserva));
    });

    //SELECCION DE HABITACION

    $('#btnHabitacionSuite').click((e) => {
        $('#mostrarServicios').fadeIn('slow', () => ($('#mostrarHabitaciones').fadeOut('slow')));
        seleccionSuite()
        reserva.push('Habitacion Suite')
        localStorage.setItem('reserva', JSON.stringify(reserva))
    });

    $('#btnHabitacionDoble').click((e) => {
        $('#mostrarServicios').fadeIn('slow', () => ($('#mostrarHabitaciones').fadeOut('slow')));
        seleccionDoble()
        reserva.push('Habitacion Doble')
        localStorage.setItem('reserva', JSON.stringify(reserva))
    });

    $('#btnHabitacionTriple').click((e) => {
        $('#mostrarServicios').fadeIn('slow', () => ($('#mostrarHabitaciones').fadeOut('slow')));
        seleccionTriple();
        reserva.push('Habitacion Triple')
        localStorage.setItem('reserva', JSON.stringify(reserva))
    });

    //MUESTRA EN DOM

    $('#btnAllInclusive').click((e) => {
        seleccionAllInclusive();
        reserva.push('Servicio All Inclusive')
        localStorage.setItem('reserva', JSON.stringify(reserva))
    });

    $('#btnMediaPension').click((e) => {
        $('#mostrarServicios').fadeOut('slow')
        seleccionMediaPension();
        reserva.push('Servicio Media Pension')
        localStorage.setItem('reserva', JSON.stringify(reserva))
    });

    $('#btnSoloDesayuno').click((e) => {
        $('#mostrarServicios').fadeOut('slow')
        seleccionSoloDesayuno();
        reserva.push('Servicio Solo Desayuno')
        localStorage.setItem('reserva', JSON.stringify(reserva))
    });


    //BTN RESSERVAR Y CANCEL

    $('#btnCancel').click((e) => {
        location.reload();
    })

    $('#btnReservar').click((e) => {
        alert('Gracias por tu reserva!')
    });
});

//BTN ACTIVIDADES
$('#button').click((e) => {
    actividadesCard();
})


function actividadesCard() {
    $.get("./js/data.json", (data, status) => {
        if (status === 'success') {
            let setDatos = data;
            for (let i = 0; i < data.actividades.length; i++) {
                $('#actividades').append(
                    `<div class="card text-center container align-items-center m-3 p-3 d-flex">
                    <img src=${data.actividades[i].foto} class="card-img-top" alt="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${data.actividades[i].nombre}</h5>
                    <p class="card-text ">${data.actividades[i].texto}</p>
                    </div>
                    </div>`
                )
            }
        } else { alert('No se pudieron cargar las actividades') }
    })
}