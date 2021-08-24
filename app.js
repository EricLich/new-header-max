const buttonCarrito = document.querySelector(".carrito");
const carritoMobile = document.querySelector(".carrito-drop-mobile");
//animacion de carrito mobile
buttonCarrito.addEventListener('click', () => {
    let claseActive = "carrito-drop-active"
    
    if(!carritoMobile.classList.contains(claseActive)){
        carritoMobile.classList.add(claseActive)
    }else{
        carritoMobile.classList.remove(claseActive)
    }
})
//animacion de search mobile
const buttonSearch = document.querySelector(".search-mobile-button");
buttonSearch.addEventListener('click', () =>{
    let searchMobile = document.querySelector(".search-mobile");
    let claseActive = "search-mobile-active"
    let claseActiveCarrito = "carrito-drop-active"

    let flechaGuardarBusqueda = document.querySelector(".guardar-search-mobile")
    
    if(!searchMobile.classList.contains(claseActive)){
        searchMobile.classList.add(claseActive)
        if(carritoMobile.classList.contains(claseActiveCarrito)){
            carritoMobile.classList.remove(claseActiveCarrito)
        }
    }
    flechaGuardarBusqueda.addEventListener('click', () => {
        if(searchMobile.classList.contains(claseActive)){
            searchMobile.classList.remove(claseActive)
        }
    })
})

//mostrar cruz y esconder menu hamburguesa o al reves y mostrar u ocultar menu
const menu = document.querySelector('.hamburger-menu');
const cruz = document.querySelector('.fa-times')
const spans = document.querySelectorAll('.burg')
const claseCruzActiva = "cruz-active";
const hamburgerInactivo = "hamburger-inactive";
const prodsDropdown = document.querySelectorAll('.prods-dropdown')
const none = "none"
const flex = "flex";

const menuCategorias = document.querySelector('.menu-categorias');
const menuCatActive = "menu-categorias-active"


menu.addEventListener('click', () => {
    if(!cruz.classList.contains(claseCruzActiva)){
        cruz.classList.add(claseCruzActiva);
        menu.classList.add(hamburgerInactivo);
        for(span of spans){
            span.classList.add(hamburgerInactivo)
        }
        menuCategorias.classList.add(menuCatActive)
    }
})
cruz.addEventListener('click', () => {
    const minuses = document.querySelectorAll('.fa-minus')
    const pluses = document.querySelectorAll('.fa-plus')
    if(cruz.classList.contains(claseCruzActiva)){
        cruz.classList.remove(claseCruzActiva);
        menu.classList.remove(hamburgerInactivo)
        for(span of spans){
            span.classList.remove(hamburgerInactivo)
        }

        for(drop of prodsDropdown){
            if(!drop.classList.contains(none)){
                drop.classList.add(none)
                drop.classList.remove(flex)
            }
        }

        for(plus of pluses){
            if(plus.classList.contains(none)){
                plus.classList.remove(none)
            }
        }

        for(minus of minuses){
            if(!minus.classList.contains(none)){
                minus.classList.add(none)
            }
        }
        menuCategorias.classList.remove(menuCatActive)
    }
})


//MOSTRAR Y OCULTAR DROPDOWNS DE CATEGORIAS EN MOBILE Y WEB
const showOrHide = (element) => {
    const ulDropDown = element.parentElement.children[1];
    const plus = element.children[1].children[0];
    const minus = element.children[1].children[1];

    if(ulDropDown.classList.contains(none)){
        ulDropDown.classList.remove(none);
        ulDropDown.classList.add(flex)
        plus.classList.add(none)
        minus.classList.remove(none)
    }else{
        ulDropDown.classList.remove(flex)
        ulDropDown.classList.add(none)
        plus.classList.remove(none)
        minus.classList.add(none)
    }
}

//MOSTRAR Y OCULTAR BARRA DE CATEGORIAS EN WEB Y MOSTRAR SUB CATEGORIAS

////////// CLASES CAT PRINCIPAL
const categoriasWeb = document.querySelector('.categorias-web');
const categoriasWebActive = "menu-categorias-active-web";
const hamburgerWebInactive = "hamburger-web-inactive"
const hamburguesaWeb = categoriasWeb.children[0];
const cruzWeb = categoriasWeb.children[1];
const cruzWebActive = document.querySelector('.cruz-menu-web-active');

const sidebarMenuWeb = document.querySelector('.sidebar-menu-web')
const sidebarActive = 'sidebar-menu-web-active'
const columnaSide = 'columna-side'

/////////// CLASES CAT SECUNDARIA 
const categorias = [...document.querySelectorAll('.apertura-cat-principal')];
const catsSecundarias = [...document.querySelectorAll('.cats-secundarias-sidebar')]
const catsSidebar = [...document.querySelectorAll('.categorias-sidebar')]
const catActual = 'cat-actual'
const flexComponentesPerifericos = 'flex-componentes-perifericos';

categorias.forEach(cat => {
    cat.addEventListener('mouseover', () => {
        agregarNone() // le agrega la clase none si algun submenu esta abierto antes de abrir el que se quiera abrir 
        if(catsSecundarias[categorias.indexOf(cat)].classList.contains(none)){
            catsSecundarias[categorias.indexOf(cat)].classList.remove(none)
            cat.children[0].classList.add(catActual)
        }
        if(catsSecundarias[categorias.indexOf(cat)].children[0].classList.contains(none)){
            catsSecundarias[categorias.indexOf(cat)].classList.add(flexComponentesPerifericos)
            catsSecundarias[categorias.indexOf(cat)].children[0].classList.remove(none)
            catsSecundarias[categorias.indexOf(cat)].children[1].classList.remove(none)
        }  

    })
})

function agregarNone(){
    categorias.forEach(cat => {
        
        if(!catsSecundarias[categorias.indexOf(cat)].classList.contains(none)){
            catsSecundarias[categorias.indexOf(cat)].classList.add(none)
            cat.children[0].classList.remove(catActual)
        }
        if(catsSecundarias[categorias.indexOf(cat)].children[0]){
            if(!catsSecundarias[categorias.indexOf(cat)].children[0].classList.contains(none)){
                catsSecundarias[categorias.indexOf(cat)].children[0].classList.add(none)
                if(catsSecundarias[categorias.indexOf(cat)].children[1]){
                    catsSecundarias[categorias.indexOf(cat)].children[1].classList.add(none)
                }
                catsSecundarias[categorias.indexOf(cat)].classList.remove(flexComponentesPerifericos)
                cat.children[0].classList.remove(catActual)
            }
        }
    })
}


const opacityDiv = document.querySelector('.opacidad-menu')
hamburguesaWeb.addEventListener('click', () => {
    opacityDiv.classList.remove(none);
    sidebarMenuWeb.classList.add(sidebarActive)
    hamburguesaWeb.classList.add(hamburgerWebInactive)
    cruzWeb.classList.remove(none)
    
    opacityDiv.addEventListener('mouseover', () => {
        setTimeout(() => {
            agregarNone()
        }, 1000);
    })
    cruzWeb.addEventListener('click', () => {
        sidebarMenuWeb.classList.remove(sidebarActive)
        hamburguesaWeb.classList.remove(hamburgerWebInactive)
        cruzWeb.classList.add(none)
        opacityDiv.classList.add(none)
    })
})

