let btn = document.querySelector("#btn");
let num = document.querySelector("#num");
let hui = 0
btn.addEventListener('click', function(){
    const isActive = btn.classList.contains('active');
    if(isActive){
        btn.classList.remove('active')
        btn.classList.add('bluebutton')
        hui++
        num.textContent = hui
    }
    else{
        btn.classList.add('active')
        btn.classList.remove('bluebutton')
        hui++
        num.textContent = hui
    }
})