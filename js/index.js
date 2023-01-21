const btn = document.getElementById("card-btn"),
      info = document.getElementById("info"),
      btn_two = document.getElementById('card-btn-2'),
      info_two = document.getElementById('info-2'),
      btn_three = document.getElementById('card-btn-3'),
      info_three = document.getElementById('info-3');

function OpenAndCloseCardOne(){
    if(info.classList.contains('none')) info.classList.remove('none');
    else info.classList.add('none')
}  

function OpenAndCloseCardTwo(){
    if(info_two.classList.contains('none')) info_two.classList.remove('none');
    else info_two.classList.add('none')
}  

function OpenAndCloseCardThree(){
    if(info_three.classList.contains('none')) info_three.classList.remove('none');
    else info_three.classList.add('none')
}  

btn.addEventListener("click", OpenAndCloseCardOne);
btn_two.addEventListener("click", OpenAndCloseCardTwo);
btn_three.addEventListener("click", OpenAndCloseCardThree);