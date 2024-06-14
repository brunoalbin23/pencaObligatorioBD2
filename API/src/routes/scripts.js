document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha_nac = document.getElementById('fecha_nac').value;
    const ci = document.getElementById('ci').value;
    const carrera = document.getElementById('carrera').value;
    const password = document.getElementById('password').value;

    const registerMessage = document.getElementById('registerMessage');
    registerMessage.style.display = 'none';

    fetch('http://localhost:3000/alumno/logear', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Nombre: nombre,
            Apellido: apellido,
            Date: fecha_nac,
            CI: ci,
            Carrera: carrera,
            Password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.text();
    })
    .then(data => {
        registerMessage.textContent = data;
        registerMessage.className = 'message success';
        registerMessage.style.display = 'block';
    })
    .catch(error => {
        registerMessage.textContent = error.message;
        registerMessage.className = 'message error';
        registerMessage.style.display = 'block';
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ci = document.getElementById('loginCI').value;
    const password = document.getElementById('loginPassword').value;

    const loginMessage = document.getElementById('loginMessage');
    loginMessage.style.display = 'none';

    fetch('http://localhost:3000/alumno/inicio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            CI: ci,
            Password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.text();
    })
    .then(data => {
        loginMessage.textContent = data;
        loginMessage.className = 'message success';
        loginMessage.style.display = 'block';
    })
    .catch(error => {
        loginMessage.textContent = error.message;
        loginMessage.className = 'message error';
        loginMessage.style.display = 'block';
    });
});
