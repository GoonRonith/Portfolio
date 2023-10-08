function menuOpen(){
    let res_menu=document.getElementById('res-menu')
    res_menu.style.display='flex'
    let cross_div=document.getElementById('cross')
    cross_div.style.display='block'
    let menu_icon=document.getElementById('menu-icon')
    menu_icon.style.display='none'

}


function menuClose(){
    let res_menu=document.getElementById('res-menu')
    res_menu.style.display='none'
    let menu_icon=document.getElementById('menu-icon')
    menu_icon.style.display='block'
    let cross_div=document.getElementById('cross')
    cross_div.style.display='none'
}

function formOpen(){
    let form=document.getElementById('form-div')
    form.style.display='flex';
   
}

function formClose(){
    let form=document.getElementById('form-div')
    form.style.display='none';
    
}