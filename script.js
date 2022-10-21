$(document).ready(function() {

    // Simula uma resposta de requisição GET
    var texto =[
        {
            titulo: "Texto 01",
            comentario: "Programação com Jquery 01 <br> Simulando requisição GET..."
        },
        {
            titulo: "Texto 02",
            comentario: "Programação com Jquery 01 <br> Simulando requisição GET..."
        },
        {
            titulo: "Texto 03",
            comentario: "Programação com Jquery 01 <br> Simulando requisição GET..."
        },
        {
            titulo: "Texto 04",
            comentario: "Programação com Jquery 01 <br> Simulando requisição GET..."
        }
    ];

    // Cria os elementos dinamicamente
    for(i = 0; i < texto.length; i++){

       var card = $('<div class="card">' +
            '<div class="title">' +
                '<h3>' + texto[i].titulo + '</h3>' +
            '</div>' +
            '<div class="body">' +
                '<p>' + texto[i].comentario + '</p>' +
            '</div>' +
        '</div>');

        // Atribui os elementos html na div dos cards
        $(".card-wrapper").append(card);
    }

}); 