
document.getElementById('btn').addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input');
        if (passwordInput.value === '') {
            passwordInput.classList.add('error')
        } else {
            passwordInput.classList.add('accept')
        }
        });


        document.getElementById('btn').addEventListener('click', () => {
            const passwordCheck = document.getElementById('password-check');
            if (passwordCheck.value === '') {
                passwordCheck.classList.add('error')
            } else {
                passwordCheck.classList.add('accept')
            }
        });



