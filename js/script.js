const modalBtn = $('.present__btn');
console.log('modalBtn: ', modalBtn);
const closeBtn = $('.modal-order__close');
const burgerBtn = $('.header__burger');
const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalBtn.on('click', function() {
  $('.modal-order').show(500);
})

closeBtn.on('click', function() {
  $('.modal-order').hide(500);
})

modalOrderInput.focus(function() {
  modalOrderTitle
  .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
});

modalOrderInput.blur(function() {
  modalOrderTitle.text('Заполните форму');
});

modalOrderInput.keydown(function(event) {
  console.log(event.type)
});
modalOrderInput.keypress(function(event) {
  console.log(event.type)
});
modalOrderInput.keyup(function(event) {
  console.log(event.type)
});

const modalOrderWrapper = $('.modal-order__wrapper');

modalOrderWrapper.mouseup(function(event) {
  console.log(event.type)
});
modalOrderWrapper.mousemove(function(event) {
  console.log(event.type)
});
modalOrderWrapper.mouseover(function(event) {
  console.log(event.type)
});
modalOrderWrapper.mouseout(function(event) {
  console.log(event.type)
});
// burgerBtn.click(function() {
//   $('.').show(500);
// })

$('.what-building__list').on('click', '.what-building__item', function() {
  console.log($(this))
})

const div = $(`<div>`);

div.html(`
  <div class='hello-world'>
    <h1 class='title'>Привет мир</h1>
  </div>
`)

$('body').append(div)

$('.modal-order__form').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text(`Спасибо заявка принята, номер заявки ${data.id}`)
      $('.modal-order__form').slideUp(300);
    },
    error(){
      modalOrderTitle.text(`Чтото пошло не так, попробуйте позже`)
    }
  })
})

burgerBtn.on('click', function() {
  $('.navigation').animate({
    left: 0,
  },500, function(){
    $('.navigation__close').animate({
      opacity: 1,
    }, 300, 'swing')
  })
})

$(document).mouseup(function(e) {
  console.log(e.target.closest('.navigation__close'))
  const div = $('.navigation');
  const closeBtn = $('.navigation__close');
  if (!div.is(e.target) && div.has(e.target).length === 0 || e.target.closest('.navigation__close')) {
    $('.navigation').animate({
    left: -400,
  },500);
  }
})

