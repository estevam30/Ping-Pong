// Criar Bolinha
let raio = 7.5;
let xBolinha = 100;
let yBolinha = 200;
let diamante = raio * 2;

// Velocidade deea bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Minha Raquete
let xRaquete = 5;
let YRaquete = 150;

// Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//Placar
let meusPontos = 0;
let pontosOponentes = 0;

function setup (){
  createCanvas (600,400)()
  trilha.play()}

}
function movimentoBolinha(){
  
  circle(xBolinha, yBolinha, diamante);
  
  xBolinha += velocidadeXbolhinha;
  yBolinha += velocidadeYbolinha;
  if(xBolinha + raio > width || xBolinha -raio < 0){
   velocidadeYBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha-raio < 0){
    velocidadeYBolinha *= -1}}

function raquete