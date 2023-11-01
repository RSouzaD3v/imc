let calcular = document.querySelector('#calcular');

calcular.addEventListener('click', () => {
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');

    var alturaNumb = Number(altura.value);
    var pesoNumb = Number(peso.value)

    if(!alturaNumb){
        setResultado('Altura Inválido');
        return;
    }

    if(!pesoNumb){
        setResultado('Peso Inválido');
        return;
    }

    const imc = getImc(alturaNumb, pesoNumb);
    const nivelImc = getNivelImc(imc)
    const msg = `SEU IMC É ${imc.toFixed(1)} (${nivelImc})`
    setResultado(msg);
})

function getImc(altura, peso){
    const imc = peso / (altura * altura)
    return imc;
}

function getNivelImc(imc){
    const nivel = ["Abaixo do Peso", "Peso Normal", "Sobrepeso", "Obesidade Grau 1", 
"Obesidade Grau 2", "Obesidade Grau 3"];

    if(imc < 18.5) return nivel[0];
    if(imc >= 18.5 && imc <= 24.9) return nivel[1];
    if(imc <= 25 && imc <= 29.9) return nivel[3];
    if(imc <= 30 && imc <= 34.9) return nivel[4];
    if(imc <= 35 && imc <= 39.9) return nivel[5];
    if(imc <= 40) return nivel[6];
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    const p = document.createElement('p');
    resultado.innerHTML = '';
    p.innerHTML = msg;
    resultado.appendChild(p);
}