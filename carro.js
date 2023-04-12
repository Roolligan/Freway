//variaveis do carro
// carro 1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1 = 2;

// carro 2
let xCarro2 = 600;
let yCarro2 = 100;
let velocidadeCarro2 = 3.2;

// carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 2.5;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro, 65, 40);
  image(imagemCarro2, xCarro2, yCarro2, 65, 40);
  image(imagemCarro3, xCarro3, yCarro3, 65, 40);
}

function movimentaCarro(){
  xCarro -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltaCarro(){
  if (xCarro < -60){
    xCarro = 600
  }
  if (xCarro2 < -60){
    xCarro2 = 600
  }
  if (xCarro3 < -60){
    xCarro3 = 600
  } 
}