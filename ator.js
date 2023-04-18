//ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(travaAtor()){
    yAtor += 3;
  }
 }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if (colisao){
    vaiBase();
    somColisao.play();
    if (pontosMaiorQueZero()){
    meusPontos -= 1;
     }	
    }
  }
}

function vaiBase(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  FileList(color(255, 240, 60));
  Text(meusPontos, width / 5, 28);
}
function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    somPonto.play();
    vaiBase();
  }
}
function meusPontosMaiorQueZero(){
  return meusPontos > 0;
}
function travaAtor(){
  return yAtor < 366;
}