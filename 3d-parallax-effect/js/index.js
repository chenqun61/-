'use strict';

var el = document.querySelector('#avatar');

el.addEventListener('mousemove', function (e) {
  // console.log(el.getBoundingClientRect());
  var thisPX = el.getBoundingClientRect().left;
  var thisPY = el.getBoundingClientRect().top;
  var boxWidth = el.getBoundingClientRect().width;
  var boxHeight = el.getBoundingClientRect().height;
  var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
  console.log('thisPY----------'+thisPY)
  console.log(scrollTop)

  var mouseX = e.pageX - thisPX;
  var mouseY = e.pageY - scrollTop - thisPY;
  var X = undefined;
  var Y = undefined;

  X = mouseX - boxWidth / 2;
  Y = boxHeight / 2 - mouseY;

  el.style.transform = 'perspective(300px) rotateY(' + X / 10 + 'deg) rotateX(' + Y / 10 + 'deg)';
  el.style.boxShadow = -X / 20 + 'px ' + Y / 20 + 'px 50px rgba(0, 0, 0, 0.3)';
});

el.addEventListener('mouseleave', function () {
  el.style.transform = 'perspective(300px) rotateY(0deg) rotateX(0deg)';
  el.style.boxShadow = '';
});