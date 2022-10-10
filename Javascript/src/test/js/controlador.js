const SIDE_BAR = document.getElementById("side-bar");
const CONTENEDOR = document.getElementById("contenedor");
const NAV_VAR = document.getElementById("nav-var");
const side_var_open = "content";
const side_var_close = "container";
const class_nav = "scrolled";
const boton = document.getElementById("buttons");


export default class Controlador {


    enableSidebar() {

        SIDE_BAR.style.display = "block";
        this.changeClass(side_var_close, side_var_open, CONTENEDOR)


    }

    disableSideBar() {

        SIDE_BAR.style.display = "none";
        this.changeClass(side_var_open, side_var_close, CONTENEDOR)

    }

    adjustY() {

        if (NAV_VAR.classList.contains(class_nav)) {
            SIDE_BAR.style.marginTop = "45px"
        } else {
            SIDE_BAR.style.marginTop = "125px"
        }

    }

    changeClass(clas, clasnew, component) {

        //let component = document.getElementById(id_ob);
        component.classList.remove(clas);
        component.classList.add(clasnew);

    }





}

window.addEventListener('scroll', function() {
    if ((document.body.getBoundingClientRect()).top > scrollPos)
        SIDE_BAR.style.marginTop = "45px"
    else
        SIDE_BAR.style.marginTop = "125px"
    scrollPos = (document.body.getBoundingClientRect()).top;
});

window.controlador = new Controlador();