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

function fetchPlaces() {
    const fetch_url = `http://0.0.0.0:5001/api/v1/places_search/`;
    $.ajax({
        url: fetch_url,
	type: 'POST',
	headers: { 'Content-Type': 'application/json'},
	data: JSON.stringify({}),
	success: function (response) {
           for (const res of response) {
              const article = [
		 '<article>',
                     '<div class="title_box">',
		         `<h2>${r.name}</h2>`,
		         `<div class="price_by_night">$${r.price_by_night}</div>`,
		     '</div>'
		     '<div class="information">',
		         `<div class="max_guest">${r.max_guest} Guest(s)</div>`,
		         `<div class="number_rooms">${r.number_rooms} Bedroom(s)</div>`,
		         `<div class="number_bathrooms">${r.number_bathrooms} Bathroom(s)</div>`,
		     '</div>'
		     '<div class="description">',
		         `${r.description}`,
		     '</div>'
		 '</article>'];
                 $('SECTION.places').append(article.join(''));
	   }
	},
    });
}
