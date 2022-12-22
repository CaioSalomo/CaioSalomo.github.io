var selecionado= false;
function PegaVal(valor){
    document.getElementById("js").innerHTML =`<p >You selected ${valor} out of 5</p>`;
    selecionado=true 
   
}
function Mostra(Tela,Tela1){
    var display=document.getElementById(Tela).style.display
    var display1=document.getElementById(Tela1).style.display
    if(selecionado){
        if(display=="none"){
            document.getElementById(Tela1).style.display='block'
        }
        else{
            document.getElementById(Tela1).style.display='none'  
        }
        if(display1=="block"){
            document.getElementById(Tela).style.display='none'

        }
        else{
            document.getElementById(Tela).style.display='flex'
        }
    }
    else{
        alert("Selecione alguma Nota")
    }


  

    
}

