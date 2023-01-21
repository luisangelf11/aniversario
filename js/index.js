const btn = document.getElementById("card-btn"),
      info = document.getElementById("info"),
      btn_two = document.getElementById('card-btn-2'),
      info_two = document.getElementById('info-2');

function OpenAndCloseCardOne(){
    if(info.classList.contains('none')) info.classList.remove('none');
    else info.classList.add('none')
}  

function OpenAndCloseCardTwo(){
    if(info_two.classList.contains('none')) info_two.classList.remove('none');
    else info_two.classList.add('none')
}  

btn.addEventListener("click", OpenAndCloseCardOne);
btn_two.addEventListener("click", OpenAndCloseCardTwo);