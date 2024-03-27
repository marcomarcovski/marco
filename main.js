const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".botao");
for(let i=;i<botoes.lenght;i++){
  botoes[i].onclick=function(){


    botoes[j].classlist.remove("ativo")
    textos[j].classlist.remove("ativo")
  }
 botoes[j].classlist.add("ativo");
  textos[j].classlist.add("ativo");
} 
}
  
    
const contadores= document.queryselectorall(".contador");
const tempoObjetivo1= new Date("2024-03-25T00:00:00");
let tempoAtual= new date();
contadores[0].textcontent=calculaTempo(tempoobjetivo1)
