// VARIABLES DE INTRODUCCION
var vrms =0; 
var fre =0; 
var caida =0; 
var vr =0; 
var n1 =0; 
var n2 =0;
var cal=document.getElementById("calcular");

// VARIABLES DE PRIMERA APROXIMACION
var v1 = document.getElementById("v1").value;
var v2 = document.getElementById("v2").value;
var vp1 = document.getElementById("vp1").value;
var vpp1 = document.getElementById("vpp1").value;
var vp2i = document.getElementById("vp2i").value;
var vp2o = document.getElementById("vp2o").value;
var vpp2i = document.getElementById("vpp2i").value;
var vpp2o = document.getElementById("vpp2o").value;
var vdc = document.getElementById("vdc").value;
// VARIABLES DE SEGUNDA APROXIMACION
var vp2ii = document.getElementById("vp2ii").value;
var vp2oo = document.getElementById("vp2oo").value;
var vpp2ii = document.getElementById("vpp22i").value;
var vpp2oo = document.getElementById("vpp22o").value;
var vl = document.getElementById("vl2").value;
var vdc2 = document.getElementById("vdc2").value;

// PRIMERA APROXIMACION
//    document.getElementById("vrms").value;
//   document.getElementById("fre").value;
//     document.getElementById("caida").value;
//     document.getElementById("vr").value;
//     document.getElementById("n1").value;
//     document.getElementById("n2").value;
function voltajep() {
    vrms=document.getElementById("vrms").value;
    var displayvp1=document.getElementById("vp1");
    vp1 =parseFloat(vrms / 0.707);
    displayvp1.textContent=vp1;

    return vp1;
}

function voltajepp() {
    var displayvpp1=document.getElementById("vpp1");
    vpp1 = parseFloat(2 * voltajep());
    displayvpp1.textContent=vpp1;
    return vpp1;
}

function voltaje2() {
    vrms=document.getElementById("vrms").value;
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    var div = parseFloat(n1 / n2);
    var display=document.getElementById("v2");
    v2 = parseFloat(vrms / div);
    display.textContent=v2;

    return v2;
}

function v1(){
    var displayv1=document.getElementById("v1");
    v1=vrms;
    displayv1.textContent=v1;
    return v1;
}

function vp2() {
    var displayvp2i=document.getElementById("vp2i");
    // var displayvpp2o=document.getElementById("vp2o");
    vp2i = parseFloat(voltaje2() / 0.707);
    // vp2o = parseFloat(voltaje2() / 0.707);
    displayvp2i.textContent=vp2i;
    // displayvpp2o.textContent=vp2o;
    return vp2i;
}

function vp2out() {
    // var displayvpp2i=document.getElementById("vp2i");
    var displayvp2o=document.getElementById("vp2o");
    // vp2i = parseFloat(voltaje2() / 0.707);
    vp2o = parseFloat(voltaje2() / 0.707);
    // displayvpp2i.textContent=vp2i;
    displayvp2o.textContent=vp2o;
    return vp2o;
}

function vpp2() {
    var displayvpp2i=document.getElementById("vpp2i");
    var displayvpp2o=document.getElementById("vpp2o");
    vpp2i =parseInt(vp2() * 2);
    vpp2o =parseInt(vp2() * 2);
    
    displayvpp2i.textContent=vpp2i;
    displayvpp2o.textContent=vpp2o;

    return vpp2i, vpp2o;
}

function vdc() {
    var displayvdc=document.getElementById("vdc");
    vdc =(vp2out())/Math.PI;
    displayvdc.textContent=vdc;
    return vdc;
}


// SEGUNDA APROXIMACION

function vp2o() {
    caida=document.getElementById("caida").value;
    var displayvp2oo=document.getElementById("vp2oo");
    vp2oo = parseInt(vp2() - caida);
    displayvp2oo.textContent=vp2oo;

    return vp2oo;

}

function vpp2i() {
    var vp2i = 35.36;
    var vpp2i = document.write(parseInt(vp2i * 2));
    return vpp2i;
}

 function vpp2o() {
     var vp2o = 34.66;
     var vpp2o = parseInt(vp2o * 2);
     return vpp2o;
 }


 function vdc2() {
     var vp2o = 34.66;
     var vdc2 = parseFloat(vp2o / Math.PI);
     return vdc2;
 }

cal.addEventListener('click',voltaje2);
cal.addEventListener('click',voltajep);
cal.addEventListener('click',voltajepp);
cal.addEventListener('click',vp2);
cal.addEventListener('click',vp2out);
cal.addEventListener('click',vpp2);
cal.addEventListener('click',vdc);
cal.addEventListener('click',vp2o);

// SOLO NUMEROS

function solonumeros(e) {
key = e.keyCode || e.which;
teclado = String.fromCharCode(key);
numeros = "0123456789";

especiales = "8-37-38-46";

teclado_especial = false;

for (var i in especiales) {
    if (key == especiales[i]) {
        teclado_especial = true;
    }
}

if (numeros.indexOf(teclado) == -1 & !teclado_especial) {
    return false;
}


}