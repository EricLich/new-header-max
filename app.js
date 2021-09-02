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
            suggBoxMobile.innerHTML = ''
            inputMobile.value = ''
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
const unscrollable = 'unscrollable'

const menuCategorias = document.querySelector('.menu-categorias');
const menuCatActive = "menu-categorias-active"


menu.addEventListener('click', () => {
    if(!cruz.classList.contains(claseCruzActiva)){
        document.body.classList.add(unscrollable)
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
const sideUlActive = 'prods-slide-left-active';
const categoriasMenuMobile = [...document.querySelectorAll('.menu-productos-dropdown')]
const subCategoriasLeft = document.querySelector('.sub-menu-categorias-slide')
const ulCatsLeft = [...document.querySelectorAll('.prods-slide-left')]

categoriasMenuMobile.forEach(cat => {
    cat.addEventListener('click', () => {        
        subCategoriasLeft.classList.add(slideActive)
        ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.add(sideUlActive)
        ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.remove(none)

        const slideBackArrows = [...document.querySelectorAll('.slide-back-menu-left')];
        slideBackArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.remove(sideUlActive)
                subCategoriasLeft.classList.remove(slideActive)
                setTimeout(() => {                
                    ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.add(none)
                }, 300);
            })
        })
    })
})
//CERRAR MENU DE CATEGORIAS MOBILE
cruz.addEventListener('click', () => {
    if(cruz.classList.contains(claseCruzActiva)){
        document.body.classList.remove(unscrollable)

        cruz.classList.remove(claseCruzActiva);
        menu.classList.remove(hamburgerInactivo)
        for(span of spans){
            span.classList.remove(hamburgerInactivo)
        }

        if(subCategoriasLeft.classList.contains(slideActive)){
            subCategoriasLeft.classList.remove(slideActive)
        }

        for(ul of ulCatsLeft){
            if(ul.classList.contains(sideUlActive)){
                ul.classList.remove(sideUlActive)
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
    document.body.classList.add(unscrollable)
    opacityDiv.classList.remove(none);
    sidebarMenuWeb.classList.add(sidebarActive)
    hamburguesaWeb.classList.add(hamburgerWebInactive)
    cruzWeb.classList.remove(none)
    
    opacityDiv.addEventListener('mouseover', () => {
        document.body.classList.remove(unscrollable)
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

//BUSCADOR
function fBuscadorMobile(){
    var B = document.querySelector(".search-input-mobile").value.trim();
    window.location = "https://www.maximus.com.ar/ARTICULOS/SCA_ID=-1/CAT_ID=-1/SCAT_ID=-1/m=-1/OR=1/BUS=" + B + ";/maximus.aspx" + "?s=" + B;
}
function fBuscadorWeb(){
    var B = document.querySelector(".search-input").value.trim();
    window.location = "https://www.maximus.com.ar/ARTICULOS/SCA_ID=-1/CAT_ID=-1/SCAT_ID=-1/m=-1/OR=1/BUS=" + B + ";/maximus.aspx" + "?s=" + B;
}

//ENTER PARA BUSCADOR WEB
document.querySelector(".search-input")
    .addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        fBuscadorWeb();
    }
});
document.querySelector(".search-input-mobile")
    .addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
        fBuscadorMobile();
    }
});

/* AUTOCOMPLETADO SEARCH WEB */
const inputWeb = document.querySelector('.search-input');
const suggBoxWeb = document.querySelector('.auto-complete-web')
let busquedas = [];
let suggestions = [];

inputWeb.addEventListener('input', async () => {
    let userData = inputWeb.value;
    let mayoresCatsRepetidas = [];
    //fetch de los datos del server
    if(suggestions.length == 0){
        suggestions = await fetch('http://localhost:3000/productos')
                                .then(res => res.json())
                                .catch(err => console.log(err))
    }

    //si las sugerencias y lo que se ingreso no estan vacios
    nombresCat = []
    if(suggestions && userData.length > 0){
        busquedas = suggestions.filter(data => {
            return data.nomProd.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });
        suggestions = busquedas;
        //tomo todas las categorias
        busquedas.forEach(sugg => {            
            mayoresCatsRepetidas.push(sugg.cat);
        })
        //ordeno las categorias alfabeticamente y acomodo el array segun cantidad de coincidencias
        mayoresCatsRepetidas.sort((a, b) => a.localeCompare(b))

        //remuevo las categorias repetidas
        mayoresCatsRepetidas = mayoresCatsRepetidas.filter((cat, index) => cat != mayoresCatsRepetidas[index - 1]).splice(0, 3)
        
        //creo el html con las categorias limitadas
        busquedas = busquedas.splice(0, 6).map((data) => {
            return data =  `<div class="auto-search">
                                <a href="https://www.maximus.com.ar/DETALLE/${data.nomProd.split(' ').join('-')}/ITEM_ID=${data.ID}/maximus.aspx" class="auto-link"><strong>${data.nomProd}</strong></a>                                    
                            </div>`
        }).join('')

        //creo el html para las 3 categorias
        mayoresCatsRepetidas = mayoresCatsRepetidas.map(cat => {
            return cat = `<div class="auto-search">
                              <a href="https://www.maximus.com.ar/" class="auto-link sugg-cat-mobile">Busca más productos en<strong>&nbsp;${cat}</strong></a>                                    
                          </div>`
        }).join('')

        //creo el html de las sugerencias mas el html de las categorias a mostrar
        let totalHTML = busquedas + ' <hr class="thin-line container"> ' + mayoresCatsRepetidas

        if(busquedas.length > 0){
            suggBoxWeb.innerHTML = totalHTML;
            let inputInitValue = inputWeb.value;
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    moveThroughSuggestions(event.key, 0, inputInitValue)
                }else if(event.key === "Escape"){
                    suggBoxWeb.innerHTML = ''
                }
            }
        }else{
            suggBoxWeb.innerHTML = '<div class="auto-search">No se encontraron coincidencias</div>';
        }
    }else{
        checkEmpty(busquedas, inputWeb, suggBoxWeb)
    }
})

/* AUTOCOMPLETADO CON RELLENO DE INPUT Y FLECHITAS */
function moveThroughSuggestions(keyPressed, pos, inputInitValue){
    let autoSearchs = document.querySelectorAll('.auto-search');
    if(keyPressed == 'ArrowDown'){
        if(pos == -1){
            pos = 0;
            autoSearchs[pos].classList.add('auto-search-selected')
            inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(autoSearchs[pos].children[0].innerHTML.indexOf('>') + 1, autoSearchs[pos].children[0].innerHTML.indexOf('/') - 1) 
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    autoSearchs[pos].classList.remove('auto-search-selected')
                    pos = event.key == 'ArrowUp' ? pos -= 1 : pos;
                    moveThroughSuggestions(event.key, pos, inputInitValue)        
                }
            }
            
        }else if(pos == autoSearchs.length){
            pos = 0;
            inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(autoSearchs[pos].children[0].innerHTML.indexOf('>') + 1, autoSearchs[pos].children[0].innerHTML.indexOf('/') - 1) 
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    autoSearchs[pos].classList.remove('auto-search-selected')
                    pos = event.key == 'ArrowUp' ? pos -= 1 : pos;
                    moveThroughSuggestions(event.key, pos, inputInitValue)        
                }
            }
        }else if(pos < autoSearchs.length){
            autoSearchs[pos].classList.add('auto-search-selected')
            inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(autoSearchs[pos].children[0].innerHTML.indexOf('>') + 1, autoSearchs[pos].children[0].innerHTML.indexOf('/') - 1) 
            pos += 1;
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){ 
                    autoSearchs[pos - 1].classList.remove('auto-search-selected')
                    pos = event.key == 'ArrowUp' ? pos -= 1 : pos;
                    moveThroughSuggestions(event.key, pos, inputInitValue)        
                }
            }
        }
    }else if(keyPressed = 'ArrowUp'){
        if(pos == -1){
            pos = autoSearchs.length - 1
            autoSearchs[pos].classList.add('auto-search-selected')
            inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(autoSearchs[pos].children[0].innerHTML.indexOf('>') + 1, autoSearchs[pos].children[0].innerHTML.indexOf('/') - 1) 
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    autoSearchs[pos].classList.remove('auto-search-selected') 
                    pos = event.key == 'ArrowDown' ? pos += 1 : pos;                   
                    moveThroughSuggestions(event.key, pos, inputInitValue)        
                }
            }
        }else if(pos > 0){
            pos -= 1;
            autoSearchs[pos].classList.add('auto-search-selected')
            inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(autoSearchs[pos].children[0].innerHTML.indexOf('>') + 1, autoSearchs[pos].children[0].innerHTML.indexOf('/') - 1) 
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    autoSearchs[pos].classList.remove('auto-search-selected')
                    pos = event.key == 'ArrowDown' ? pos += 1 : pos;                   
                    moveThroughSuggestions(event.key, pos, inputInitValue)        
                }
            }
        }else if(pos == autoSearchs.length - 1){
            pos = 0;
            autoSearchs[pos].classList.add('auto-search-selected')
            inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(autoSearchs[pos].children[0].innerHTML.indexOf('>') + 1, autoSearchs[pos].children[0].innerHTML.indexOf('/') - 1) 
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    autoSearchs[pos].classList.remove('auto-search-selected')
                    pos = event.key == 'ArrowDown' ? pos += 1 : pos;                   
                    moveThroughSuggestions(event.key, pos, inputInitValue)        
                }
            }
        }else if(pos == 0){
            inputWeb.value = inputInitValue
            document.onkeydown = () => {
                if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
                    pos = event.key == 'ArrowDown' ? pos += 1 : pos;                          
                    moveThroughSuggestions(event.key, pos - 1, inputInitValue) 
                }
            }
        }
    }
}

function checkEmpty(lista, input, suggBox){
    if(input.value == "" || busquedas.value == ""){
        suggBox.innerHTML = ''
        lista = []
    }
}
/* AUTOCOMPLETADO SEARCH MOBILE */
const inputMobile = document.querySelector('.search-input-mobile');
const suggBoxMobile = document.querySelector('.auto-complete-mobile')

inputMobile.addEventListener('input', async (e) => {
    let userData = inputMobile.value;
    let mayoresCatsRepetidas = [];
    //fetch de los datos del server
    if(suggestions.length == 0){
        suggestions = await fetch('http://localhost:3000/productos')
                                .then(res => res.json())
                                .catch(err => console.log(err))
    }
    nombresCat = []
    if(suggestions && userData.length > 0){
        busquedas = suggestions.filter(data => {
            return data.nomProd.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });
        suggestions = busquedas;
        //tomo todas las categorias
        busquedas.forEach(sugg => {            
            mayoresCatsRepetidas.push(sugg.cat);
        })
        //ordeno las categorias alfabeticamente y acomodo el array segun cantidad de coincidencias
        mayoresCatsRepetidas.sort((a, b) => a.localeCompare(b))

        //remuevo las categorias repetidas
        mayoresCatsRepetidas = mayoresCatsRepetidas.filter((cat, index) => cat != mayoresCatsRepetidas[index - 1]).splice(0, 2)
        
        //creo el html con las categorias limitadas
        busquedas = busquedas.splice(0, 3).map((data) => {
            return data =  `<div class="auto-search">
                                <a href="https://www.maximus.com.ar/DETALLE/${data.nomProd.split(' ').join('-')}/ITEM_ID=${data.ID}/maximus.aspx" class="auto-link"><strong>${data.nomProd}</strong></a>                                    
                            </div>`
        }).join('')


        //creo el html para las 3 categorias
        mayoresCatsRepetidas = mayoresCatsRepetidas.map(cat => {
            return cat = `<div class="auto-search">
                              <a href="https://www.maximus.com.ar/" class="auto-link">Busca más productos en<strong>&nbsp;${cat}</strong></a>                                    
                          </div>`
        }).join('')

        //creo el html de las sugerencias mas el html de las categorias a mostrar
        let totalHTML = busquedas + ' <hr class="thin-line container"> ' + mayoresCatsRepetidas

        if(busquedas.length > 0){
            suggBoxMobile.innerHTML = totalHTML;
        }else{
            suggBoxMobile.innerHTML = '<div class="auto-search">No se encontraron coincidencias</div>';
        }
    }else{
        checkEmpty(busquedas, inputMobile, suggBoxMobile)
    }

})


