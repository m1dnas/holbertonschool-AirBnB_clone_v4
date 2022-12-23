#!/usr/bin/node

let checkbox = document.querySelector('input[type=checkbox]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        checked.querySelector('#checkbox');
    } else {

    }
    
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });

     $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({})
    }).done(function (data) {
        for (const place of data) {
            const template = `<article>
            <div class="title">
                <h2>${place.name}</h2>
                <div class="price_by_night">
                    $${place.price_by_night}
                </div>
            </div>
            <div class="information">
                <div class="max_guest">
                    <br>
                    ${place.max_guest} Guests
                </div>
                <div class="number_rooms">
                    <br>
                    ${place.number_rooms} Bedrooms
                </div>
                <div class="number_bathrooms">
                    <br>
                    ${place.number_bathrooms} Bathroom
                </div>
            </div>
            <div class="description">
                ${place.description}
            </div>
        </article>`;
      $('section.places').append(template);
    }
    });
})