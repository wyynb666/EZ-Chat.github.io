document.addEventListener('DOMContentLoaded', function () {
        const loginLink = document.querySelector('.register-link');
        const registerLink = document.querySelector('.login-link');
        const loginForm = document.querySelector('.login-form');
        const registerForm = document.querySelector('.register-form');
        const loginButton = document.getElementById('login-btn');
        const RegisterButton = document.getElementById('register-btn');

        // Controlling the display of the login and register tables
        loginLink.addEventListener('click', function (event) {
            event.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });

        registerLink.addEventListener('click', function (event) {
            event.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });

        loginButton.addEventListener('click', function (event) {
            // 防止表单提交 Preventing form submissions
            event.preventDefault();

            // 获取输入框的值 Get the value of the input box
            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            // 简单验证逻辑 Simple Validation Logic
            if (validateEmailForLogin(email) && validatePasswordForLogin(password)) {
                alert('Login Success！');
                // Successful logins can be handled here, e.g. sending requests to the server, etc.
            } else {
                alert('Please enter a valid email/password');
            }
        });

        RegisterButton.addEventListener('click', function (event) {
            // 防止表单提交 Preventing form submissions
            event.preventDefault();

            // 获取输入框的值 Get the value of the input box
            const username = document.querySelector('input[type="text"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            // 简单验证逻辑 Simple Validation Logic
            if (validateUsernameForRegister && validateEmailForRegister(email) && validatePasswordForRegister(password)) {
                alert('Register Success！');
                // Successful registrations can be handled here, e.g. sending requests to the server, etc.
            } else {
                alert('Please enter valid username/email/password');
            }
        });

        // judge the input valid or not
        function validateEmailForLogin(email) {
            return email === 'administrator@gmail.com';
        }

        function validatePasswordForLogin(password) {
            return password == 123456;
        }

        function validateUsernameForRegister(username) {
            return username.length >= 3;
        }

        function validateEmailForRegister(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePasswordForRegister(password) {
            return password.length >= 6;
        }
    }
)
;
