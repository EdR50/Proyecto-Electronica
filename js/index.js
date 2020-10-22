let vrms = 0;
const frecuencia = 60;
let n1 = 0;
let n2 = 0;
let cargaRl = 0;
let filtro = 0;
const botonCalcular = document.getElementById("calcular");


const calculandoVoltajeDos = () => {

    vrms = parseFloat(document.getElementById("vrms").value);
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    let display = document.getElementById("v2Display");
    let display2 = document.getElementById("v2");
    let formula = parseFloat(vrms / (n1 / n2));

    display.textContent = formula;
    display2.textContent = formula;
    return formula
}


const calculandoVoltajeP = () => {

    vrms = parseFloat(document.getElementById("vrms").value);
    let display = document.getElementById("vp1Display");
    let formula = Math.sqrt(2) * vrms;
    display.textContent = formula;
    return formula;
}

const calculandoIL = () => {

    cargaRl = parseFloat(document.getElementById("rl").value);
    let display = document.getElementById("ilDisplay");
    let formula = calculandoVoltajeDos() / cargaRl;
    return display.textContent = formula;
}

const calculandoVoltajeR = () => {

    filtro = document.getElementById('filtro').value;
    let display = document.getElementById("vrDisplay");
    let formula = parseFloat(calculandoIL() / frecuencia * filtro);
    display.textContent = formula;
    return formula;
}

const calculandoVP2In = () => {
    let vpIn = parseFloat(calculandoVoltajeDos() / 0.707);
    let display = document.getElementById('vp2In');
    let display2 = document.getElementById('vp2In2');
    let displayOut = document.getElementById('vp2Out');
    let displayOut2 = document.getElementById('vp2Out2');
    display.textContent = vpIn;
    display2.textContent = vpIn;
    displayOut.textContent = vpIn;
    displayOut2.textContent = vpIn;
    return vpIn;
}

const calculandoVpp2 = () => {
    let vpp2 = calculandoVP2In() * 2
    let display = document.getElementById("vpp2In");
    let displayOut = document.getElementById("vpp2Out");
    let display2 = document.getElementById("vpp2In2");
    let displayOut2 = document.getElementById("vpp2Out2");
    displayOut2.textContent = vpp2
    display2.textContent = vpp2;
    display.textContent = vpp2;
    displayOut.textContent = vpp2;

    return vpp2;
}


const calculandoVdc = () => {
    let formula = (calculandoVP2In()) / Math.PI;
    let display = document.getElementById("vdcDisplay");
    let display2 = document.getElementById("vdcDisplay2");
    display.textContent = formula;
    display2.textContent = formula;
    return formula;
}

botonCalcular.addEventListener('click', calculandoVoltajeDos);
botonCalcular.addEventListener('click', calculandoVoltajeP);
botonCalcular.addEventListener('click', calculandoIL);
botonCalcular.addEventListener('click', calculandoVoltajeR);
botonCalcular.addEventListener('click', calculandoVP2In);
botonCalcular.addEventListener('click', calculandoVpp2);
botonCalcular.addEventListener('click', calculandoVdc);