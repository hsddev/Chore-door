let doorImage1 = document.getElementById('door1');

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');


let openDoor1;
let openDoor2;
let openDoor3;

let numClosedDoors = 3;

let currentlyPlaying = true;

function randomChoreDoorGenerator() {
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
   if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1) { 
    openDoor2 = botDoorPath; 
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;                  
                           }
  else { 
    openDoor3 = botDoorPath; 
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
       } 
};

const isBot = (door) => {

    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

function playDoor(door) {
    numClosedDoors=numClosedDoors-1;
    if (numClosedDoors === 0) {
        gameOver('win');
        numClosedDoors = 3;
    }
    if(isBot(door)) {
        gameOver();
    }
    };

const isClicked = (door) => {
if (door.src === closedDoorPath) {
    return true;
} else {
    return false;
}
};    


const startRound = () => {
    numClosedDoors= 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (status ) => {
if(status === 'win' ) {
    startButton.innerHTML = "You win! Play again?";
} else {
    startButton.innerHTML = "Game over! Play again"; 
};
currentlyPlaying = false;
};

startButton.onclick = () => {
    startRound();
  }

doorImage1.onclick = () => {
if(isClicked(doorImage1) && currentlyPlaying) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
};
};

doorImage2.onclick = () => {
    if(isClicked(doorImage2) && currentlyPlaying) {
 doorImage2.src = openDoor2;
 playDoor(doorImage2);
};
};

doorImage3.onclick = () => {
    if(isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
};
};

startRound();



