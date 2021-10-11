const reserva = [];


//METODO READY()
$(() => {

    //Mostrar CARD

    $('#btnMostrarPuntaCana').click((e) => $('#hotelPuntaCana').fadeIn(1000));

    $('#btnMostrarDominica').click((e) => $('#hotelDominica').fadeIn(1000));

    $('#btnMostrarGrandBavaro').click((e) => $('#hotelGrandBavaro').fadeIn(1000));

    //SELECCION DE HOTEL

    // $('#btnPuntaCana').one("click", (e) => {
    //     $('#mostrarHabitaciones').fadeIn('slow');
    //     seleccionPuntaCana();

    //     //ARMAR FUNCION PARA DESAPARECER
    //     $('#hotelPuntaCana').fadeOut('slow');
    //     $('#hotelDominica').fadeOut('slow');
    //     $('#hotelGrandBavaro').fadeOut('slow');
    //     //ARMAR FUNCION PARA DESAPARECER

    //     reserva.push('Hotel Punta Cana')
    //     localStorage.setItem('reserva', JSON.stringify(reserva));
    // });

    // $('#btnDominica').click((e) => {
    //     $('#mostrarHabitaciones').fadeIn('slow');
    //     seleccionDominica();
    //     reserva.push('Hotel Dominica')
    //     localStorage.setItem('reserva', JSON.stringify(reserva));
    // });

    // $('#btnGrandBavaro').click((e) => {
    //     $('#mostrarHabitaciones').fadeIn('slow');
    //     seleccionGrandBavaro();
    //     reserva.push('Hotel Grand Bavaro')
    //     localStorage.setItem('reserva', JSON.stringify(reserva));
    // });

    // //SELECCION DE HABITACION

    // $('#btnHabitacionSuite').click((e) => {
    //     $('#mostrarServicios').fadeIn('slow', () => ($('#mostrarHabitaciones').fadeOut('slow')));
    //     seleccionSuite()
    //     reserva.push('Habitacion Suite')
    //     localStorage.setItem('reserva', JSON.stringify(reserva))
    // });

    // $('#btnHabitacionDoble').click((e) => {
    //     $('#mostrarServicios').fadeIn('slow', () => ($('#mostrarHabitaciones').fadeOut('slow')));
    //     seleccionDoble()
    //     reserva.push('Habitacion Doble')
    //     localStorage.setItem('reserva', JSON.stringify(reserva))
    // });

    // $('#btnHabitacionTriple').click((e) => {
    //     $('#mostrarServicios').fadeIn('slow', () => ($('#mostrarHabitaciones').fadeOut('slow')));
    //     seleccionTriple();
    //     reserva.push('Habitacion Triple')
    //     localStorage.setItem('reserva', JSON.stringify(reserva))
    // });

    // //MUESTRA EN DOM

    // $('#btnAllInclusive').click((e) => {
    //     seleccionAllInclusive();
    //     reserva.push('Servicio All Inclusive')
    //     localStorage.setItem('reserva', JSON.stringify(reserva))
    // });

    // $('#btnMediaPension').click((e) => {
    //     $('#mostrarServicios').fadeOut('slow')
    //     seleccionMediaPension();
    //     reserva.push('Servicio Media Pension')
    //     localStorage.setItem('reserva', JSON.stringify(reserva))
    // });

    // $('#btnSoloDesayuno').click((e) => {
    //     $('#mostrarServicios').fadeOut('slow')
    //     seleccionSoloDesayuno();
    //     reserva.push('Servicio Solo Desayuno')
    //     localStorage.setItem('reserva', JSON.stringify(reserva))
    // });


    //BTN RESSERVAR Y CANCEL

    $('#btnCancel').click((e) => {
        location.reload();
    })

    $('#btnReservar').click((e) => {
        alert('Gracias por tu reserva!')
    });

    //BTN ACTIVIDADES
    $('#actividadesBtn').one("click", (e) => {
        actividadesCard();

    })

    //BTN HOTELES
    //CLICK ME
    $('#hotelesDisponibles').click((e) => {
        hotelesCard();
    })

    //BTN HABITACIONES
    $("#habitacionesDisponibles").one("click", ((e) => {
        habitacionesCard();
    }))


    $('.hola').click((e) => {
        alert('jajajaja')
    })

    $('#habitacionDoble').click((e) => {
        console.log('hello Universo')
    })


    $('#id1').click((e) => {
        alert('jajajajaja')
    })


});

// let boton = document.querySelector("#habitacionSuite");

// console.log(boton)



