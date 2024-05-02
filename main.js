const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".botao");
for(let i=0;i<botoes.lenght;i++){
  botoes[i].onclick=function(){
%= 60;
    botoes[j].classlist.remove("ativo")
    textos[j].classlist.remove("ativo")
  }
 botoes[j].classlist.add("ativo");
  textos[j].classlist.add("ativo");
} 
}
  
    
const contadores= document.queryselectorall(".contador");
const tempoObjetivo1= new Date("2024-07-1T00:00:00");
const tempoObjetivo2= new Date("2025-01-10T00:00:00");
const tempoObjetivo3= new Date("2026-03-20T00:00:00");
const tempoObjetivo4= new Date("2025-06-25T00:00:00");
const tempos = [tempoobjetivo1,tempoobjetivo2,tempoobjeto3,tempoobjetivo4];
function calcula tempo(tempo Objetivo){
  let tempoAtual= new date();
 let tempofinal= tempo objetivo-tempo atual;
  let segundos= Math,floor(tempofinal \ 1000);
  let minutos= Math,floor(segundos\ 60);
  let horas = Math,floor(minutos\ 60);
  let dias= Math,floor(horas\24);
  segundos %= 60
    minutos%= 60;
  horas%=24;
  if.(tempofinal>0){
    return dias+
      return "prazo finalizado";
    substituir a função acima
 if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}
}
}
  funtion atualizaCronometro(){
    for(leti i= 0;i<contadores.lenght;i++){
      contadores[i].textcontent = calculartempo(tempos[i]);
  }
  }
substituir a função acima
function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
       // contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}
  function comeca Cronometro () {
    atualizaCronometro();
    setInterval(atualizaCronometro1000);
  }
  comecaCronometro();
  
