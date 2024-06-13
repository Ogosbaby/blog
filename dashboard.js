// add hovered class to selected list item
let list = document.querySelectorAll('.sidebar li')
function activeLink(params) {
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
list.forEach(item => item.addEventListener("mouseover", activeLink))
let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");
let logo = document.querySelector(".logo")
toggle.onclick = function toggle(){
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
}


