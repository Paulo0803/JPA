const toggleSingUp = document.getElementById('toggleAuthLink');
const toggleForgot = document.getElementById('toggleForgotLink');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const submitBtn = document.getElementById('submitBtn');
const forgotPasswordGroup = document.getElementById('forgotPasswordGroup');
const toggleSingUpGroup = document.getElementById('toggleText');
const toggleText = document.getElementById('toggleText');
const extraFields = document.querySelectorAll('.extra_field');
const passwordGroup = document.querySelectorAll('.password_group');

const phoneInput = document.getElementById('phone');
const confirmPasswordInput = document.getElementById('confirmPassword');

let isSignUpMode = false;
let isForgotMode = false;

function toggleForgotMode(e) {
    e.preventDefault();

    isForgotMode = !isForgotMode;

    if (isForgotMode) {
        formTitle.textContent = "Recupere sua senha";
        formSubtitle.textContent = "Insira seu e-mail para receber as instruções de recuperação";
        submitBtn.textContent = "Enviar";

        toggleSingUpGroup.style.display = "none";
        
        passwordGroup.forEach(field => field.classList.add('hidden'));
    }
    
    else {
        formTitle.textContent = "Acesse sua conta";
        formSubtitle.textContent = "Insira suas credenciais para entrar no HUB";
        submitBtn.textContent = "Entrar";

        toggleSingUpGroup.style.display = "flex";
        
        passwordGroup.forEach(field => field.classList.remove('hidden'));
    }
}

toggleForgot.addEventListener('click', toggleForgotMode);

function toggleAuthMode(e) {
    e.preventDefault();
    
    isSignUpMode = !isSignUpMode;

    if (isSignUpMode) {
        formTitle.textContent = "Crie sua conta";
        formSubtitle.textContent = "Preencha os dados abaixo para se registrar";
        submitBtn.textContent = "Cadastrar";
        
        forgotPasswordGroup.style.display = "none";
        
        toggleText.childNodes[0].textContent = "Já tem uma conta? ";
        toggleSingUp.textContent = "Faça login aqui";

        extraFields.forEach(field => field.classList.remove('hidden'));

        phoneInput.required = true;
        confirmPasswordInput.required = true;

    } else {
        formTitle.textContent = "Acesse sua conta";
        formSubtitle.textContent = "Insira suas credenciais para entrar no HUB";
        submitBtn.textContent = "Entrar";
        
        forgotPasswordGroup.style.display = "flex";

        toggleText.childNodes[0].textContent = "Ainda não tem uma conta? ";
        toggleSingUp.textContent = "Cadastre-se aqui";

        extraFields.forEach(field => field.classList.add('hidden'));

        phoneInput.required = false;
        confirmPasswordInput.required = false;
    }
}

toggleSingUp.addEventListener('click', toggleAuthMode);