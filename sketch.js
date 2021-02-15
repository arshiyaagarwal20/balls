const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function preload(){




}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
 ground=new Ground(600,200,1200,400)









}



function draw(){

ground.display();
    
}














