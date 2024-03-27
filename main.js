const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".botao");
for(let i=;i<botoes.lenght;i++){
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
const tempoObjetivo1= new Date("2024-03-25T00:00:00");
contadores[0].textcontent=calculaTempo(tempoobjetivo1);
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
  
  
  
