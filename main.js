let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let ez = document.querySelector('.ez');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    ez.style.fontSize = value + 'px';
    if(scrollY >= 67){
        ez.style.fontSize = 67 + 'px';
        ez.style.position = 'fixed';
        if(scrollY >= 478){
            ez.style.display = 'none';
        }else{
            ez.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }
    } 
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}