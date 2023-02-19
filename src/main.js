let menus = document.getElementById('menus')
let submenus = document.getElementById('submenus')
let inicio = document.getElementById('inicio')
let reserva = document.getElementById('reserva')
submenus.classList.add('hidden')

menus.addEventListener('mouseover', () => {
    submenus.classList.remove('hidden')
})

inicio.addEventListener('mouseover', () => {
    submenus.classList.add('hidden')
})

reserva.addEventListener('mouseover', () => {
    submenus.classList.add('hidden')
})

submenus.addEventListener('mouseout', () => {
    submenus.classList.add('hidden')
})






let logo = document.getElementById('logo');
logo.setAttribute("src", 'img/img_index/logo.png');

let nav = document.getElementById("nav")
let menu = document.getElementById("menu")

let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")

function mostrasScroll() {
    let scrolltop = document.documentElement.scrollTop
    let alturaAnimado = nav.offsetTop
    if (alturaAnimado + 150 < scrolltop) {
        nav.classList.add('bg-orange-50')
        nav.classList.add('shadow-xl')
        nav.classList.add('transition')
        nav.classList.add('duration-400')
        menu.classList.add('text-cyan-800')
        menu.classList.remove('text-orange-100')
        nav.classList.add('h-24')
        nav.classList.add('pb-7')
        logo.setAttribute("src", 'img/img_index/logo-zyan.png');

        opt1.classList.add('bg-orange-50')   
        opt2.classList.add('bg-orange-50')
        opt3.classList.add('bg-orange-50') 
    }
}

function ocultarScroll() {
    let scrolltop = document.documentElement.scrollTop
    let alturaAnimado = nav.offsetTop
    if (alturaAnimado < 1) {
        nav.classList.remove('bg-orange-50')
        nav.classList.remove('shadow-xl')
        menu.classList.remove('text-black')
        menu.classList.remove('text-cyan-800')
        menu.classList.add('text-orange-100')
        logo.setAttribute("src", 'img/img_index/logo.png');

        opt1.classList.remove('bg-orange-50')   
        opt2.classList.remove('bg-orange-50')
        opt3.classList.remove('bg-orange-50')
    }
}


window.addEventListener('scroll', ocultarScroll)
window.addEventListener('scroll', mostrasScroll)