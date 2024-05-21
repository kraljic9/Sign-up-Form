

document.getElementById('btn').addEventListener('click', () => {
        const passwordInput = document.getElementById('password-input');
        const passwordCheck = document.getElementById('password-check');
        if (passwordInput.value === '') {
            passwordInput.classList.add('error')
        } else {
            passwordInput.classList.add('accept')
        }
        });


