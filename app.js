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
/* MOSTRAR Y OCULTAR SUB CATEGORIA SLIDE LEFT */

const slideActive = 'sub-menu-categorias-slide-active';
const categoriasMenuMobile = [...document.querySelectorAll('.menu-productos-dropdown')]
const subCategoriasLeft = document.querySelector('.sub-menu-categorias-slide')
const ulCatsLeft = [...document.querySelectorAll('.prods-slide-left')]

categoriasMenuMobile.forEach(cat => {
    cat.addEventListener('click', () => {        
        subCategoriasLeft.classList.add(slideActive)
        ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.remove(none)

        const slideBackArrows = [...document.querySelectorAll('.slide-back-menu-left')];
        slideBackArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                subCategoriasLeft.classList.remove(slideActive)
                ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.add(none)
            })
        })
    })
})
//CERRAR MENU DE CATEGORIAS MOBILE
cruz.addEventListener('click', () => {
    if(cruz.classList.contains(claseCruzActiva)){
        cruz.classList.remove(claseCruzActiva);
        menu.classList.remove(hamburgerInactivo)
        for(span of spans){
            span.classList.remove(hamburgerInactivo)
        }

        if(subCategoriasLeft.classList.contains(slideActive)){
            subCategoriasLeft.classList.remove(slideActive)
        }

        for(ul of ulCatsLeft){
            if(!ul.classList.contains(none)){
                ul.classList.add(none)
            }
        }
        menuCategorias.classList.remove(menuCatActive)
    }
})




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

