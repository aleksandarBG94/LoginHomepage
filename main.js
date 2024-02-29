$('#userName, #userPassword').on('input', function userPassCheck() {
    if ($('#userName').val().length >= 2 && $('#userPassword').val().length >= 3) {
        $('.btn').prop('disabled', false);
    } else {
        $('.btn').prop('disabled', true);
    }
})

$('.btn').on('click', function rememberMe() {
    if ($('#rememberCheck').prop('checked')) {
        localStorage.setItem('userName', $('#userName').val());
        localStorage.setItem('userPassword', $('#userPassword').val());
    } else {
        localStorage.removeItem('userName');
        localStorage.removeItem('userPassword');
    }
})

$('.btn').on('click', function login(event) {
    event.preventDefault();
    if ($('#userName').val() === 'akotsev' && $('#userPassword').val() === '123') {
        window.location.href = 'file:///C:/Users/akotsev/Documents/Web/29.02/homepage.html';
    } else {
        $('#loginError').show();
    }
})
