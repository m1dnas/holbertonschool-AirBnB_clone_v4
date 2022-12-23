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
})