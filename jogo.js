let colisao=false

let xBolona = 330
let yBolona = 250
let d = 20
let r = d/2
let vxBolona = 6
let vyBolona = 6

let xRaqueti = 5
let yRaqueti = 150
let cRaqueti = 10
let aRaqueti = 120

let xRaquetiop = 635
let yRaquetiop = 150
let vyRaquetiop

let MPontos = 0
let OpPontos = 0

let sRaquetada
let sPonto
let sTrilha

function preload(){
  sTrilha=loadSound("trilha.mp3")
  sRaquetada=loadSound("raquetada.mp3")
  sPonto=loadSound("ponto.mp3")
}
function setup() {
  createCanvas(650,500)
  sTrilha.loop()
}

function draw() {
  background(00,00,20);
  dsBolona()
  mvBolona()
  clBolona()
  
  dsRaqueti(xRaqueti,yRaqueti)
  dsRaqueti(xRaquetiop,yRaquetiop)
  
  mvRaqueti()
  mvRaquetiop()
  
  clRaqueti(xRaqueti,yRaqueti)
  clRaqueti(xRaquetiop,yRaquetiop)
  
  placar()
  
}
function dsBolona(){
  fill(0,200,200)
  stroke(0,180,180)
  circle(xBolona,yBolona,d)
  
}
function mvBolona(){
   xBolona += vxBolona
  yBolona += vyBolona
}
function clBolona(){
  if (xBolona+r>width||xBolona-r<0){
  vxBolona *= -1
  if (xBolona-r<0){
  xBolona=330
  }
  if (xBolona-r>630){
  xBolona=330
  }
}
if (yBolona+r>height||yBolona-r<0){
  vyBolona*=-1
}}
function dsRaqueti(x,y){
  fill(0,200,200)
  stroke(0,180,180)
  rect(x,y,cRaqueti,aRaqueti)
}

function mvRaqueti(){
  if (keyIsDown(UP_ARROW)){
      yRaqueti -= 7
      }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueti += 7
  } 
}
function clRaqueti(x,y){
  colisao=collideRectCircle(x,y,cRaqueti,aRaqueti,xBolona,yBolona,r)
 if (colisao) {
   vxBolona*=-1
   sRaquetada.play() 
 } }
function mvRaquetiop(){
  if (keyIsDown(87)){
  yRaquetiop-=7}
  if(keyIsDown(83)){
  yRaquetiop+=7
  }
}
function placar(){
  fill(0,255,255)
  textSize(30)
  textAlign(CENTER)
  textFont("Papyrus")
  textStyle(BOLD)
  text(MPontos,220,30)
  text(OpPontos,440,30)
  noFill()
  stroke(0,255,255)
  rect(195,6,50,30)
  rect(415,6,50,30)
  
 if(xBolona-r>620){
   MPontos+=1
   sPonto.play()
 }
  if(xBolona-r<5){
    OpPontos+=1
  sPonto.play()}
}
