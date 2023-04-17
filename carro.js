//variaveis do carro
// código dos carros

let xCarros =[600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3.2, 2.5, 5, 3.3, 2.3];
let comprimentoCarro = 65;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i< imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    // pode colocar i++ para substituir i = i + 1
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