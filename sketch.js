var dog, happyDog, database, foodS, foodStock;
var dogIMG, happyDogIMG

function preload(){
  dogIMG = loadImage("images/dogImg.png")
  happyDogIMG = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,250)
  dog.addImage(dogIMG)
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogIMG)
  }

  drawSprites();

  text("Note:Press up arrow to feed drago the milk", 250,210)
  function readStock(data){
    foodS = data.val()

  }

  function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }




  database.ref("/").update({
    Food:x
  })
  }


}



