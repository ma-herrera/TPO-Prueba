// crear los tags que voy a usar
// asignar las relaciones entre los tags

const header = document.querySelector("header");
header.innerHTML = 
// `<header class="banner">                
`<div class="logo">
    <a href="./index.html"><img src="./Assets/Imagenes/Recurso 5.svg" alt="Logo de Eleven viajes"  width="80 px" height="75px"></a>
    <p>El destino de tus sueños</p>
</div>

<input type="checkbox" unchecked id="menu-check">
<label for="menu-check" class="btn-hamburguesa">
    <i class="material-symbols-outlined menu-hamburguesa"> menu </i>
</label>
<nav >
    <ul class="navmenu">
        <li><a id="excursiones" href="">Excursiones</a>
            <ul>
                <li><a href="./teatro.html">Teatro</a></li>
                <li><a href="./dummy.html">Estancia "La estrella"</a></li>
                <li><a href="./dummy.html">Tigre</a></li>
                <li><a href="./dummy.html">Tour gaucho</a></li>
            </ul>
        </li>
        <li><a href="./formularioDeContacto.html">Contacto</a></li>
        <li><a href="./dummy.html">Blog</a></li>
        <li><a href="./index.html"><span class="material-symbols-outlined">home</span></a></li>
    </ul>
</nav>`


// </header>`


// backup del menu
/* <li><a href="teatro.html">Teatro</a></li>
<li><a href="dummy.html">Excursiones</a></li>
<li><a href="nosotros.html">Nosotros</a></li>
<li><a href="./formularioDeContacto.html">Contacto</a></li>
<li><a href="dummy.html">Blog</a></li>
<li><a href="./index.html"><span class="material-symbols-outlined">home</span></a></li> */



/* <ul class="navmenu">
<li><label for="excursiones">Excursiones</label></li>
    <select name="excursiones" id="excursiones">
        <option><a href="dummy.html">dummy</a> </option>

    </select>
<li><a href="./formularioDeContacto.html">Contacto</a></li>
<li><a href="./dummy.html">Blog</a></li>
<li><a href="./index.html"><span class="material-symbols-outlined">home</span></a></li>
</ul> */
