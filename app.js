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
    
    if(!searchMobile.classList.contains(claseActive)){
        searchMobile.classList.add(claseActive);
        main.classList.add(mainBlurred)
        if(carritoMobile.classList.contains(claseActiveCarrito)){
            carritoMobile.classList.remove(claseActiveCarrito)
        }
    }
    main.addEventListener('click', () => {
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

const menuCategorias = document.querySelector('.menu-categorias');
const menuCatActive = "menu-categorias-active"

menu.addEventListener('click', () => {
    if(!cruz.classList.contains(claseCruzActiva)){
        cruz.classList.add(claseCruzActiva);
        menu.classList.add(hamburgerInactivo);
        console.log(spans)
        for(span of spans){
            span.classList.add(hamburgerInactivo)
        }
        menuCategorias.classList.add(menuCatActive)
    }
})
cruz.addEventListener('click', () => {
    if(cruz.classList.contains(claseCruzActiva)){
        cruz.classList.remove(claseCruzActiva);
        menu.classList.remove(hamburgerInactivo)
        for(span of spans){
            span.classList.remove(hamburgerInactivo)
        }
        menuCategorias.classList.remove(menuCatActive)
    }
})



