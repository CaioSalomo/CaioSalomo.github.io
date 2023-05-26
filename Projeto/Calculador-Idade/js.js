
function calcularIdade() {
  var dataAtual = new Date();

  var ElementoDia = document.getElementById('Day');
  var ElementoMes = document.getElementById('Month');
  var ElementoAno = document.getElementById('Year');
  var ElementoDiaerro = document.getElementById('wrong_day').classList;
  var ElementoMeserro = document.getElementById('wrong_month').classList;
  var ElementoAnoerro = document.getElementById('wrong_year').classList;

  var inputDia = ElementoDia.value;
  var inputMes = ElementoMes.value;
  var inputAno = ElementoAno.value;
  

  if (inputDia === "" || inputDia < 1|| inputDia > 31)  {
    inputDia = dataAtual.getDate();
    ElementoDia.value = inputDia
    ElementoDiaerro.remove('hidden')
    ElementoDiaerro.add('visible')
    ElementoDia.classList.add('input-error');
  }
  else{
    ElementoDia.classList.remove('input-error');
    ElementoDiaerro.remove('visible')
    ElementoDiaerro.add('hidden')
  }
  if (inputMes === ""|| inputMes < 1|| inputMes > 12) {
    inputMes = dataAtual.getMonth() + 1;
    ElementoMes.value = inputMes 
    ElementoMeserro.remove('hidden')
    ElementoMeserro.add('visible')
    ElementoMes.classList.add('input-error');
  }
  else{
    ElementoMes.classList.remove('input-error');
    ElementoMeserro.remove('visible')
    ElementoMeserro.add('hidden')
  }
  if (inputAno === "") {
    inputAno = dataAtual.getFullYear();
    ElementoAno.value = inputAno
    ElementoAnoerro.remove('hidden')
    ElementoAnoerro.add('visible')
    ElementoAno.classList.add('input-error');
  }
  else{
    ElementoAno.classList.remove('input-error');
    ElementoAnoerro.remove('visible')
    ElementoAnoerro.add('hidden')
  }

  var dataNascimento = new Date(inputAno, inputMes - 1, inputDia);
  var anoAtual = dataAtual.getFullYear();

  if (dataNascimento>dataAtual){
    inputDia = dataAtual.getDate();
    ElementoDia.value = inputDia
    ElementoAno.classList.add('input-error');
    inputMes = dataAtual.getMonth() + 1;
    ElementoMes.value = inputMes 
    ElementoMes.classList.add('input-error');
    inputAno = dataAtual.getFullYear();
    ElementoAno.value = inputAno
    ElementoDia.classList.add('input-error');
  }
  else{
    ElementoAno.classList.remove('input-error');
    ElementoMes.classList.remove('input-error');
    ElementoDia.classList.remove('input-error');
  }
  var dataNascimento = new Date(inputAno, inputMes - 1, inputDia);

  var diffAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
  var diffMeses = dataAtual.getMonth() - dataNascimento.getMonth();
  var diffDias = dataAtual.getDate() - dataNascimento.getDate();

  if (diffMeses < 0 || (diffMeses === 0 && diffDias < 0)) {
    diffAnos--;
  }

  var elementoAnos = document.getElementById('years');
  var elementoMeses = document.getElementById('months');
  var elementoDias = document.getElementById('days');

  elementoAnos.textContent = diffAnos;
  elementoMeses.textContent = Math.abs(diffMeses);
  elementoDias.textContent = Math.abs(diffDias);
}

var button = document.querySelector('.subimmit_buttom');
button.addEventListener('click', calcularIdade);
