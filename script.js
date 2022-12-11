(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('site-header');
  
    var checkScroll = function() {
  
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 60) { 
    
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();





var modal = document.getElementById("myModal");

var children = document.getElementById("child");
var test = document.getElementById("test-img");
var odi = document.getElementById("odi-img");
var t20 = document.getElementById("t20-img");
var avk = document.getElementById("avk");
var formal = document.getElementById("formal");
var foundation = document.getElementById("foundation");


var modalImg = document.getElementById('img01');


children.onclick = function(){
    modal.style.display='block';
    modalImg.src=this.src;
}
test.onclick = function(){
    modal.style.display ='block';
    modalImg.src = this.src;
}

odi.onclick = function(){
    modal.style.display ='block';
    modalImg.src = this.src;
}
t20.onclick = function(){
    modal.style.display ='block';
    modalImg.src = this.src;
}
avk.onclick = function(){
    modal.style.display ='block';
    modalImg.src = this.src;
}
formal.onclick = function(){
    modal.style.display ='block';
    modalImg.src = this.src;
}
foundation.onclick = function(){
    modal.style.display ='block';
    modalImg.src = this.src;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display='none';
}