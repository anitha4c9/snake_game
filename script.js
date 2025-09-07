// Game constants and variables

let inputDir={x: 0, y: 0};

const movesound= new Audio("move.mp3")
const foodsound= new Audio("food.mp3")
const gameoversound= new Audio("gameover.mp3")
let spped=9;
let lastPainTime=0;
let snakArray=[{x: 13, y:15}];
food={x: 6,y:7};

//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
   // console.log(ctime);
   if ((ctime-lastPainTime)/1000<1/spped){
       return;
   }
   lastPainTime=ctime;
   gameEngine();
}
function collide(snake){
 for (let i=1;i<snakArray.length;i++){
    if(snake[i].x===snake[0].x&&snake[i].y===snake[0].y){
        return true;

    }
 }
 //if you bump into the wall
 if(snake[0].x>=18|| snake[0].x<=0||snake[0].y>18||snake[0].y<=0){
    return true;
 }
 return false;
}
function gameEngine(){
    //part1 
  if(collide(snakArr)){
    gameoversound.play();
    inputDir={x:0,y:0};
    alert("Game Over press ctrl + r to refresh the game");
    snakArr=[{x:13,y:15}];
    score=0;
 }
    //if you have eaten 
    if(snakArray[0].y===food.y&&snakArray[0].x===food.x00){
        foodsound.play();
        score++;
        if(score>hiscoreval){
            hiscoreval=score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
            hiscorebox.innerHTML="Hiscore:"+hiscoreval;
        }

        scorebox.innerHTML="score:"+score;
        snakArray.unshift({x:snakArray[0].x+inputDir.x,y:snakArray[0].y+inputDir.y});
        let a=2,b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.random(a+(b-a)*Math.random())}
    }
    //move the snake
    for(let i=snakArray.length-2 ;i>=0;i++){
        snakArray[i+1]={...snakArray[i]};

    }
    snakArray[0].x+=inputDir;

    //part2... display /render snake and food
    playArea.innerHTML="";
    snakArray,forEach((e, index)=>{
        snakElement=document.createElement('div');
        snakElement.style.grideRowStart=e.y;
        snakElement.style.gridecolumsStart=e.x;
        if (index===0){
        snakElement.classList.add('head');
    }else{
        snakElement.classList.add('head');
    }
    playArea.appendChild(snakElement);
    });
    //display food
foodElement=document.createElement('div');
        foodElement.style.grideRowStart=food.y;
        foodElement.style.gridecolumsStart=food.x;
         foodElement.classList.add('food');
         playArea.appendChild(foodElement);

}




// Main logic behind running the game
let hiscoreval=localStorage.setItem("hiscore");
if(hiscore==null){
    hiscoreval=0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
}else{
    hiscoreval=JSON.parse(hiscore);
    hiscorebox.innerHTML="Hiscore: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};
    switch (e.key){
        case "Arrowup":
            console.log("Arrow Up");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("Arrow Down");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("Arrow Left");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("Arrow Right");
            inputDir.x=1;
            inputDir.y=0;
            break;

        default:
    }
})