!function(){var e,t,n=document.querySelector(".burguer"),l=document.querySelector(".linesE"),r=document.getElementById("festejo");e=0,t=setInterval(function(){700==e?clearInterval(t):(e++,r.style.left=e+"px")},4),n.addEventListener("click",function(){n.classList.toggle("transform"),l.classList.toggle("linesBurguer")})}(),$(document).ready(function(){$("#pagepiling").pagepiling()});