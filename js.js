width = window.screen.width;
height = window.screen.height;

function init(){
	d1.style.left = width/2-300 +"px"
	d1.style.top = height/2-300 +"px"
	d1.style.borderRadius = 300+"px"
	
	d2.style.left = width/2-150 +"px"
	d2.style.top = height/2-150 +"px"
	d2.style.borderRadius = 150+"px"
	
	d3.style.left = width/2-50 +"px"
	d3.style.top = height/2-50 +"px"
	d3.style.borderRadius = 50+"px"
	
	d4.style.left = width/2-500 +"px"
	d4.style.top = height/2-500 +"px"
	d4.style.borderRadius = 500+"px"
	

	//move()
}


function remove(elem) {
	return elem.parentNode ? elem.parentNode.removeChild(elem) : elem;
}

function move() {
  var i=0; // начальное значение

  function frame() { // функция для отрисовки
    i++
    if (i <360) {
		d1.style.webkitTransform = "rotate("+i+"deg)";
		d2.style.webkitTransform = "rotate("+i+4+"deg)";
		d3.style.webkitTransform = "rotate("+ -i/0.1 +"deg)";
		d4.style.webkitTransform = "rotate("+i/2+"deg)";
    }
	if (i >360) {
		//clearInterval(timer); // завершить анимацию
		i=0;
    }
  }
  var timer = setInterval(frame, 35) // рисовать каждые 10мс
}