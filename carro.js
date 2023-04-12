//variaveis do carro
// código dos carros

let xCarros =[600, 600, 600];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 3.2, 2.5]

function mostraCarro(){
  image(imagemCarro, xCarros[0], yCarros[0], 65, 40);
  image(imagemCarro2, xCarros[1], yCarros[1], 65, 40);
  image(imagemCarro3, xCarros[2], yCarros[2], 65, 40);
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}

function voltaCarro(){
  if (xCarros[0] < -60){
    xCarros[0] = 600
  }
  if (xCarros[1] < -60){
    xCarros[1]= 600
  }
  if (xCarros[2] < -60){
    xCarros[2] = 600
  } 
}