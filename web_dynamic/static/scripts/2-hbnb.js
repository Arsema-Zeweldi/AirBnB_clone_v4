$(document).ready(() => {
  const amenityChoices = {}
  $('input[type="checkbox"]').change(() => {
    if ($(this).prop('checked')) {
      amenityChoices[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityChoices[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(amenityChoices).join(', '));
  });
});

    apiStatus();
});

function apiStatus() {
    const url = `http://0.0.0.0:5001/api/v1/status/`;
    $.get(url, (data, textStatus) => {
        if (textStatus === 'success' && data.status === 'OK') {
           $('#api_status').addClass('available');
	} else {
           $('#api_status').removeClass('available');
	}
    });
}
