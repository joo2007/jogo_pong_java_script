//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 50;
let raio = diametro /2 ;

//velocidade da bolinha
let velocidadexBolinha = 2;
let velocidadeyBolinha = 0;
let raqueteComprimento = 10;
let raqueteAltura = 90;



//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
   
   circle (xBolinha, yBolinha, diametro);
  movimentaBolinha();
 verificaColisãoBorda();
 mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisãoRaquete();
  }
function verificaColisãoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeyBolinha *= -1;
    }
}
function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
  
  
}


function mostraBolinha(){
  circle (xBolinha, yBolinha, diametro) 
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    }
if (keyIsDown(DOWN_ARROW)){
  yRaquete += 10;
  
}


}
function verificaColisãoRaquete(){
  if(xBolinha< xRaquete + raqueteComprimento
      && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    
  }
  
  
}


function movimentaBolinha(){
    xBolinha += velocidadexBolinha;
   yBolinha += velocidadeyBolinha;
  
  
}
