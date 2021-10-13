var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// var imag = document.getElementById("image");
// var clear = window.setInterval(rotate, 5);
// var score = document.getElementById("score");
// var score1 = document.getElementById("result");
// var score2 = document.getElementById("result1");
var str = ""; 
var circle;
var z = 200;
var i = 0;

var isTrue = false

var isTrue1 = false
var frame;
// var img = new Image();
// img.src = "thumb.png";
// var bleep = new Audio();
// bleep.src = "jump.mp3";

// var bleep1 = new Audio();
// bleep1.src = "bubble.mp3";
class Ball{
  constructor(){
    this.x = 170;
    this.y = 600;
  this.r = 10;
   this.color = "yellow";  
}
createball(){
  ctx.save()
  ctx.fillStyle = this.color;
  ctx.translate(this.x,this.y)
  ctx.beginPath()
  ctx.arc(0,0,10,0,Math.PI*2,true)
  ctx.fill()
  ctx.restore()
}


}
const ball1 = new Ball();



class Circle {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  createcircle(){
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.r, 0, 120*(Math.PI)/180, false);
   ctx.lineWidth = 14;
   ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
   ctx.stroke();

   ctx.beginPath();
   ctx.arc(this.x, this.y, this.r, 120*(Math.PI)/180, 240*(Math.PI)/180, false);
   ctx.lineWidth = 14;
   ctx.strokeStyle = "blue";
   ctx.stroke();

   ctx.beginPath();
   ctx.arc(this.x, this.y, this.r, 240*(Math.PI)/180, 2*(Math.PI)/180, false);
   ctx.lineWidth = 14;
   ctx.strokeStyle = "red";
   ctx.stroke();
  }
} 
  const circle1 = new Circle(0, 0, 80)
  const circle2 = new Circle(0, 0, 80)
  
  
class Bar{
   constructor(width, height,y,color, ball){
     this.w = width;
     this.h = height;
     this.x = 0
     this.color = color
     this.y = y
     this.x1 = 70
     this.x2 = 140
     this.x3 = 210
     this.x4 = 280
     this.x5 = -70
     this.bally = ball.y
     
   } 
   createbar(){
     ctx.save()
     ctx.translate(0, this.y)
     ctx.fillStyle = this.color[0];
     ctx.fillRect(this.x,0,this.w,this.h)
     if(this.bally == this.y ){
        // cancelAnimationFrame(frame)
        
     }
     ctx.fillStyle = this.color[1];
     ctx.fillRect(this.x1,0,this.w,this.h)

     ctx.fillStyle = this.color[2];
     ctx.fillRect(this.x2,0,this.w,this.h)

     ctx.fillStyle = this.color[3];
     ctx.fillRect(this.x3,0,this.w,this.h)

     ctx.fillStyle = this.color[4];
     ctx.fillRect(this.x4,0,this.w,this.h)

     ctx.fillStyle = this.color[5];
     ctx.fillRect(this.x5,0,this.w,this.h)

  this.x+=1;
  this.x1+=1;
  this.x2+=1;
  this.x3+=1;
  this.x4+=1;
  this.x5+=1;
  this.x===350?this.x=-70:this.x1===350?this.x1=-70:this.x2===350?this.x2=-70:this.x3===350?this.x3=-70:this.x4===350?this.x4=-70:this.x5===350?this.x5=-70:console.log();

     
     ctx.restore()

   }
}  
const col = ["pink", "yellow", "red", "orange","blue", "green"]
const bar1 = new Bar(70, 20, 100, col,ball1)




  function circlelement(){
  //yellow arc
  ctx.fillStyle = "rgb(45, 45, 46)"
  ctx.fillRect(0,0,350,700);
  
  ctx.save() 
  ctx.translate(170,350)
  ctx.rotate(Math.PI/100 + i++/50)
  circle1.createcircle()
  ctx.restore()

  
  
  bar1.createbar()
  
  ball1.createball();
   frame = requestAnimationFrame(circlelement)
   ball1.y === bar1.y?cancelAnimationFrame(frame):console.log()
   isTrue?ball1.y-=5:isTrue1?ball1.y+=2:console.log()
    

  }
  frame = requestAnimationFrame(circlelement)
 
  window.addEventListener('keydown', (e) =>{
    e.key==="ArrowUp"?isTrue=true:console.log()
  
  })

  window.addEventListener('keyup', (e) =>{
    if(e.key==="ArrowUp"){
      isTrue=false;
      isTrue1=true;
    }
  
  })