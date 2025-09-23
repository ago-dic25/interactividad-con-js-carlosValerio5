const x = "Hello World";

function sum(x, y){
    return x+y;
}

const imprimirMensaje = (mensaje) => {
    console.log(mensaje);
}


// Elementos de la pagina
const botonBuscar = document.getElementById("button-search");


// Eventos
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste click al boton.");
    botonBuscar.classList.add("rojo");
})

const linkPosts = document.getElementById("see-posts")
const listPosts =  document.getElementById("list-posts")


if (linkPosts!=null){
    linkPosts.addEventListener("click", function(){
        listPosts.classList.remove("ocultar");
    })
}

var mas = document.getElementById("mas");
var verTodos = document.getElementById("ver-todos");
var posts = document.getElementById("posts");
var nightMode = document.getElementById("night-mode");
var body = document.body;

mas.addEventListener('click', function(){
    alert("Seccion en progreso");
})

verTodos.addEventListener('click', function(){
    if (posts.classList.contains("ocultar"))
        posts.classList.replace("ocultar", "mostrar");
    else
        posts.classList.replace("mostrar", "ocultar");
})


nightMode.addEventListener('click', function(){
	if (body.classList.contains('dark-mode')){
		body.classList.replace('dark-mode', 'light-mode');
	}	
	else
		body.classList.replace('light-mode', 'dark-mode');
})

// likes
let countPost1 = 0;
let countPost2 = 0;
let countPost3 = 0;

const post1 = document.getElementById('post-1');
const post2 = document.getElementById('post-2');
const post3 = document.getElementById('post-3');

const counter1 = document.getElementById('counter-1');
const counter2 = document.getElementById('counter-2');
const counter3 = document.getElementById('counter-3');

function updateDisplay(counter, count){
	counter.textContent = count;
}

post1.addEventListener('click', ()=>{
	countPost1++;
	updateDisplay(counter1, countPost1);
});

post2.addEventListener('click', ()=>{
	countPost2++;
	updateDisplay(counter2, countPost2);
});
post3.addEventListener('click', ()=>{
	countPost3++;
	updateDisplay(counter3, countPost3);
});

//Search field

const inputField = document.getElementById('search-field');
const tarjetas = document.getElementsByClassName('post');
const searchButton = document.getElementById('button-search');

searchButton.addEventListener('click', ()=>{
	let inputText = inputField.value.toLowerCase();

	Array.from(tarjetas).forEach(div => {
		const divContent = div.textContent.toLowerCase();
		if (divContent.includes(inputText))
			div.classList.add('mostrar');
		else
			div.classList.add('ocultar');
	});
});


// Gallery counter
function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
var verFotos = document.getElementById("ver-fotos");
const galleryItems = document.getElementsByClassName('grid-item');
const imageGallery = document.getElementById('image-gallery');
const pics = document.getElementById('pics'); 
verFotos.addEventListener('click', () => {
	pics.classList.toggle('ocultar');
});

let isGalleryRunning = false;

pics.addEventListener('mouseenter', async function(event){
	isGalleryRunning = true;
	while (isGalleryRunning){
		for (const image of Array.from(galleryItems)) {
			if (image.classList.contains('ocultar')) {
				image.classList.replace('ocultar', 'mostrar');
			}
			await sleep(3000);
			if (!isGalleryRunning) break;
			image.classList.replace('mostrar', 'ocultar');

		}
	}
});

pics.addEventListener('mouseleave', async function(event){
	isGalleryRunning = false;
});
