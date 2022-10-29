$(document).ready(() => {
  const amenityChoices = {}
  $('input[type="checkbox"]').change(() => {
    if(this.checked) {
      amenityChoices[$(this).attr('data-name')] = $(this).attr('data-id');
    }
    else {
      delete amenityChoices[$(this).attr('data-name')]
    }
    $('.amenities h4').text(Object.keys(amenityChoices).sort().join(', '));
  });

    apiStatus();
});

function apiStatus() {
    const url = `http://0.0.0.0:5001/api/v1/status/`;
    $.get(url, (data, textStatus) => {
        if (textStatus == 'success' && data.status == 'OK') {
           $('#api_status').addClass('available');
	} else {
           $('#api_status').removeClass('available');
	}
    });
}
