
let femaleImg=document.getElementById('female');
const headline1=document.getElementById('headline1');
const headline2=document.getElementById('headline2');
const logo=document.getElementById('logo');
const sub=document.getElementById('sub');
const learn=document.getElementById('learn');
const replay=document.getElementById('replay');


const rest = () => location.reload();
replay.addEventListener('click',rest)





setTimeout(function() {
    headline1.style.display='block';
    headline1.classList.add('slide-in');

  }, 2000); 
  setTimeout(function() {
    femaleImg.style.opacity='1';
  }, 1000); 
  
  setTimeout(function(){
    h1=true;
    headline2.classList.add('slide-out');
    femaleImg.style.opacity='0';
  },3000);

  setTimeout(function(){
headline2.classList.add('head2-in');
headline2.style.display='block';
headline1.style.opacity='0';
  },4000);

  setTimeout(function(){
    sub.style.opacity='1';
      },4500);

      setTimeout(function(){
        learn.style.opacity='1';
          },5000);
          
      setTimeout(function(){
        logo.classList.add('slide-in');
        logo.style.display='block';
      replay.style.opacity='1';
          },5500)

        