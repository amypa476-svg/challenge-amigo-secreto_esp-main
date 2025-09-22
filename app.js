let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value.trim(); 

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

        if (!/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚüÜ]+$/.test(nombreAmigo)) {
        alert('Por favor, ingresa solo letras en el nombre.');
        amigoInput.value = ''; 
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya ha sido agregado.');
        amigoInput.value = ''; 
        return;
    }

    amigos.push(nombreAmigo);
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    amigoInput.value = ''; 
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    let p = document.createElement('p');
    p.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
    resultado.appendChild(p);
}


function reiniciar() {
    amigos = []; 
    document.getElementById('listaAmigos').innerHTML = ''; 
    document.getElementById('resultado').innerHTML = ''; 
    document.getElementById('amigo').value = ''; 
}