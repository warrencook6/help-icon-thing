(function() {
  var open;

  open = true;

  $('.tear').click(function() {
    if (open) {
      $('.tear').addClass('active');
      $('.message').addClass('active');
      $('.tear').html("<span><i class='fa fa-close'></i></span>");
      return open = !open;
    } else {
      $('.tear').removeClass('active green');
      $('.message').removeClass('active');
      $('.message').val('');
      $('.tear').html("<span><i class='fa fa-life-ring'></i></span>");
      return open = !open;
    }
  });

  $('input').on('input', function(e) {
    var value;
    value = $("input").val();
    if (value.length >= 2) {
      $('.tear').addClass('green');
      $('.tear').removeClass('active');
      return $('.tear').html("<span><i class='fa fa-check'></i></span>");
    } else {
      $('.tear').removeClass('green');
      $('.tear').addClass('active');
      return $('.tear').html("<span><i class='fa fa-close'></i></span>");
    }
  });

}).call(this);