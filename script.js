$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
        $('.card').show('2000')
        }
        else{
            $('.card').not('.' + value).hide('2000')
            $('.card').filter('.' + value).show('2000')
        }
    })
});

$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('nav ul').toggleClass('active');
    });
});
//Add active to button
$('.filter-item').click(function(){
    $(this).addClass("active-filter").siblings().removeClass('active-filter');
});

let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('#dropdown-list')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
