const textoCompleto = "OLÁ,<br> SOU CAIO,<br> DEV FRONT-END."
const elementoTexto = document.getElementById("texto-digitar");
const botao = document.getElementById("botao");
const char = document.getElementById("charSaudacao");
const sobre = document.getElementById("sobre-mim")
//const textoCompleto = 'Minha querida cherry, hoje é um dia muito especial, pois celebramos 7 meses de namoro e o nosso primeiro dia dos namorados juntos. Você é a pessoa com quem eu sonho em construir um futuro maravilhoso e feliz.<br>Quero expressar meu amor por você de forma simples, mas sincera, nesta carta. Lembro-me da primeira vez que segurei sua mão e de como uma frase mudou minha vida e minhas prioridades.<br>Sua competitividade me atraiu de forma divertida, mas o que me apaixonou e continua me apaixonando todos os dias é sua essência, a energia que você transmite e que me faz sentir vivo, nossa conversa sobre os mundos que você criou para suas obras, que tenho certeza que vão se tornar realidade e me emocionaram.<br>Eu não era uma pessoa acostumada a receber afeto, mas você mudou isso e eu descobri em você como é bom ser amado. Quero retribuir esse sentimento pelo máximo de tempo possível. Não sou poeta e você sabe disso, eu sou apenas um labrador meio bobo e completamente apaixonado por você.<br>Como eu disse na primeira vez, "sua mão é gostosinha de segurar" e vai continuar sendo por muito tempo ainda. Não posso ser perfeito, mas quero ser o melhor que eu puder para você, seu porto seguro, sua paz e proteção, assim como você é para mim. Sou péssimo em declarações, me faltam palavras, e a cada palavra minha mente fica mais em branco, deve ser nervosismo... Te AMOOOOOOOOOO.'

const typed = new Typed(elementoTexto, {
  strings: [textoCompleto],
  typeSpeed: 30, // Velocidade de digitação (em milissegundos)
  showCursor: false, // Oculta o cursor de digitação
  onComplete: function() {
    botao.classList.add("fade-in");
    char.classList.remove("fala")
    sobre.classList.remove("none")
  }
  
});
