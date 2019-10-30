(function(){
  var burguer   = document.querySelector('.burguer');
  var lineEar   = document.querySelector('.linesE');
  var elem      = document.getElementById('festejo');

  setTimeout(function(){
    var preload = document.querySelector('.preload');
    // preload.classList.add('preload_close');
    preload.style.opacity = '0';
    preload.style.transition = 'all .5s';
    setTimeout(function(){
      preload.style.display = 'none';
    }, 180);
  }, 6000);
  
  function anchorMobile(){
    var nameMenu = document.getElementById('myMenu');
    nameMenu.addEventListener('click', function(){
      burguer.classList.remove('transform');
      myMenu.classList.remove('hi_mobile');
      lineEar.style.opacity = lineEar.style.opacity === '1' ? '' : '1';;
    });
    burguer.addEventListener('click', function(){
      if (window.matchMedia("(max-width: 600px)").matches) {
        burguer.classList.toggle('transform');
        lineEar.style.opacity = lineEar.style.opacity === '0' ? '' : '0';;
        myMenu.classList.toggle('hi_mobile');
      }
    });
  }
  anchorMobile()

  

  // function burgerContact(){
  //   var burger = document.getElementsByClassName('hamburguesa');

  //   // burger.addEventListener("mouseenter", function() {
  //   //   alert('gdfgd')
  //   // })
    
  //   for (var i=0; i< burger.length; i++) {
  //     var burgerChange = burger[i].firstChild;
  //     burgerChange.addEventListener("mouseenter",function() {
  //       image = this;
  //       image.style.transform = 'rotateY(180deg)';
  //       image.style.transition = 'all .5s';
  //       setTimeout(function(){
  //         image.setAttribute("src", './img/caja.jpg');
  //         image.style.transition = 'opacity  1s';
  //       }, 500);
        
  //     })
  //   }
  // }
  // burgerContact()

})();
$(document).ready(function() {
	$('#pagepiling').pagepiling({
      sectionsColor: ['#FCFCFC', '#FCFCFC', '#FCFCFC', '#FCFCFC', '#FCFCFC'],	    
      direction: 'vertical',
      anchors: ['home','perfil','habilidades','portafolio','contacto'],
      menu: '#myMenu',
      scrollingSpeed: 700,
      navigation: {
          'textColor': 'red',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': []
      },
      touchSensitivity: 5,
      keyboardScrolling: true,
      animateAnchor: false,
		//events
		onLeave: function(index, nextIndex, direction){
      var habilidades = document.getElementsByClassName('habilidades__bar');
            
      Array.prototype.forEach.call(habilidades, function(el) {
        if((index == 1 || index == 2) && nextIndex == 3){
          el.classList.add('animateBar');
        }
        else if(index == 2 && direction == 'down'){
          el.classList.add('animateBar');
        }
        else if(index == 3 && direction == 'up'){
          el.classList.remove('animateBar');
          // console.log('jo')
        } 
        else if(index == 3 && direction == 'down'){
          el.classList.remove('animateBar');
        }        
        else if((index == 5 || index == 4) && nextIndex == 3){
          el.classList.add('animateBar');
        }
      });      
    },
		// afterLoad: function(anchorLink, index){}
		// afterRender: function(){},
	});
});

// $('#lista').click(function(){
//   $('.list').text('loading . . .');

//   $.ajax({
//     url: 'https://api.meetup.com/2/cities',
//     success: function(data) {
//       console.log(data);
//       $('.list').text(JSON.stringify(data))
//     },
//     dataType: 'jsonp',
//     error: function() {
//           console.log("No se ha podido obtener la información");
//       }
//   });
// });