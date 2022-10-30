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
