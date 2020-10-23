let vrms = 0;
let fre = 0;
let caida = 0;
let vr = 0;
let n1 = 0;
let n2 = 0;
const cal = document.getElementById("calcular");

// PRIMERA APROXIMACIÓN
let v1Data = document.getElementById("v1").value;
let v2 = document.getElementById("v2").value;
let vp1 = 0
let vpp1 = document.getElementById("vpp1").value;
let vp2i = 0;
let vp2o = document.getElementById("vp2o").value;
let vpp2i = document.getElementById("vpp2i").value;
let vpp2o = document.getElementById("vpp2o").value;
let vdc = document.getElementById("vdc").value;


// SEGUNDA APROXIMACIÓN
let vp2ii = document.getElementById("vp2ii").value;
let vp2oo = 0;
let vpp2ii = document.getElementById("vpp22i").value;
let vpp2oo = document.getElementById("vpp22o").value;
let vl = document.getElementById("vl2").value;
let vdc2 = document.getElementById("vdc2").value;

// Working dope
const voltajePHandler = () => {
    vrms = document.getElementById("vrms").value;
    let displayVp1 = document.getElementById("vp1");
    vp1 = parseFloat(vrms)/0.707;
    displayVp1.textContent = vp1.toFixed(2);
    return vp1;
}

//Working well
const voltajeppHandler = () => {
    let displayvpp1 = document.getElementById("vpp1");
    vpp1 = 2 * voltajePHandler();
    displayvpp1.textContent = vpp1.toFixed(2);
    return vpp1;
}

// Working well
const voltaje2Handler = () => {
    vrms = document.getElementById("vrms").value;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    let div = n1 / n2;
    let display = document.getElementById("v2");
    let display2 = document.getElementById("v22");
    v2 = vrms / div;
    display.textContent = v2.toFixed(2);
    display2.textContent = v2.toFixed(2);
    return v2;
}

// working well
const v1Handler = () => {
    let displayV1 = document.getElementById("v1");
    let displayV11 = document.getElementById("v11");
    vrms = document.getElementById("vrms").value;
    displayV1.textContent = vrms;
    displayV11.textContent = vrms;
    return vrms;
}

// working well
const vp2Handler = () => {
    let displayvp2i = document.getElementById("vp2i");
    let displayvp2ii = document.getElementById("vp2ii");
    vp2i = voltaje2Handler() / 0.707;
    displayvp2i.textContent = vp2i.toFixed(2);
    displayvp2ii.textContent = vp2i.toFixed(2);
    return vp2i;
}

const vp2outHandler = () => {
    let displayvp2o = document.getElementById("vp2o");
    vp2o =voltaje2Handler() / 0.707
    displayvp2o.textContent = vp2o.toFixed(2);
    return vp2o;
}

const vpp2Handler = () => {
    let displayvpp2i = document.getElementById("vpp2i");
    let displayvpp2o = document.getElementById("vpp2o");
    vpp2i = vp2Handler() * 2;
    vpp2o = vp2Handler() * 2;

    displayvpp2i.textContent = vpp2i.toFixed(2);
    displayvpp2o.textContent = vpp2o.toFixed(2);

    return vpp2i;
}

const vdcHandler = () => {
    let displayVdc = document.getElementById("vdc");
    vdc = (vp2outHandler()) / Math.PI;
    displayVdc.textContent = vdc.toFixed(2);
    return vdc;
}


// SEGUNDA APROXIMACIÓN

const vp2oHandler = () => {
    let displayVp2oo = document.getElementById("vp2oo");
    caida = document.getElementById("caida").value;
    vp2oo = vp2Handler() - caida
    displayVp2oo.textContent = vp2oo.toFixed(2);
    return vp2oo;
}

const vpp2iHandler = () => {
    let displayVpp2i = document.getElementById("vpp22i");
    let vpp2i = vp2Handler() * 2;
    displayVpp2i.textContent = vpp2i.toFixed(2);
    return vpp2i;
}

const vpp2oHandler = () => {
    let displayVpp2 = document.getElementById("vpp22o");
    let vpp2o = vp2oHandler() * 2;
    displayVpp2.textContent = vpp2o.toFixed(2);
    return vpp2o;
}


const vdc2Handler = () => {
    let displayVdc = document.getElementById("vdc2");
    let vdc2 = vp2outHandler() / Math.PI;
    displayVdc.textContent = vdc2.toFixed(2)
    return vdc2;
}

const vlHandler = () => {
    let formula = vp2outHandler() / Math.PI;
    let display = document.getElementById("vl2");
    display.textContent = formula.toFixed(2);

    return formula;
}

cal.addEventListener('click', voltaje2Handler);
cal.addEventListener('click', voltajePHandler);
cal.addEventListener('click', voltajeppHandler);
cal.addEventListener('click', vp2Handler);
cal.addEventListener('click', vp2outHandler);
cal.addEventListener('click', vpp2Handler);
cal.addEventListener('click', vdcHandler);
cal.addEventListener('click', vp2oHandler);
cal.addEventListener('click', v1Handler);
cal.addEventListener('click', vpp2iHandler);
cal.addEventListener('click' , vpp2oHandler);
cal.addEventListener('click' , vdc2Handler);
cal.addEventListener('click' , vlHandler);