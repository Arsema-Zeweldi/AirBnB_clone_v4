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
});
