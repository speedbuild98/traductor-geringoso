const alertMessage = document.querySelector(".alert-message-box");
const textBox = document.querySelector(".text-box");


// funcion encrptar ----------------------------------------------------------------------------

function encriptText() {
    let textResult = document.getElementById("inputText").value
        .replace(/e/g, "epe")
        .replace(/i/g, "ipi")
        .replace(/a/g, "apa")
        .replace(/o/g, "opo")
        .replace(/u/g, "upu")
    

    if (textResult.length === 0 || /^\s+$/.test(textResult)) {
        alert("El Campo de texto está vacio capo, escribí algo.");
    }
    else if (/[^a-z ]/.test(textResult)) {
        alert("Solo se permiten letras minusculas y sin acento XD");

    } else {
        textBox.classList.remove("disabled")
        alertMessage.textContent = "";
    }

    document.getElementById("text-result").innerHTML = textResult;
    inputText.value = "";
    inputText.focus();
}


// funcion desencriptar --------------------------------------------------------------------------

function decryptText() {
    let textResultDec = document.getElementById("inputText").value
        .replace(/epe/g, "e")
        .replace(/ipi/g, "i")
        .replace(/apa/g, "a")
        .replace(/opo/g, "o")
        .replace(/upu/g, "u")

    document.getElementById("text-result").innerHTML = textResultDec;

    if (textResultDec.length === 0 || /^\s+$/.test(textResultDec)) {
        alert("El Campo de texto está vacio capo, escribí algo.");
       
    }
    else if (/[^a-z ]/.test(textResultDec)) {
        alert("Solo se permiten letras minusculas y sin acento XD");
        
    }
    else {
        textBox.classList.remove("disabled")
        alertMessage.textContent = "";
    }

    document.getElementById("text-result").innerHTML = textResultDec;
    inputText.value = "";
    inputText.focus();
    // if(textBox.classList.contains){textBox.classList.remove("disabled")}
    
}


// boton de copiado --------------------------------------------------------------------------------

function copyToClipBoard() {
    let copyText = document.getElementById("text-result").textContent;
    console.log({copyText});
    navigator.clipboard.writeText(copyText).then(() => {

        if (copyText.length === 0 || /^\s+$/.test(copyText)) {
            alert("No hay texto que copiar menso.");
        } else {
            alert("Texto copiadopo");
        }
    });
}


// Dark mode ----------------------------------------------------------------------------------------

const btnSwitch = document.querySelector("#switch-mode");
const imgSwitch = document.querySelector(".logo-title");
const imgRobot = document.querySelector(".robot");
const imgTitleWhite = document.querySelector("#logo-title_white");
const imgRobotDarkMode = document.querySelector(".robot_dm");


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    if (imgSwitch.classList.contains('disable') && imgRobot.classList.contains('disable')) {
        imgSwitch.classList.remove("disable");
        imgTitleWhite.classList.remove("active");
         imgRobot.classList.remove("disable");
         imgRobotDarkMode.classList.remove("active");

        imgSwitch.classList.add("active");
        imgTitleWhite.classList.add("disable");
        imgRobot.classList.add("active");
        imgRobotDarkMode.classList.add("disable");
    
    } else {

        imgSwitch.classList.remove("active");
        imgTitleWhite.classList.remove("disable");
        imgRobot.classList.remove("active");
        imgRobotDarkMode.classList.remove("disable");

        imgSwitch.classList.add("disable");
        imgTitleWhite.classList.add("active");
        imgRobot.classList.add("disable");
        imgRobotDarkMode.classList.add("active");

    }
})




