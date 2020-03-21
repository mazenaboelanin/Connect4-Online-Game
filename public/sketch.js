const diameter = 50; 
const xwidth = 600; 
const yheight = 600 ;
const rows = 7; 
const cols = 7 ; 
const platformMargin = 2;

function playNow() 
{
    let myCanv = document.getElementById('defaultCanvas0');
    myCanv.style.display ="block";
    let btnPlay = document.getElementById('btn-play');
    btnPlay.style.display ="none";
    let btnQuit = document.getElementById('btn-quit');
    btnQuit.style.display ="block";
}
function quitGame(){
    let myCanv = document.getElementById('defaultCanvas0');
    myCanv.style.display ="none";
    let btnQuit = document.getElementById('btn-quit');
    btnQuit.style.display ="none";
    let btnPlay = document.getElementById('btn-play');
    btnPlay.style.display ="block";
}
// 300px in x and in y  , 25 in diameter
let piece = new Piece(xwidth / 2, yheight / 2, diameter, {r:250, g:10, b:0});

let platform = new Platform (rows, cols, 0, 0, 50, {r:0, g:0,b:0}, platformMargin);

function setup(){
    //let canv = 
    createCanvas(xwidth,yheight); 
    //canv.postion(0, 0, 'relative');
    //select('canvas').position(451.2, 230);
    
}

function draw(){
    //background color 
    background(0,0,255);
    platform.show();
    piece.show();
    movementOfPiece(piece);
}

//movement
let movementOfPiece = p => {
    p.x = mouseX;
    p.y = mouseY;
}

let putPieceOnPlatform = (piece, platform) => {
    //map function from p5.js
    //map(value, start1, stop1, start2, stop2, [withinBounds])
    let mapX = map(piece.x, 0, width, 0, rows )
    let mapY = map(piece.y, 0, width, 0, cols )

    // console.log(mapX, mapY);
    // console.log(floor(mapX), floor(mapY));
    platform.platform[floor(mapX)][floor(mapY)] = new Piece(piece.x, piece.y, piece.diameter, piece.color);
    //platform.insert(piece)
}

//p5.js click function
function mouseClicked() {

    putPieceOnPlatform(piece, platform);

    // if (value === 0) {
    //   value = 255;
    // } else {
    //   value = 0;
    // }
  }

  