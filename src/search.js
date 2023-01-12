// search bar
if ($(window).width() < 767) {
    $('.header .header--menubar').on('click', '.header--search', function(e){
      $('.overlay').toggleClass('open');
    });
  } else {
    $('.header .header--menubar').on('click', '.header--search', function(e){
      $('.header--search_open').toggleClass('open');
    });
  }

  $(document).mouseup(function (e){
    var container = $('.header--menubar .header--search'),
        container2 = $('.header--search_open form');

    if (!container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target)
        && container2.has(e.target).length === 0)
    {
      $('.header--search_open').removeClass('open');
    }
  });

  $('.header--search_open form').on('click', 'span', function() {
    if ($(this).next().val() == '') {
      $('.header--search_open').removeClass('open');
    } else {
      $(this).next().val('')
    }
  })

  $('.hero .search').on('keyup', 'input', function () {
    if ($(this).val() != '') {
      $('.hero .search').addClass('search--active')
    } else {
      $('.hero .search').removeClass('search--active')
    }
  })

  $('.hero .search').on('click', 'span', function() {
    $(this).next().val('')
    $(this).parents('.search').removeClass('search--active')
  })