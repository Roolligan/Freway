//variaveis do carro
// código dos carros

let xCarros =[600, 600, 600];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 3.2, 2.5]

function mostraCarro(){
  for (let i = 0; i< imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 65, 40);
 }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarro){
  return xCarro < - 60;
}