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

    let mainBlurred = "main-blurred"
    let main = document.querySelector(".main")
    let flechaGuardarBusqueda = document.querySelector(".guardar-search-mobile")
    
    if(!searchMobile.classList.contains(claseActive)){
        searchMobile.classList.add(claseActive);
        main.classList.add(mainBlurred)
        if(carritoMobile.classList.contains(claseActiveCarrito)){
            carritoMobile.classList.remove(claseActiveCarrito)
        }
    }
    flechaGuardarBusqueda.addEventListener('click', () => {
        if(searchMobile.classList.contains(claseActive)){
            searchMobile.classList.remove(claseActive)
        }
        main.classList.remove(mainBlurred)
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


//MOSTRAR Y OCULTAR DROPDOWNS DE CATEGORIAS
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
