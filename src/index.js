import $ from 'jquery';
import './style.css';

$(document).ready(() => {
  $('#submitButton').click(() => {
    const phoneNumber = $('#phoneNumber').val();
    console.log(phoneNumber);
    $.ajax({
      type: 'POST',
      url: 'insert.php',
      data: {
        phoneNumber,
      },
      success() {
        const $d = $(`<li>${phoneNumber}</li>`).fadeIn(500, () => {
          $('#phoneNumber').val('');
        });
        $('ul#list').prepend($d);
      },
    });
  });
});
