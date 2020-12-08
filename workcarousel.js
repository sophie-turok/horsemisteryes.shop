
[].forEach.call(document.getElementsByClassName("siema"), (value, index) => {
  const siema = new Siema({
    selector: '#'+value.id
  });

  const total = $('#'+value.id).children().first().children().length;
  $('#'+value.parentElement.parentElement.id+' p').text((siema.currentSlide + 1) + ' / '+ total);

  $('#'+value.parentElement.parentElement.id+' .prev').click(function(event) {
    siema.prev();
    $('#'+value.parentElement.parentElement.id+' p').text((siema.currentSlide + 1) + ' / '+ total);
  });
  $('#'+value.parentElement.parentElement.id+' .next').click(function(event) {
    siema.next();
    $('#'+value.parentElement.parentElement.id+' p').text((siema.currentSlide + 1) + ' / '+ total);
  });
});