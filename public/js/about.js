

window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

TweenMax.from(".footer",3,{
    scrollTrigger:{
        trigger:".footer",
        toggleActions:"restart none none none",
    },
    opacity:0,
    x:-30,
    ease:Power3.easeInOut
},0.3)
