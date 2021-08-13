

const categorias = [
    [
        {
            "microprocesadores": [
                "Socket AMD AM4",
                "Socket Intel 1151",
                "Socket Intel 1200"
            ]
        },
        {
            "motherboards": [
                "Mother AMD AM4",
                "Mother Intel 1151",
                "Mother Intel 1200"
            ]
        },
        {
            "memorias ram": [
                "Memorias Para Pc (UDIMM)",
                "Memorias Para Notebook (SODIMM)"
            ]
        },
        {
            "placas de video": [
                "Placas de Video AMD Radeon",
                "Placas de Video Nvidia"
            ]
        }
    ],
    [
        {
            "almacenamiento": [
                "Discos Externos USB",
                "Discos Rígidos HDD para Notebook",
                "Discos Rígidos HDD para PC",
                "Discos Sólidos SSD Internos",
                "Memorias SD - Pendrives"
            ]
        },
        {
            "refrigeración": [
                "Air Cooling",
                "Water Cooling",
                "Pasta Térmica",
                "Fan 120mm",
                "Fan 140mm",
                "Accesorios"
            ]
        },
        {
            "televisores": [
                "Smart TV"
            ]
        },
    ],
    [
        {
            "fuentes": [
                "Sin certificado",
                "80 Plus White",
                "80 Plus Bronce",
                "80 Plus Gold"
            ]
        },
        {
            "gabinetes": [
                "Full Tower",
                "Mid Tower",
                "Mini Tower"
            ]
        },
        {
            "sillas": [
                "Sillas gamer"
            ]
        },
        {
            "tablets":[
                "Tabletas Digitalizadoras"
            ]
        },
    ],
    [
        {
            "accesorios": [
                "Soportes de GPU",
                "Cabls Mallados",
                "Tiras Led",
                "Estabilizador y UPS",
                "Routers",
                "Mochilas y Bolsos"
            ]
        },
        {
            "sistema operativo":[
                "Microsoft Windows"
            ]
        },
        {
            "capturadoras de video": [
                "Capturaoras de Video"
            ]
        },
        {
            "smartwatch - smartband": [
                "SmartBand"
            ]
        },
        {
            "pequeños electrodomesticos": [
                "Termometros",
                "TV Stick - TV Box"
            ]
        }
    ]  
]
const lados = [
    "left",
    "centerLeft",
    "centerRight",
    "right",
]

let prueba = document.querySelector(".prueba")

//prueba.className = "hidden"

function mostrar(e){
    e.preventDefault();
    for(let i = 0; i < categorias.length; i++) {
        console.log(categorias[i]);
        prueba.appendChild(generateLado(categorias[i], i));  
    }
    
    const generateLado = (listado, num) => {return generateZone(listado[num], num)}
    
    const generateZone = (zone, pos) => {
        let ul = `<ul class="${lados[pos]}"></ul>`;
        ul.appendChild(`<p>${Object.keys(categorias)[pos]}</p>`)
        for(cat of zone){
            ul.appendChild(
                console.log(cat)
                `<li>${cat}</li>`
            )
        }
        return ul;
    }
}





