$('input[name="phone"]').mask('+7 (000) 000-00-00', {placeholder: '+7 (___) ___-__-__'});

$('body').on('click', '.more', (e) => {
    $(e.currentTarget).parent().next().slideToggle();
});

$('body').on('click', '.question', (e) => {
    const $answer = $(e.currentTarget).parent().find('.question__body');
    $answer.slideToggle(300, () => {
        $answer.toggleClass('active');
    });
});

$('.slider').slick({
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 1023,
            settings: {
              slidesToShow: 1,
            }
          },
    ]
});

$('.works-slider').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false
});
