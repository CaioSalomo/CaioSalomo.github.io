function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio)
  
   if (elemento && elemento.localname ==='audio'){
    elemento.play()
   }
   else{
    console.log("Não encontrado")
   }
   
}

var somLista = []

var som = document.querySelectorAll('.sounds');
const listaTeclas = document.querySelectorAll('.tecla');


for (var k = 0; k < listaTeclas.length; k++){
    somLista.push(som[k].id);
    const tecla = listaTeclas[k];
    const idAudio = (`#${somLista[k]}`);
    const instrumento = tecla.classList[1];
    tecla.onclick = function(){
        tocaSom(idAudio);
        
    };
    tecla.onkeydown = function(evento){
        if (evento.code === 'space'|| evento.code ==='Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
            
        }
    
    
    

    console.log(idAudio);
    
}




