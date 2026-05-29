const toggleLink = document.getElementById('toggleAuthLink');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const submitBtn = document.getElementById('submitBtn');
const forgotPasswordGroup = document.getElementById('forgotPasswordGroup');
const toggleText = document.getElementById('toggleText');
const extraFields = document.querySelectorAll('.extra_field');

const phoneInput = document.getElementById('phone');
const confirmPasswordInput = document.getElementById('confirmPassword');

let isSignUpMode = false;

function toggleAuthMode(e) {
    e.preventDefault();
    
    isSignUpMode = !isSignUpMode;

    if (isSignUpMode) {
        formTitle.textContent = "Crie sua conta";
        formSubtitle.textContent = "Preencha os dados abaixo para se registrar";
        submitBtn.textContent = "Cadastrar";
        
        forgotPasswordGroup.style.display = "none";
        
        toggleText.childNodes[0].textContent = "Já tem uma conta? ";
        toggleLink.textContent = "Faça login aqui";

        extraFields.forEach(field => field.classList.remove('hidden'));

        phoneInput.required = true;
        confirmPasswordInput.required = true;

    } else {
        formTitle.textContent = "Acesse sua conta";
        formSubtitle.textContent = "Insira suas credenciais para entrar no HUB";
        submitBtn.textContent = "Entrar";
        
        forgotPasswordGroup.style.display = "flex";

        toggleText.childNodes[0].textContent = "Ainda não tem uma conta? ";
        toggleLink.textContent = "Cadastre-se aqui";

        extraFields.forEach(field => field.classList.add('hidden'));

        phoneInput.required = false;
        confirmPasswordInput.required = false;
    }
}

toggleLink.addEventListener('click', toggleAuthMode);