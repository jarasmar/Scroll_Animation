window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var resizable =  document.getElementById("resizable");
  var slide0 =  document.getElementById("slide-0");
  var slide1 =  document.getElementById("slide-1");
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
   slide0.classList.add('hidden');
   slide1.classList.remove('hidden');
  } else if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
   slide1.classList.add('hidden');
   slide0.classList.remove('hidden');
   resizable.style.width = "500px";
   resizable.style.height = "500px";
   resizable.style.backgroundSize = "500px";
   resizable.style.marginTop = "-250px";
   resizable.style.marginLeft = "-250px";
  } else if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
   resizable.style.width = "400px";
   resizable.style.height = "400px";
   resizable.style.backgroundSize = "400px";
   resizable.style.marginTop = "-200px";
   resizable.style.marginLeft = "-200px";
  } else if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    resizable.style.width = "300px";
    resizable.style.height = "300px";
    resizable.style.backgroundSize = "300px";
    resizable.style.marginTop = "-150px";
    resizable.style.marginLeft = "-150px";
  } else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    resizable.style.width = "200px";
    resizable.style.height = "200px";
    resizable.style.backgroundSize = "200px";
    resizable.style.marginTop = "-100px";
    resizable.style.marginLeft = "-100px";
  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    resizable.style.width = "100px";
    resizable.style.height = "100px";
    resizable.style.backgroundSize = "100px";
    resizable.style.marginTop = "-50px";
    resizable.style.marginLeft = "-50px";
  } else {
    resizable.style.width = "50px";
    resizable.style.height = "50px";
    resizable.style.backgroundSize = "50px";
    resizable.style.marginTop = "-25px";
    resizable.style.marginLeft = "-25px";
  }
}