const reserva = [];
//METODO READY()
$(() => {
    //BTN MOSTRAR ACTIVIDADES
    $('#actividadesBtn').one("click", (e) => {
        actividadesCard();
    })

    //COMIENZO EVENTOS CARDS
    $('#hotelesDisponibles').one("click", (e) => {
        //MOSTRAR CARDS
        hotelesCard();
    })

    //EVENTO QUE CALCULA EL TOTAL ESTADIA Y MUESTRA BOTON RESERVAR
    $("#idCalcular").one("click", (e) => {
        calcularEstadia()
        mostrarReservar()
    });

    //BTN RESSERVAR Y CANCEL
    $('#btnReservar').click((e) => {
        alert('Gracias por tu reserva!')
        //SE GUARDA EN LOCALSTORAGE SI EL USUARIO HACE LA RESERVA
        localStorage.setItem('reserva', JSON.stringify(reserva));
        console.log(reserva)
    });

    //CANCELA LAS SELECCIONES DEL USUARIO PARA QUE PUEDA ELEGIR NUEVAMENTE SI SE HA EQUIVOCADO
    $('#btnCancel').click((e) => {
        location.reload();
    })


});




