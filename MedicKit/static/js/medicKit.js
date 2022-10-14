// navbar toggle
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});

navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// transition and animation stop
let resizeTimer;
window.addEventListener('resize', ()=>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
        document.body.classList.remove('resize-animation-stopper');
    }, 400)
})

// Slideshow 
$(function(){
    $('.fadein div:gt(0)').hide();
    setInterval(function(){
        $('.fadein :first-child').fadeOut().next('div').fadeIn().appendTo('.fadein');
    }, 3000);
});

// .end()--following appendTo for it to stop the slideshow