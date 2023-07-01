const form = document.getElementById('form');
const dismiss = document.getElementById('dismiss');
const img = document.querySelector('[data-img]');
console.log(img);

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário para evitar o recarregamento da página
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (isValidEmail(email)) {
    // O email é válido, você pode fazer algo com ele, como enviar para o servidor
    document.getElementById("sign").classList.remove('-show');
    document.getElementById('sign').classList.add('-hidden');
    document.getElementById("sucess").classList.remove('-hidden');
    document.getElementById('sucess').classList.add('-show');
    form.reset(); // Limpa o formulário após o submit

  } else {
    // O email é inválido, você pode exibir uma mensagem de erro ou realizar outra ação
    document.getElementById('error').classList.remove('-hidden')
    document.getElementById('error').classList.add('-show');
    document.getElementById('email').classList.add('-error');
  }
});

function dismise(){
  console.log('foi')
  document.getElementById("sucess").classList.remove('-show');
  document.getElementById('sucess').classList.add('-hidden');
  document.getElementById("sign").classList.remove('-hidden');
  document.getElementById('sign').classList.add('-show');
  document.getElementById('error').classList.remove('-show')
  document.getElementById('error').classList.add('-hidden');
  document.getElementById('email').classList.remove('-error');
  form.reset();
}
  
function isValidEmail(email) {
  // Faça a validação do email aqui, pode ser usando expressões regulares ou outras técnicas
  // Retorne true se o email for válido, ou false se for inválido
  // Exemplo de validação básica usando uma expressão regular:
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
function atualizarSrcImagem() {
if (window.screen.width<=1023){
  img.src = './assets/images/illustration-sign-up-mobile.svg';
  img.classList.remove('img-desk')
  img.classList.add('img-mobile')

}
else if(window.screen.width>1023){
  img.src = './assets/images/illustration-sign-up-desktop.svg';
  img.classList.add('img-desk')
  img.classList.remove('img-mobile')
  
}
}
window.addEventListener('load', atualizarSrcImagem);

window.addEventListener('resize', atualizarSrcImagem);

