async function fetchUserData() {

    const userData = localStorage.getItem('user');

    if (userData) {

        const user = JSON.parse(userData);

        document.getElementById('userName').innerText = user.nome;

        document.getElementById('userEmail').innerText = user.email;

    } else {

        window.location.href = 'login.html';

    }

}

document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('user');

    window.location.href = '../../static/index.html';

});

document.addEventListener('DOMContentLoaded', fetchUserData);