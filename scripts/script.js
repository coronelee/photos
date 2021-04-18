let contentSite_header_button_menu_burger = document.querySelector('.contentSite_header_button_menu_burger');
let backmenu = document.querySelector('.contentSite_header_button_menu_burger_back_menu');
let burger = false;

contentSite_header_button_menu_burger.onclick = function(){
    if(burger == false){
        backmenu.style.opacity = '1';
        backmenu.style.visibility = 'visible';
        backmenu.style.top = '0'
        burger = true;  
    } 
    else if(burger == true){
        backmenu.style.opacity = '0';
        backmenu.style.visibility = 'collapse';
        backmenu.style.top = '10px'
        burger = false; 
    }
}
let contentSite_header_button_menu_burger_back_menu_container = document.querySelector('.contentSite_header_button_menu_burger_back_menu_container');

contentSite_header_button_menu_burger_back_menu_container.onclick = function(){
    if(burger == true){
        backmenu.style.opacity = '0';
        backmenu.style.visibility = 'collapse';
        backmenu.style.top = '10px'
        burger = false; 
    }
}