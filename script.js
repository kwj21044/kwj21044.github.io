
// Animate Text on Frontpage
$(function () {
  $('.tlt').textillate({
    loop: true,
    in: {
      effect: 'tada',
      shuffle: true,
      delay: 100,
    },
    out: {
      effect: 'tada',
      delay: 100,
      shuffle: true

    }
  });

});

// jQuery Hack to get footer to bottom
$(function(){
    $(window).resize(function(){
        placeFooter();
    });
    placeFooter();
    // hide it before it's positioned
    $('#footer').css('display','inline');
});

function placeFooter() {
    var windHeight = $(window).height();
    var footerHeight = $('#footer').height();
    var offset = parseInt(windHeight) - parseInt(footerHeight);
    $('#footer').css('top',offset);
}
